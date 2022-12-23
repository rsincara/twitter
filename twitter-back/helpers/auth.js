const db = require("../db");
const {hashData} = require("./hashData");

const checkIsValidPassword = (reqPassword, dbPassword) => {
    return hashData(reqPassword) === dbPassword;
}

const getUserByToken = (token) => {
    return db('users_tokens').where({token}).first().then((userWithToken) => {
        console.log('userWithToken: ', userWithToken);
        if (userWithToken) {
            return db('users').where({id: userWithToken.user_id}).first().then((user) => {
                return user
            })
        }
    })
}

module.exports = {
    checkIsValidPassword,
    getUserByToken,
}