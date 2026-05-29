export function getXpByDifficulty(difficulty){
    const xpTable = {
        easy: 10,
        medium: 25,
        hard: 50,
        veryHard: 100
    }

    return xpTable[difficulty]
}