const express = require('express');
const router = express.Router();
const { createColor, getColors, updateColor } = require('../controllers/colorController');
const authUser = require('../config/authUser');

router.route('/').get(getColors);
router.route('/create').post(createColor);
router.route('/update').put(updateColor);

module.exports = router;