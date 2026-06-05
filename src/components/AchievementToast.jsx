import '../styles/AchievementToast.css'

export default function AchievementToast({achievement}){
    if(!achievement) return null

    return(
        <div className="achievement-toast">
            <div className="toast-icon">
                {achievement.icon}
            </div>
            <div>
                <h4>Conquista Desbloqueada!</h4>
                <strong>{achievement.name}</strong>
                <p>{achievement.description}</p>
                <p>+XP: {achievement.reward.xp} {" | "} +Gold: {achievement.reward.gold}</p>
            </div>
        </div>
    )
}