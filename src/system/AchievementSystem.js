import { achievementsData } from "../services/achievementsData";

export class AchievementSystem {
    static check(player){

        if(!player.achievements){
            player.achievements = []
        }

        const unlocked = []

        achievementsData.forEach(achievement => {
            const areadyUnlocked = player.achievements.some(a => a.id === achievement.id)

            if(areadyUnlocked) return

            let completed = false

            switch(achievement.condition.type){
                case "taskCompleted":
                    completed = player.stats.taskCompleted >= achievement.condition.value
                    break
                case "gold":
                    completed = player.gold >= achievement.condition.value
                    break
            }

            if(completed){
                player.achievements.push(achievement)

                player.xp += achievement.reward.xp
                player.gold += achievement.reward.gold
                
                unlocked.push(
                    achievement
                )
            }
        })

        return unlocked

    }
}