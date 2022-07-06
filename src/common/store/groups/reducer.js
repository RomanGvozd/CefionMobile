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
                name: "Arnold",
                message: "Hello.",
                date: "",

            },
            {
                userID: 2,
                name: "Ronald",
                message: "Hi.",
                date: "",

            },
            {
                userID: 1,
                name: "Calvin",
                message: "How age you?",
                date: "",

            },
            {
                userID: 3,
                name: "Arnold",
                message: "Normal",
                date: "",

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
                name: "Calvin",
                message: "Hello.",
                date: "",
            },
            {
                userID: 2,
                name: "Cody",
                message: "Hi.",
                date: "",

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