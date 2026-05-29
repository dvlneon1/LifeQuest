import { getXpRequired } from "../utils/levelHelper";

export class PlayerSystem{
    static addXp(player, amount){
        player.xp += amount

        let xpNeeded = getXpRequired(player.level)
        
        while(player.xp >= xpNeeded){
            player.xp -= xpNeeded
            player.level ++
            xpNeeded = getXpRequired(player.level)
        }
    }
}