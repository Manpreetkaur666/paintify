const express = require('express');
const router = express.Router();
const { createColor, getColors } = require('../controllers/colorController');

router.route('/').get(getColors);
router.route('/create').post(createColor);

module.exports = router;