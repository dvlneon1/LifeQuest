import { getXpRequired } from "../utils/levelHelper";

export class SubSkillSystem {
    
    static addXP(
    player,
    skillName,
    subSkillName,
    amount
){

    console.log("========== DEBUG ==========")
    console.log("skillName:", skillName)
    console.log("subSkillName:", subSkillName)
    console.log("player:", player)
    console.log("skills:", player.skills)

    const skill = player.skills?.[skillName]

    console.log("skill encontrada:", skill)

    if(!skill){
        return
    }

    console.log("subSkills:", skill.subSkills)

    const subSkill = skill.subSkills?.[subSkillName]

    console.log("subSkill encontrada:", subSkill)

    if(!subSkill){
        return
    }

    subSkill.xp += amount

    let xpNeeded = getXpRequired(subSkill.level)

    while(subSkill.xp >= xpNeeded){
        subSkill.xp -= xpNeeded
        subSkill.level++
        xpNeeded = getXpRequired(subSkill.level)
    }
}
}