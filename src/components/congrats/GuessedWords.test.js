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

describe('if there are no words guessed',()=>{
    let wrapper
    beforeEach(()=>{
        wrapper = setup({guessedWords: []})
    })

    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'guessed-words-component')
        expect(component.length).toBe(1)
    });

    test('renders instructions to a guessed word', () => {
        const instructions = findByTestAttr(wrapper, 'guess-instructions')
        expect(instructions.text().length).not.toBe(0)
    });
})

describe('if there are words guessed', ()=>{

})