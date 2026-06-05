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
    
    if(!data){
        return null
    }

    const player = JSON.parse(data)

    if(player.gold === undefined){
        player.gold = 0
    }
    return player
}
