import { LOGIN_USER } from "./actions";

const INITIAL_STATE = {
    id: 11223322,
    name: "Unname",
    tagName: "@unname",
    chats: [1, 2],
    groups: [1, 2],
}

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        
        case LOGIN_USER:
            return { 
                name: payload,
                tagName: `@${payload.toLowerCase()}`
            };      
        default:
            return state;
    }
}