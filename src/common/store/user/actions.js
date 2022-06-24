export const LOGIN_USER = "LOGIN_USER";

export function loginUser(name) {
    return {
        type: LOGIN_USER,
        payload: name,
    };
}