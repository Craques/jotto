import { actionTypes } from "../actions";

/**
 * @param {array} state - Array of guessed words
 * @param {object} action = action to be fired
 * @returns {boolean} - new success state
 */

export default (state=false, action)=>{
    switch(action.type){
        case actionTypes.CORRECT_GUESS: 
            return true
        default:
            return false
    }
}