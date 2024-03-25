const jwt = require('jsonwebtoken');
const path = require('path');
require('dotenv').config({ path: '../.env' });
const privateKey = process.env.JWT_SECRET;
const asyncHandler = require('express-async-handler');

const authUser = asyncHandler(async(req, res, next) => {
    const token = req.cookies;
    console.log(token);
    if (!token) {
        res.status(401).send({ error: "Please authenticate using valid Token!" });
    }
    try {
        var data = jwt.verify(token, privateKey);
        req.user = await User.findById(data.id);
        next()
    } catch (error) {
        res.status(401).send({ error: "Please authenticate using valid Token!" });
    }
})

module.exports = authUser;