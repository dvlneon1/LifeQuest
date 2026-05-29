export class Player{
    constructor(name){
        this.name = name
        this.level = 1
        this.xp = 0
        this.skill = {
            body: {
                level: 1,
                xp: 0
            },
            
            knowledge: {
                level: 1,
                xp: 0
            },

            discipline: {
                level: 1,
                xp: 0
            },

            finances: {
                level: 1,
                xp: 0
            },

            social: {
                level: 1,
                xp: 0
            }
        }
    }
}