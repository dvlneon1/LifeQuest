import '../styles/Dashboard.css'

import { useEffect, useState } from "react"
import { Player } from "../models/Player"
import { Task } from "../models/Task"

import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import PlayerCard from "../components/PlayerCard"
import AchievementToast from "../components/AchievementToast"

import { saveTasks, loadTasks } from "../services/taskStorage"

import { PlayerSystem } from "../system/playerSystem"
import { loadPlayer, savePlayer } from "../system/PlayerStorage"
import { SkillSystem } from '../system/SkillSystem'
import { SubSkillSystem } from '../system/SubSkillSystem'
import { AchievementSystem } from '../system/AchievementSystem'


export default function Dashboard(){

    const [player, setPlayer] = useState(
        () => loadPlayer() || new Player("Fernando")
    )

    const [tasks, setTasks] = useState(() => loadTasks())

    const [toastAchievement, setToastAchievement] = useState(null)

    function handleAddTask(title, difficulty, category, subSkill, gold){

        console.log({
            title,
            difficulty,
            category,
            subSkill,
            gold,
        })

        const newTask = new Task(title, difficulty, category, subSkill, gold)

        setTasks(prev => [
            ...prev, 
            newTask
        ])
    }

    function handleCompleteTask(taskId){
        
        const task = tasks.find(
            task => task.id === taskId
        )

        if(!task || task.completed) return 
        
        const updatePlayer = structuredClone(player)

        if(!updatePlayer.stats){
            updatePlayer.stats = {
                taskCompleted: 0
            }
        }

        updatePlayer.stats.taskCompleted++

        if(updatePlayer.gold === undefined){
            updatePlayer.gold = 0
        }

        PlayerSystem.addXp(updatePlayer, task.xpReward)

        SkillSystem.addSkillXp(updatePlayer, task.category, task.xpReward)

        console.log(updatePlayer.gold)
        updatePlayer.gold += task.goldReward

        const unlockedAchievement = AchievementSystem.check(updatePlayer)

        if(unlockedAchievement.length > 0){
            setToastAchievement(unlockedAchievement[0])

            setTimeout(() => {setToastAchievement(null)}, 4000)
        }


        console.log(updatePlayer)
        console.log(updatePlayer.skills)
        console.log(updatePlayer.skills?.body)
        console.log(updatePlayer.skills?.body?.subSkills)
        
        if(task.subSkill){
            SubSkillSystem.addXP(
            updatePlayer,
            task.category,
            task.subSkill,
            task.xpReward
            )
        }

        setPlayer(updatePlayer)
        
        setTasks(prev => prev.map(task => task.id === taskId ? {...task, completed: true} : task))

        console.log("TASK:", task)
        console.log("CATEGORY:", task.category)
        console.log("SUBSKILL:", task.subSkill)
    
    }

    function handleDeleteTask(taskId){
        setTasks(prev => prev.filter(task => task.id !== taskId))
    }

    useEffect(() => {saveTasks(tasks)}, [tasks])
    useEffect(() => {
        if(player){
            savePlayer(player)
        }
    }, [player])

    return(
        <>
            <div className="dashboard-main">
                <div className="menu">
                    <div className="profile-card">
                        <PlayerCard player={player} />
                    </div>
                    <div>
                        <TaskForm onAddTask={handleAddTask}/>
                        <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask}/>
                    </div>
                    <div>
                    </div>
                </div>
            </div>
            <AchievementToast achievement={toastAchievement}/>
        </>
    )
}