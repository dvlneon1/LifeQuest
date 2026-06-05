const STORAGE_KEY = "player"

export function savePlayer(player){
    if (!player || typeof player !==  "object"){
        return
    }

    localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(player)
    )
}

export function loadPlayer(){
    const data = localStorage.getItem(STORAGE_KEY)
    
    if(!data) return null

    const player = JSON.parse(data)

    player.gold ??= 0

    player.achievements ??= []

    player.stats = { taskCompleted: 0 }

    if(!player.dailyQuests){
        player.dailyQuests = []
    }

    if(!player.dailyQuestsDate){
        player.dailyQuestsDate = null
    }

    return player
}
