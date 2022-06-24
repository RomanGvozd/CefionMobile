import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import themeReducer from './theme/reducer'
import languageReducer from './language/reducer'
import userReducer from './user/reducer'


const root = combineReducers({
    theme: themeReducer,
    language: languageReducer,
    user: userReducer,
});

export const store = createStore(root, applyMiddleware(thunk))