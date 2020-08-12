const Product = require("../models/Product");
const multer = require("multer");
const shortid = require("shortid");
const controllers = {};

// Multter configuration
const configurationMulter = {
    storage: fileStorage = multer.diskStorage({
        destination: (req, file, cb) => {
            cb(null, __dirname + '../../uploads');
        },
        filename: (req, file, cb) => {
            const extention = file.mimetype.split('/')[1];
            cb(null, `${shortid.generate()}.${extention}`);
        }
    }),
    fileFilter(req, file, cb) {
        if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
            cb(null, true);
        } else {
            cb(new Error('Not valid format !'));
        }
    }
};


// Pass the configuration multer and the bdd field in this case imageUrl
const upload = multer(configurationMulter).single('imageUrl');


// Upload new file
controllers.uploadFile = (req, res, next) => {
    upload(req, res, (error) => {
        if (error) {
            res.json({ success: false, message: error });
        }
        return next()
    });
}

controllers.newProduct = async(req, res, next) => {
    const product = new Product(req.body);
    try {
        if (req.file.filename) {
            product.imageUrl = req.file.filename;
        }
        await product.save();
        res.json({ success: true, message: "Product added succesfully!" });
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
    const data = await Product.findOneAndUpdate({ _id: _idProduct }, req.body, {
            new: true,
        })
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
        .catch((err) => {
            console.log("Error >: " + err);
            return { success: false, message: err };
        });
    res.json(data);
};

module.exports = controllers;