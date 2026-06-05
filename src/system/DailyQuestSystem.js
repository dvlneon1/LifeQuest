import { dailyQuestData } from "../services/DailyQuestData";

export class DailyQuestSystem {
    static generate(player){
        const today = new Date().toDateString()

        if(player.dailyQuestDate === today){
            return
        }

        player.dailyQuestDate = today

        player.dailyQuests = dailyQuestData.map(
            quest => ({
                ...quest,
                progress: 0,
                completed: false
            })
        )
    }
}