import { skillsData } from "../services/skillsData"

export class Player{
    constructor(name){
        this.name = name
        this.level = 1
        this.xp = 0
        this.gold = 0

        this.skills = this.createSkills()

        this.stats = { 
            taskCompleted: 0,
            totalXpEarned: 0,
            totalGoldEarned: 0
        }

        this.achievements = []

    }

    createSkills() {

        const skills = {}

        for(const skillKey in skillsData){

            skills[skillKey] = {

                level: 1,
                xp: 0,

                subSkills: {}
            }

            skillsData[skillKey].subSkills.forEach(subSkill => {

                skills[skillKey].subSkills[subSkill] = {

                    level: 1,
                    xp: 0
                }
            })
        }
        return skills
    }
}