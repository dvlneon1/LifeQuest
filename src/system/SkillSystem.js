import { getXpRequired } from "../utils/levelHelper";

export class SkillSystem {
    static addSkillXp(
        player, 
        skillName, 
        amount
    ){
        const skill = player.skills[skillName]

        if(!skill) return
        
        skill.xp += amount
        
        let xpNeeded = getXpRequired(skill.level)

        while(skill.xp >= xpNeeded){

            skill.xp -= xpNeeded
            skill.level++

            xpNeeded = getXpRequired(skill.level)
        }
    }
}