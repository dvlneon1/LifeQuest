import '../styles/AchievementList.css'

export default function AchievementList({ achievements }) {

    console.log("ACHIEVEMENTS:", achievements)

    if (!achievements || achievements.length === 0) {
        return (
            <div className="achievement-card">
                <h3>Conquistas</h3>
                <p>Nenhuma conquista desbloqueada.</p>
            </div>
        )
    }

    return (
        <div className="achievement-card">
            <h3>Conquistas</h3>

            <div className="achievement-list">
                {achievements.map((achievement, index) => (
                    <div
                        key={achievement.id || index}
                        className="achievement-item"
                    >
                        <span>{achievement.icon}</span>

                        <div>
                            <strong>{achievement.name}</strong>
                            <p>{achievement.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}