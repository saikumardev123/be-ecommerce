var express = require('express');
var UserController = require('../controllers/user.controller');

var router = express.Router();

router.post('/register',UserController.register);

module.exports = router;