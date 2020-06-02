import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from './rootReducer'


const composeEnhancers = process.env.NODE_ENV === 'development' ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ : null ;
const store = createStore(rootReducer, composeEnhancers(
    applyMiddleware(thunk)
))

export default store