var express = require('express');
var router = express.Router();
const db = require('../db/index');
const { v4: uuidv4 } = require('uuid');
const { getUserByToken } = require("../helpers/auth");
const {authMiddleware} = require("../middlewares/auth");

// todo тут будет формироваться лента
router.get('/', authMiddleware, function(req, res, next) {
    db('users').then((users) => {
        res.json({
            users,
            status: 200,
        })
    })
});

router.post('/', authMiddleware, function(req, res, next) {
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

router.get('/my-twits', authMiddleware, function(req, res, next) {
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
