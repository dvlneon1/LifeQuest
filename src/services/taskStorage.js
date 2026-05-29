const STRONG_KEY = "tasks"
export function saveTasks(tasks){
    localStorage.setItem(
        STRONG_KEY,
        JSON.stringify(tasks)
    )
}

export function loadTasks(){
    const data = localStorage.getItem(STRONG_KEY)

    return data ? JSON.parse(data) : console.log("nada")
}