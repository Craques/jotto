import React from 'react'
import {shallow} from 'enzyme'
import checkPropTypes from 'check-prop-types'
import Congrats from './congrats'

/**
 * Factory function to create a shallow wrapper component
 * @param {Object} props 
 * @returns {ShallowWrapper} 
 */

const setup = (props = {})=>{
    return shallow(<Congrats {...props}/>)
}

/**
 * Function to find component by test attribute value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - value of test attribute to find
 * `
 */
const findByTestAttr = (wrapper, val)=>{
    return wrapper.find(`[data-test="${val}"]`)
}

test('Renders without errors', () => {
    const wrapper = setup({success: true})
    const congratsComponent = findByTestAttr(wrapper, 'congrats-component')

    expect(congratsComponent.length).toBe(1)
});

test('renders no text when success prop is false', () => {
    const success = false
    const wrapper = setup({success})
    const congratsComponent = findByTestAttr(wrapper, 'congrats-component')

    expect(congratsComponent.text()).toBe('')
});

test('renders non empty congrats message when success prop is true', () => {
    const success = true
    const wrapper = setup({success})

    const congratsMessage =findByTestAttr(wrapper, 'congrats-message')
    expect(congratsMessage.text().length).not.toBe(0)
});

test('does not throw a warning with expected props',()=>{
    const expectedProps = {success: false}
    const propError = checkPropTypes(Congrats.propTypes, expectedProps, 'prop', Congrats.name)

    expect(propError).toBe(undefined)
})