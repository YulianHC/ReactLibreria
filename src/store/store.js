import {createStore, combineReducers, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'

import { authReducer } from '../Reducers/authReducer';
import  {uiReducer}  from "../Reducers/uiReducer";

const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;


export const Reducer = combineReducers({
    auth : authReducer,
    ui:uiReducer
});

export const store = createStore(
    Reducer,
    composeEnhancers(
        applyMiddleware(thunk)  
    )
    );
