const STORAGE_KEY = "player"

export function savePlayer(player){
    if (!player || typeof player !==  "object"){
        console.warn("player inválido")
        
        return
    }

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(player)
    )
}

export function loadPlayer(){
    const data = localStorage.getItem(STORAGE_KEY)
    
    if(!data || data === "undefined"){
        return null
    }

    try {

        return JSON.parse(data)
        
    } catch (error) {
        console.error(
            "Error ao carregar player",
            error
        )
        
        localStorage.removeItem(STORAGE_KEY)

        return null
    }
}
