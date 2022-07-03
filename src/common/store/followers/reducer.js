
const INITIAL_STATE = [
    {
        id: 1,
        name: "Lee",
        tagName: "@lee",
        wallet: "45,832.0012382 USDT",
        walletAdress: "19TLq3QwdaJRtk4aJn87uaV8jLuZAv4B19",
        followers: [],
        following: [],

    },
    {
        id: 58,
        name: "Fernandez",
        tagName: "@fernandez",
        wallet: "45,832.0012382 USDT",
        walletAdress: "19TLq3QwdaJRtk4aJn87uaV8jLuZAv4B19",
        followers: [],
        following: [],
    },
    {
        id: 3,
        name: "Cody",
        tagName: "@cody",
        wallet: "45,832.0012382 USDT",
        walletAdress: "19TLq3QwdaJRtk4aJn87uaV8jLuZAv4B19",
        followers: [],
        following: [],
    },
    {
        id: 4,
        name: "Calvin",
        tagName: "@calvin",
        wallet: "45,832.0012382 USDT",
        walletAdress: "19TLq3QwdaJRtk4aJn87uaV8jLuZAv4B19",
        followers: [],
        following: [],
    },
]

export default function reducer(state = INITIAL_STATE, { type, payload }) {

    switch (type) {  
        default:
            return state;
    }
}