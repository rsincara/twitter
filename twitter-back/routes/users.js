var express = require('express');
var router = express.Router();
const db = require('../db/index');
const { v4: uuidv4 } = require('uuid');
const { isValidPassword } = require("../helpers/auth");
const {authMiddleware} = require("../middlewares/auth");

router.get('/', authMiddleware, function(req, res, next) {
  db('users').then((users) => {
    res.json({
      users,
      status: 200,
    })
  })
});

router.get('/user-info', authMiddleware, function(req, res, next) {
  db('users_tokens').where({ token: req.headers?.authorization || '' }).first().then((userWithToken) => {
    if (userWithToken) {
      db('users').where({id: userWithToken.user_id}).first().then((user) => {
        if (user) {
          res.json({
            user,
            status: 200,
          });
        }
      });
    }
  })
});

router.post('/register', function(req, res, next) {
  const userData = req.body;
  console.log(userData);

  db('users').where({ login: userData.login }).first().then((user) => {
    if (user) {
      res.status(422).json({
        message: 'User with this login already registered',
        status: 422,
      });

      return;
    }

    db('users').insert({
      login: userData.login,
      password: userData.password,
    }).then(() => {
      res.json({
        message: "Successfully",
        status: 200,
      });
    });
  })
});

router.post('/login', (req, res) => {
  const userData = req.body;

  db('users').where({ login: userData.login }).first().then((user) => {

    if (!user) {
      res.status(422).json({
        message: 'Not found user with this login',
        status: 422,
      });

      return;
    }

    if (isValidPassword(userData.password, user.password)) {
      const newToken = uuidv4();

      db('users_tokens').del().where({
        'user_id': user.id
      }).then(() => {
        db('users_tokens').insert({
          'user_id': user.id,
          token: newToken,
        }).then(() => {
          res.json({
            message: "Successfully",
            status: 200,
            token: newToken,
          })
        })
      });
    } else {
      res.status(422).json({
        message: 'Incorrect password',
        status: 422,
      })
    }
  })
})

module.exports = router;
