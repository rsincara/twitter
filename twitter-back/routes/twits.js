var express = require('express');
var router = express.Router();
const db = require('../db/index');
const { v4: uuidv4 } = require('uuid');
const { getUserByToken } = require("../helpers/auth");
const { authMiddleware } = require("../middlewares/auth");

// todo тут будет формироваться лента (не тут, тут будут все. Нужен будет запрос на ленту юзера)
router.get('/', authMiddleware, function (req, res, next) {
    getUserByToken(req.headers.authorization || '').then((user) => {
        if (user) {
            db('twits').whereNot('author_id', user.id).then((twits) => {
                const userIds = new Set(twits.map((x) => x.author_id));
                db('users').whereIn('id', [...userIds]).then((users) => {
                    db('users_subs').where({
                        'user_sub_id': user.id
                    }).then((userSubsInfo) => {
                        res.json({
                            twits: twits.map((twit) => {
                                const [author] = users.filter((user) => user.id === twit.author_id);
                                return ({
                                        ...twit,
                                        author: author.login,
                                        isSubscribed: userSubsInfo.some((subscribeInfo) => subscribeInfo.user_author_id === author.id)
                                    }
                                )
                            }),
                            status: 200,
                        })
                    })
                })
            })
        }
    });
});

router.post('/', authMiddleware, function (req, res, next) {
    getUserByToken(req.headers.authorization || '').then((user) => {
        if (user) {
            db('twits').insert({
                post: req.body.text,
                author_id: user.id,
                created_date: new Date(),
            }).returning('id').then(([result]) => {
                res.json({
                    message: 'success',
                    ...result,
                })
            })
        }
    })
});

router.get('/my-twits', authMiddleware, function (req, res, next) {
    getUserByToken(req.headers.authorization || '').then((user) => {
        if (user) {
            db('twits').where({
                author_id: user.id
            }).then((twits) => {
                res.json({
                    twits: [...twits].reverse(),
                    message: 'success'
                })
            })
        }
    })
});

module.exports = router;
