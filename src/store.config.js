import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './reducers/'

export const middleWare = [thunk]
export default createStore(rootReducer, {}, applyMiddleware(...middleWare))