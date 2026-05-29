import TaskCard from "./TaskCard";

export default function TaskList({tasks = [], onComplete, onDelete}){
    if (tasks.length === 0){
        return <p>Nenhuma Tarefa encontrada</p>
    }
    return(
        <div>
            {tasks.map(task => (
                <TaskCard
                    key = {task.id}
                    task = {task}
                    onComplete = {onComplete}
                    onDelete = {onDelete}
                />
            ))}
        </div>
    ) 
}