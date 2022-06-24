import { LOGIN_USER } from "./actions";

const INITIAL_STATE = {
    name: "Unname",
    tagName: "@unname",
}

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        
        case LOGIN_USER:
            console.log(payload)
            return { 
                name: payload,
                tagName: `@${payload.toLowerCase()}`
            };      
        default:
            return state;
    }
}