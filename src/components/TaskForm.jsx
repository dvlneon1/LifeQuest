import '../styles/TaskForm.css';
import { skillsData } from "../services/skillsData";
import { useState } from "react";



export default function TaskForm({ onAddTask }){
    
    const [title, setTitle] = useState("")
    const [difficulty, setDifficulty] = useState("easy")
    const [category, setCategory] = useState("body")
    const [subSkill, setSubSkill] = useState(skillsData.body.subSkills[0])
    
    const availableSubSkills = skillsData[category]?.subSkills || []
    
    function handleSubmit(e){

        e.preventDefault()
        if (!title.trim()) return 
        onAddTask(title, difficulty, category, subSkill)
        setTitle("")

    }   
    return(
        <div className="task-form">
            <form onSubmit={handleSubmit} >
                <input type="text" placeholder="Nova Tarefa" value={title} onChange={(e) => setTitle(e.target.value)}/>
                <select value={difficulty} onChange={(e) => setDifficulty(e.target.value)} >
                    <option value="easy">Fácil</option>
                    <option value="medium">Médio</option>
                    <option value="hard">Difícil</option>
                    <option value="veryHard">Muito Difícil</option>
                </select>
                <select value={category} onChange={(e) => {
                    const selectedCategory = e.target.value
                    
                    setCategory(selectedCategory)

                    setSubSkill(skillsData[selectedCategory].subSkills[0])
                    }
                }>
                    {
                        Object.entries(skillsData).map(
                            ([key, skill]) => (

                                <option
                                    key={key}
                                    value={key}
                                >
                                    {skill.name}
                                </option>
                            )
                        )
                    }
                </select>
                <select value={subSkill} onChange={(e) => setSubSkill(e.target.value)}>
                    {
                        availableSubSkills.map(
                            (subSkill) => (
                                <option key={subSkill} value={subSkill}>{subSkill}</option>
                            )
                        )
                    }
                </select>

                <button type="submit">Adicionar Tarefa</button>
            </form>
        </div>
    )
}