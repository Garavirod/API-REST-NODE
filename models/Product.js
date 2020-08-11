const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: {
        type: String,
        trim: true
    },
    imageUrl: {
        type: String,
        trim: true
    },
    price: {
        type: Number,
    }
});

module.exports = mongoose.model('Product', ProductSchema);