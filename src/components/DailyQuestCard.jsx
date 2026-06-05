import '../styles/DailyQuestCard.css'

export default function DailyQuestCard({quests = []}){
    
    if (!quests) {
        return (
            <div className="daily-card">
                <h3>Daily Quests</h3>
                <p>Carregando...</p>
            </div>
        )
    }
    
    return(
        <div className="daily-card">
            <h3>Daily Quests</h3>

            {quests.length === 0 ?(
                <p>Nenhuma missão diária disponível.</p>
            ):(
                quests.map((quest) => (
                    <div key={quest.id} className="daily-quest-item">
                        <strong>{quest.name}</strong>

                        <p>
                            {quest.progress} / {quest.target}
                        </p>

                        <p>
                            +{quest.reward.xp} XP | +{quest.reward.gold} Gold
                        </p>

                        {quest.completed && (
                            <span>✅ Completa</span>
                        )}
                    </div>
                ))
            )}
        </div>
    )
}