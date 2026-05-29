import { getXpByDifficulty } from "../utils/xpHelper"

export class Task {

    constructor(title, difficulty){
        this.id = crypto.randomUUID()
        this.title = title
        this.difficulty = difficulty
        this.xpReward = getXpByDifficulty(difficulty)
        this.completed = false
        this.createdAt = new Date().toISOString()
    }
}