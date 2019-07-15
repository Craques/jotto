import React from 'react'
import {shallow} from 'enzyme'
import {findByTestAttr, checkProps} from './../../test.utils'
import GuessedWords from './GuessedWords'

const defaultProps = {success: false, 
    guessedWords:[{guessedWords: 'train',letterMatchCount: 3}]
}
/**
 * 
 * @param {object} props - Component props specific to 
 */
const setup = (props={})=>{
    const setupProps = {...defaultProps, ...props}
    return shallow(<GuessedWords {...setupProps}/>)
}

test('does not throw warning with expected props', () => {
    checkProps(GuessedWords, defaultProps)

});