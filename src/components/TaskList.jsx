import NoReturn from "./NoReturn";
import TaskCard from "./TaskCard";

export default function TaskList({tasks = [], onComplete, onDelete}){
    if (tasks.length === 0){
        return <NoReturn />
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