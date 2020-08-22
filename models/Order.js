const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    clients: {
        type: Schema.ObjectId,
        ref: 'Client', //Reference to object Client
    },
    products: [{
        product: {
            type: Schema.ObjectId,
            ref: 'Product', //Reference to object Product
        },
        quantity: Number,
    }],
    total: Number
});


module.exports = mongoose.model('Order', OrderSchema);