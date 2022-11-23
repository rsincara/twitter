import {getToken} from "../LocalStorage";

const SERVER_ADDRESS = process.env.WEB_BASE_URL;

export const fetchApi = (endpoint, {body, method, ...options} = {}) => {
    return fetch(`${SERVER_ADDRESS}/${endpoint}`, {
        ...options,
        method: method || 'GET',
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json',
            'Authorization': getToken(),
        },
    }).then((res) => {
        if (res.status === 401) {
            // todo на browserHistory
            window.location.pathname = 'login';
        }

        if (res.status === 200) {
            return res.json();
        }
    })
}