export const LOGIN_USER = "LOGIN_USER";
export const USER_ADD_CHAT = "USER_ADD_CHAT";

export function loginUser(name) {
    return {
        type: LOGIN_USER,
        payload: name,
    };
}

export function userAddChat(id) {
    return {
        type: USER_ADD_CHAT,
        payload: id,
    };
}