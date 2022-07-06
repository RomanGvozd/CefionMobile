export const LOGIN_USER = "LOGIN_USER";
export const USER_ADD_CHAT = "USER_ADD_CHAT";
export const USER_EDIT = "USER_EDIT";

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

export function userEdit(name, tagName, password, email, phoneNumber) {
    return {
        type: USER_EDIT,
        payload: {name, tagName, password, email, phoneNumber},
    };
}