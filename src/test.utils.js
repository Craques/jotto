import checkPropTypes from 'check-prop-types'
import {createStore} from 'redux'
import rootReducer from './reducers'

/**
 * Function to find component by test attribute value
 * @param {ShallowWrapper} wrapper - Enzyme shallow wrapper
 * @param {string} val - value of test attribute to find
 * `
 */
export const findByTestAttr = (wrapper, val)=>{
    return wrapper.find(`[data-test="${val}"]`)
}

export const checkProps = (component, props)=>{
    const propError = checkPropTypes(
        component.propTypes,
        props,
        'prop',
        component.name
    )

    expect(propError).toBeUndefined()
}

export const storeFactory = (initialState)=>{
    return createStore(rootReducer, initialState)
}