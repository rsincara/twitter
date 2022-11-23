const db = require("../db");

const authMiddleware = (req, res, next) => {
    db('users_tokens').where({
        'token': req.headers?.authorization || '',
    }).then((results) => {
        if (results.length === 0) {
            res.status(401).json({
                message: "Unauthorized",
                status: 401,
            });
        } else {
            next();
        }
    })
};

module.exports = {
    authMiddleware,
}