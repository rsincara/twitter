const db = require("../db");
const isValidPassword = (reqPassword, dbPassword) => {
    return reqPassword === dbPassword;
}

const getUserByToken = (token) => {
    return db('users_tokens').where({token}).first().then((userWithToken) => {
        console.log('userWithToken: ', userWithToken);
        if (userWithToken) {
            return  db('users').where({id: userWithToken.user_id}).first().then((user) => {
                return user
            })
        }
    })
}

module.exports = {
    isValidPassword,
    getUserByToken,
}