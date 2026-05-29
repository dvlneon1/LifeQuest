import { useState } from "react";
import '../styles/TaskForm.css';


export default function TaskForm({ onAddTask }){
    const [title, setTitle] = useState("")
    const [difficulty, setDifficulty] = useState("easy")
    const [category, setCategory] = useState("body")

    function handleSubmit(e){

        e.preventDefault()
        if (!title.trim()) return 
        onAddTask(title, difficulty, category)
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
                <select value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="body">Corpo</option>
                    <option value="knowledge">Conhecimento</option>
                    <option value="discipline">Disciplina</option>
                    <option value="finances">Finanças</option>
                    <option value="social">Social</option>
                </select>
                <button type="submit">Adicionar Tarefa</button>
            </form>
        </div>
    )
}