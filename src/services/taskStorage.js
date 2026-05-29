const STRONG_KEY = "tasks"
export function saveTasks(tasks){
    localStorage.setItem(
        STRONG_KEY,
        JSON.stringify(tasks)
    )
}

export function loadTasks(){
    const data = localStorage.getItem(STRONG_KEY)

    if(!data || data === "undefined"){    
        return []
    }

    try {        
        return JSON.parse(data)   
    } catch (error) {    
        console.error("Erro ao carregar tasks: ", error)
        return []
    }
}