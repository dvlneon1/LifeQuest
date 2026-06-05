import '../styles/XpBar.css'

export default function XpBar({currentXp, requiredXp}){

    const percentage = Math.min((currentXp / requiredXp) * 100, 100) 

    return (
        <div className="xp-bar-container">
            <div className="xp-bar-fill" style={{width: `${percentage}`}}></div>
        </div>
    )
}