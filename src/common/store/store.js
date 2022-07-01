import { createStore, combineReducers, applyMiddleware } from "redux"
import thunk from "redux-thunk"

import themeReducer from './theme/reducer'
import languageReducer from './language/reducer'
import userReducer from './user/reducer'
import newsReducer from './news/reducer'
import usersReducer from './users/reducer'
import chatsReducer from './chats/reducer'
import groupsReducer from './groups/reducer'


const root = combineReducers({
    theme: themeReducer,
    language: languageReducer,
    user: userReducer,
    news: newsReducer,
    users: usersReducer,
    chats: chatsReducer,
    groups: groupsReducer,
});

export const store = createStore(root, applyMiddleware(thunk))