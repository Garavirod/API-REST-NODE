const Client = require('../models/Client');
const controllers = {};


controllers.createClient = async(req, res, next) => {
    const client = new Client(req.body);
    try {
        await client.save();
        res.json({ success: true });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error });
        // next go the next middleware and not stop the applicaction
        next();
    }
}


module.exports = controllers;