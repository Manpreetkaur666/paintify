const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
    // name
    name: {
        type: String,
        required: true
    },
    // email
    email: {
        type: String,
        required: true
    },
    // password
    password: {
        type: String,
        required: true,
    },
    // photo
    photo: {
        type: String,
        default: "https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg",
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
},
    {
        timeStamps: true
    }
);


module.exports = mongoose.model('User', UserSchema);