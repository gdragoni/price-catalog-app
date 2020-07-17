import { combineReducers, createStore } from 'redux'
import user from './User';

export default createStore(
    combineReducers({
        user,
    })
);