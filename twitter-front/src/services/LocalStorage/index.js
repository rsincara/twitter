const TOKEN_KEY = 'token';

export const setToken = (token) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const getToken = () => (
    localStorage.getItem(TOKEN_KEY)
);
