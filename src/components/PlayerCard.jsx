import '../styles/PlayerCard.css'

export default function PlayerCard({ player }){
    return(
        <div className="card-profile">
            <div className="player-card"> 
                <h2>{player.name}</h2> 
                <p>Level: {player.level}</p> 
                <p>XP: {player.xp}</p> 
            </div>
            <div className="skills-container">
                {Object.entries(player.skills).map(
                    ([skillKey, skill]) => (
                        <div key={skillKey} className="skill-block">
                            <h4>{skillKey}</h4>
                            <p>Lv: {skill.level} {" | "}  xp: {skill.xp}</p>

                            <div className="sub-skills">
                                {
                                    Object.entries(skill.subSkills).map(
                                        ([subSkillName, subSkill]) => (
                                            <div key={subSkillName} className="sub-skill">
                                                <strong>{subSkillName}</strong>
                                                <p>Lv: {subSkill.level} {" | "} xp: {subSkill.xp}</p>
                                            </div>
                                        )
                                    )
                                }
                            </div>
                        </div>
                    )
                )}
            </div>
        </div>

    )
}