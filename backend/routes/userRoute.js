const express = require('express');
const router = express.Router();
const { registerUser, authUser, getUsers } = require('../controllers/userController');

router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/').get(getUsers);

module.exports = router;