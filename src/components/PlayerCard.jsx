import XpBar from './XpBar'
import { getXpRequired } from '../utils/levelHelper'

import { useState } from 'react'
import '../styles/PlayerCard.css'

export default function PlayerCard({ player }){

    const [openSkill, setOpenSkill] = useState(null)

    return(
        <div className="card-profile">
            <div className="player-card"> 
                <h2>{player.name}</h2> 
                <p>Level: {player.level}</p> 
                <p>XP: {player.xp}{" / "}{getXpRequired(player.level)}</p>

                <XpBar currentXp={player.xp} requiredXp={getXpRequired(player.level)}/>
            </div>
            <div className="skills-container">
                {Object.entries(player.skills).map(
                    ([skillKey, skill]) => (
                        <div key={skillKey} className="skill-block" onClick={() => setOpenSkill (
                            openSkill === skillKey
                                ? null
                                : skillKey
                            )}>
                            <h4>{openSkill === skillKey ? "▼" : "▶"} {skillKey}</h4>

                            {
                                openSkill === skillKey && (
                                    <>
                                        <p>
                                            Lv: {skill.level}
                                        </p>
                                        <p>
                                            Xp: {skill.xp}{" / "}{getXpRequired(skill.level)}
                                        </p>
                                        <XpBar currentXp={skill.xp} requiredXp={getXpRequired(skill.level)}/>

                                        <div className="sub-skills">
                                            {
                                                Object.entries(skill.subSkills).map(
                                                    ([subSkillName, subSkill]) => (
                                                        <div key={subSkillName} className="sub-skill">
                                                            <strong>{subSkillName}</strong>
                                                            <p>Lv: {subSkill.level}</p>
                                                            <XpBar currentXp={subSkill.xp} requiredXp={getXpRequired(subSkill.level)}/>
                                                        </div>
                                                    )
                                                )
                                            }
                                        </div>
                                    </>
                                )
                            }

                        </div>
                    )
                )}
            </div>
        </div>

    )
}