const express = require('express');
const router = express.Router();
const { registerUser, authUser, getUsers, updateUser } = require('../controllers/userController');

router.route('/register').post(registerUser);
router.route('/login').post(authUser);
router.route('/').get(getUsers);
router.route('/update').put(updateUser);

module.exports = router;