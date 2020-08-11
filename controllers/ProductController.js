const Product = require('../models/Product');
const controllers = {};

controllers.newProduct = async(req, res, next) => {
    const product = new Product(req.body);
    try {
        await product.save();
        res.json({ success: true, message: 'Product added succesfully!' });
    } catch (error) {
        console.log(error);
        res.json({ success: false, message: error });
        // next go the next middleware and not stop the applicaction
        next();
    }
};

controllers.getAllProducts = async(req, res, next) => {
    const data = await Product.find({})
        .then((products) => {
            return { success: true, data: products };
        })
        .catch((err) => {
            console.log("ERROR >: " + err);
            return { success: false, message: "Error in server" };
        });
    res.json(data);
};

controllers.getOneProduct = async(req, res) => {
    const _id = req.params.id;
    const data = await Product.findById(_id)
        .then((product) => {
            return { success: true, data: product };
        })
        .catch((err) => {
            console.log("ERROR >: " + err);
            return { success: false, message: "Error in server" };
        });
    res.json(data);
};

controllers.updateOneProduct = async(req, res) => {
    const _idProduct = req.params.id;
    const data = await Product.findOneAndUpdate({ _id: _idProduct }, req.body, { new: true })
        .then((product) => {
            return { success: true, data: product };
        })
        .catch((err) => {
            console.log("ERROR >: " + err);
            return { success: false, message: "Error in server" };
        });
    res.json(data);
};


controllers.deleteOneProduct = async(req, res) => {
    const _id = req.params.id;
    const data = await Product.findByIdAndDelete(_id)
        .then(() => {
            return { success: true, message: "Element was deleted" };
        })
        .catch(err => {
            console.log("Error >: " + err);
            return { success: false, message: err };
        });
    res.json(data);
}



module.exports = controllers;