import '../styles/Dashboard.css'

import { useEffect, useState } from "react"
import { Player } from "../models/Player"
import { Task } from "../models/task"

import TaskForm from "../components/TaskForm"
import TaskList from "../components/TaskList"
import PlayerCard from "../components/PlayerCard"

import { saveTasks, loadTasks } from "../services/taskStorage"

import { PlayerSystem } from "../system/playerSystem"
import { loadPlayer, savePlayer } from "../system/PlayerStorage"


export default function Dashboard(){

    const [player, setPlayer] = useState(() => loadPlayer() || new Player("Fernando")
    )

    const [tasks, setTasks] = useState(() => loadTasks())

    function handleAddTask(title, difficulty, category){
        const newTask = new Task(title, difficulty, category)

        setTasks(prev => [
            ...prev, 
            newTask
        ])
    }

    function handleCompleteTask(taskId){
        const task = tasks.find(
            task => task.id === taskId
        )

        if(!task || task.completed) 
            return 
        const updatePlayer = { ...player }
        
        PlayerSystem.addXp(updatePlayer, task.xpReward)

        setPlayer(updatePlayer)
        
        setTasks(prev => prev.map(task => task.id === taskId ? {...task, completed: true} : task))
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
        <div className="dashboard-main">
            <div className="menu">
                <h1>Life Quest v0.01_Alpha</h1>
                <PlayerCard player={player} />
                <TaskForm onAddTask={handleAddTask}/>
                <TaskList tasks={tasks} onComplete={handleCompleteTask} onDelete={handleDeleteTask}/>
            </div>
        </div>
    )
}