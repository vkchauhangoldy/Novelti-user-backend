const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    // userID: { type: String, required: true },
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    mobile: { type: Number, required: true },
    address1: { type: String, required: true },
    address2: { type: String },
    state: { type: String },
    country: { type: String },
    zip: { type: Number, required: true }
})
const users = mongoose.model('users', userSchema);
module.exports = users;