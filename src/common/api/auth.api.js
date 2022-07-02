import axios from 'axios'

export const accountLogin = ({username, password}) => axios.post('https://192.165.0.108:8080/api/auth/login', {
    username,
    password,
});