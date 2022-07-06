import { LOGIN_USER, USER_ADD_CHAT } from "./actions";

const INITIAL_STATE = {
    id: 11223322,
    name: "Unname",
    tagName: "@unname",
    chats: [1, 2],
    groups: [1, 2],
}

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        case USER_ADD_CHAT:
            return { ...state, chats: [...state.chats, payload] }; 
        case LOGIN_USER:
            return { 
                id: state.id,
                name: payload,
                tagName: `@${payload.toLowerCase()}`,
                chats: state.chats,
                groups: state.groups,
            };      
        default:
            return state;
    }
}