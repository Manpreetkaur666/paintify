const asyncHandler = require('express-async-handler');
const Color = require('../model/Color');


/******************** Route 1: Create New Color ************************/
const createColor = asyncHandler(async (req, res) => {

    const { name, stock } = req.body;

    // Check - to enter all fields
    if (!name || !stock ) {
        res.status(400);
        throw new Error("Please Enter all fields");
    }

    // Check - If Color already exist
    try {
        const colorExist = await Color.findOne({ name });

        // throw error - if color exists
        if (colorExist) {
            res.status(400);
            throw new Error("Color already exists!");
        }

        // create color in database
        const color = await Color.create({
            name,
            stock,
        });

        // display - created color
        if (color) {
            res.status(201).json({
                name: color.name,
                stock: color.stock,
            });
        } else {
            res.status(400);
            throw new Error("Failed to create the Color");
        }
    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong! Please try Again!");
    }
})

/******************** Route 2: Get All Colors ************************/
const getColors = asyncHandler(async (req, res) => {
    try {
        const color = await Color.find();
        res.json(color);

    } catch (error) {
        console.error(error.message);
        res.status(500).send("Something went wrong! Please try Again!")
    }
});


module.exports = { createColor, getColors };