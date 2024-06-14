import { combineReducers } from 'redux'
import getNameReducer from './nameReducer'
import getImageReducer from './imageReducer'
const rootReducer = combineReducers({
    getNameReducer,
    getImageReducer
})
export default rootReducer