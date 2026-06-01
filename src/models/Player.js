import { skillsData } from "../services/skillsData"

export class Player{
    constructor(name){
        this.name = name
        this.level = 1
        this.xp = 0
        this.skills = this.createSkills()
    
    }

    createSkills(){
        const skills = {}
        for(const skillKey in skillsData){
            skills[skillKey]={
                level: 1,
                xp: 0
            }
        }
        return skills
    }
}