const express = require('express')

const router = express.Router();

const authenticate = require('../middleware/authenticate');

const userController = require('../controllers/user');

router.post
(
  '/signup',
  userController.createUser
);

router.post
(
  '/signin',
  userController.loginUser
);

module.exports = router;
