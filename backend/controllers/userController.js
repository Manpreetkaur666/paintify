const asyncHandler = require('express-async-handler');
const User = require('../model/User');
const generateToken = require('../config/generateToken');

/******************** Route 1: Register New User ************************/
const registerUser = asyncHandler(async (req, res) => {
    const { name, email, password, role, photo } = req.body;

    // Check - to enter all fields
    if (!name || !email || !role || !password) {
        res.status(400);
        throw new Error("Please Enter all fields");
    }

    // Check - If User already exist
    try {
        const userExist = await User.findOne({ email });

        // throw error - if user exists
        if (userExist) {
            res.status(400);
            throw new Error("User already exists!");
        }

        // create user in database
        const user = await User.create({
            name,
            email,
            password,
            role,
            photo,
        });

        // display - created user
        if (user) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                role: user.role,
                password: user.password,
                photo: user.photo,
            });
        } else {
            res.status(400);
            throw new Error("Failed to create the User");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong! Please try Again!");
    }
});

/******************** Route 2: Login Existing User ************************/
const authUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body;

    // Check - to enter all fields
    if (!email || !password) {
        res.status(400);
        throw new Error("Please Enter all fields");
    }

    // Check - If User already exist
    try {
        const user = await User.findOne({ email });

        // Check - If User doesn't exist , ask for signup
        if (!user) {
            res.status(400);
            throw new Error("Please signup");
        }

        // Check - email and password - entered and database enteries
        if (user.email === email && user.password === password) {
            res.status(201).json({
                _id: user._id,
                name: user.name,
                email: user.email,
                photo: user.photo,
                token: generateToken(user._id)
            });
        } else {
            res.status(400);
            throw new Error("Failed to authenticate the User");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong! Please try Again!");
    }
});

/******************** Route 3: Get All Users ************************/
const getUsers = asyncHandler(async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong! Please try Again!")
    }
});

/******************** Route 4: Update User ************************/
const updateUser = asyncHandler(async (req, res) => {
    const { userId, name, email, role } = req.body;

    try {
        //Create a newUser
        const newUser = {}
        if (name) { newUser.name = name }
        if (email) { newUser.email = email }
        if (role) { newUser.role = role } 

        let user = await User.findById(userId);

         // throw error - if user exists
         if (!user) {
             res.status(400);
             throw new Error("User does not exists!");
         }

         //Find the user and then update it!
         user = await User.findByIdAndUpdate(userId, { $set: newUser }, { new: true })
         res.json({ user });
     } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong! Please try Again!")
     }
})

module.exports = { registerUser, authUser, getUsers, updateUser };