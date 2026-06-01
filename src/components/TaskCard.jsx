import '../styles/TaskCard.css'

export default function TaskCard({task, onComplete, onDelete}){
    return (
        <div className="task-card">
            <h3>{task.title}</h3>

            <p>Difficuldade: {task.difficulty}</p>
            <p>Categoria: {task.category}</p>
            <p>Sub Skill: {task.subSkill}</p>
            <p>Recompensa em XP: {task.xpReward}</p>
            <p>Status: { task.completed ? "Completa" : "Incompleta" }</p>
            {!task.completed && (<button className="btn-success"onClick={() => onComplete(task.id)}>Complete</button>)}
            <button className="btn-delete" onClick={() => onDelete(task.id)}>Deletar</button>
        </div>
    )   
}