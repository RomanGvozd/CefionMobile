import { ACTION_EDIT_GROUP_CHAT} from "./actions";

const INITIAL_STATE = [
    {
        id: 1,
        name: "Group Name",
        events: [
            {
                id: 1,
                title: "Plan for a month",
                description: "The topic of the conversation or chat in short form...",
                date: "12.02.2022",
                time: "12:49 - 17:00",
            },
            {
                id: 2,
                title: "Plan for a month",
                description: "The topic of the conversation or chat in short form...",
                date: "12.02.2022",
                time: "12:49 - 17:00",
            },
        ],
        users: [
            {
                id: 1,
                name: "Calvin",
                tagName: "@calvin",
            },
            {
                id: 2,
                name: "Ronald",
                tagName: "@ronald",
            },
            {
                id: 3,
                name: "Cody",
                tagName: "@cody",
            },
            {
                id: 4,
                name: "Arnold",
                tagName: "@arnold",
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
            {
                userID: 3,
                message: "Normal",
            },
        ],
    },
    {
        id: 2,
        name: "Group",
        events: [
            {
                id: 1,
                title: "Plan for a month",
                description: "The topic of the conversation or chat in short form...",
                date: "12.02.2022",
                time: "12:49 - 17:00",
            },
        ],
        users: [
            {
                id: 1,
                name: "Calvin",
                tagName: "@calvin",
            },
            {
                id: 2,
                name: "Ronald",
                tagName: "@ronald",
            },
            {
                id: 3,
                name: "Cody",
                tagName: "@cody",
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

        ],
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {  
        case ACTION_EDIT_GROUP_CHAT:
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