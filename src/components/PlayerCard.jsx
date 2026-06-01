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
                    ([key, skill]) => (
                        <div key={key}>
                            <h4>{key}</h4>
                            <p>Level: {skill.level}</p>
                                <p>xp: {skill.xp}</p>
                        </div>
                    )
                )}
            </div>
        </div>

    )
}