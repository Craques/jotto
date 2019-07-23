import React, {Component} from 'react'
import {shallow} from 'enzyme'

import {findByTestAttr, storeFactory} from './../../test.utils'
import Input from './input'


/**
 * @function setup
 * @param {object} InitialState Initial state of the componenent 
 * 
 */

const setup = (InitialState = {})=>{
    const store = storeFactory(InitialState)
    const wrapper = shallow(<Input store={store}/>).dive().dive()
    return wrapper
}

describe('word has not been guessed',()=>{
    let wrapper
    beforeEach(()=>{
        const InitialState = {success: false}
        wrapper = setup(InitialState)
    })
    test('renders without error', () => {
        const component = findByTestAttr(wrapper, 'input-component')
        expect(component.length).toBe(1)
    });

    test('renders input-box component', () => {
        const component = findByTestAttr(wrapper, 'input-box')
        expect(component.length).toBe(1)
    });
    test('renders button', () => {
        const component = findByTestAttr(wrapper, 'submit-button')
        expect(component.length).toBe(1)
    });

})

describe('update state', ()=>{
    test('renders without error', () => {
        
    });

    test('does not render input component', () => {
        
    });
    test('does not render button', () => {
        
    });
})