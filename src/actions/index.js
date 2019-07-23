export const actionTypes = {
    CORRECT_GUESS: 'CORRECT_GUESS'
}

/**
 * @returns {object} - Action object with type correct guess
 */
export function correctGuess(){
    return {type: actionTypes.CORRECT_GUESS}
}