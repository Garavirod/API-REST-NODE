const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    name: {
        type: String,
        trim: true,
    },
    lastName: {
        type: String,
        trim: true,
    },
    company: {
        type: String,
        trim: true,
    },
    email: {
        type: String,
        trim: true,
        unique: true,
        lowercase: true,
    },
    phone: {
        type: String,
        trim: true
    }
});

// Export the model ClientSchema with name Client
module.exports = mongoose.model('Client', clientSchema);