import { getGoldByDifficulty } from "../utils/goldHelper"
import { getXpByDifficulty } from "../utils/xpHelper"

export class Task {

    constructor(
        title, 
        difficulty, 
        category,
        subSkill
    ){

        this.id = crypto.randomUUID()
        this.title = title
        this.difficulty = difficulty
        this.category = category
        this.subSkill = subSkill
        this.xpReward = getXpByDifficulty(difficulty)
        this.goldReward = getGoldByDifficulty(difficulty)
        this.completed = false
        this.createdAt = new Date().toISOString()

        console.log(category)
    
    }
}