import { combineReducers } from 'redux';
import itemReducer from './itemReducer';
import itinerarioReducer from './itineraryReducer';
import errorReducer from './errorReducer';
import authReducer from './authReducer';
import activityReducer from './activityReducer'

const rootReducer = combineReducers({
    item : itemReducer,
    itinerario : itinerarioReducer,
    error: errorReducer,
    auth: authReducer,
    activities: activityReducer
})
export default rootReducer