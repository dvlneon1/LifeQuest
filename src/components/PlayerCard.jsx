import '../styles/PlayerCard.css'

export default function PlayerCard({ player }){
    return(
        <div className="player-card"> 
            <h2>{player.name}</h2> 
            <p>Level: {player.level}</p> 
            <p>XP: {player.xp}</p> 
        </div>

    )
}