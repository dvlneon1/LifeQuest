const STORAGE_KEY = "player"

export function savePlayer(player){
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
    return JSON.parse(data)
}
