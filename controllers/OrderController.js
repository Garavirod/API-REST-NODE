const Product = require('../models/Product');
const Client = require('../models/Client');
const Order = require('../models/Order');
const controllers = {};


controllers.addOrder = async(req, res, next) => {
    const order = new Order(req.body);
    try {
        await order.save();
        res.json({ success: true, message: 'Order added successfully!' });
    } catch (err) {
        console.log("ERROR >: ", err);
        res.json({ success: false, message: 'Order was not registered! ' });
        next();
    }
}


controllers.getAllOrders = async(req, res, next) => {
    const orders = await Order.find({}).populate('clients').populate({
        path: 'products.product',
        model: 'Product'
    });
    try {
        res.json({ success: true, data: orders });
    } catch (err) {
        console.log("ERROR >: ", err);
        res.json({ success: false, message: "Sorry service is not avalable" });
        next();
    };
}


module.exports = controllers;