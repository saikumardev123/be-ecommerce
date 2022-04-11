var express = require('express');
var UserController = require('../controllers/user.controller');
var Middleware = require('../middlewares/auth.middleware');

var router = express.Router();

router.post('/register',UserController.register);
router.post('/login', UserController.login);
router.post('/changePassword',Middleware.authMiddleware, UserController.changePassword)

module.exports = router;