
const INITIAL_STATE = [
    {
        id: 1,
        name: "Dustin",
        tagName: "@dustin",
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
        name: "Calvin",
        tagName: "@calvin",
    },
    {
        id: 5,
        name: "Bruce",
        tagName: "@bruce",
    },
    {
        id: 6,
        name: "Lee",
        tagName: "@lee",
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {  
        default:
            return state;
    }
}