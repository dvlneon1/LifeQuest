export function getGoldByDifficulty(difficulty){
    const goldTable = {
        easy: 5,
        medium: 15,
        hard: 30,
        veryHard: 75
    }

    return goldTable[difficulty]
}