import { ACTION_ADD_CHAT, ACTION_DELETE_CHAT, ACTION_EDIT_CHAT} from "./actions";

const INITIAL_STATE = [
    {
        id: 1,
        title: "Chat Name",
        date: "2022-06-09 10:08",
        type: "public",
        users: [
            {
                id: 1,
                name: "Arnold"
            },
            {
                id: 2,
                name: "Anton"
            },
        ],
        message: [
            {
                userID: 1,
                message: "Hello.",
            },
            {
                userID: 2,
                message: "Hi.",
            },
            {
                userID: 1,
                message: "How age you?",
            },
        ],
    },
    {
        id: 2,
        title: "First Chat",
        date: "2022-06-09 10:08",
        type: "public",
        users: [
            {
                id: 1,
                name: "Arnold"
            },
            {
                id: 2,
                name: "Anton"
            },
        ],
        message: [
            {
                userID: 1,
                message: "How age you?",
            },
        ],
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {
        // case ACTION_GET_NEWS:
        //     return [...state, ...payload]
        case ACTION_ADD_CHAT:
            return [ ...state, {
                id: Date.now(), 
                title: payload.title, 
                users: payload.users,
                date: payload.date,
                type: payload.type,
                message: payload.message,
            } ]; 
        case ACTION_DELETE_CHAT:
            return state.filter(el => el.id !== payload ? true : false); 
        case ACTION_EDIT_CHAT:
            return state.map(item => {
                if (item.id === payload.id) {
                    item.message.push(payload.message)
                }
                return item
            })
        default:
            return state;
    }

}