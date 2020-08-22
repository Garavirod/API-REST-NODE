const express = require('express');
const router = express.Router();

// Import controllers
const clientController = require('../controllers/ClientController');
const productController = require('../controllers/ProductController');
const orderController = require('../controllers/OrderController');

// --------------Cients' Routes ---------------
// CREATE A CLIENT
router.post("/create", clientController.createClient);
// SHOW ALL CLIENTS
router.get("/clients", clientController.showClients);
// GET A CLIENT BY ID
router.get("/client/:id", clientController.getOneClient);
// UPDATE CLIENT
router.put("/clientupdate/:id", clientController.updateOneclient);
// DELETE CLIENT
router.delete('/delete/:id', clientController.deleteOneClient);

// --------------Products' Routes ---------------
// CREATE A PRODUCT
router.post(
    "/newproduct",
    productController.uploadFile,
    productController.newProduct
);
// SHOW ALL PRODUTS
router.get("/products", productController.getAllProducts);
// GET A CLIENT BY ID
router.get("/product/:id", productController.getOneProduct);
// UPDATE CLIENT
router.put(
    "/updateproduct/:id",
    productController.uploadFile,
    productController.updateOneProduct
);
// DELETE CLIENT
router.delete('/deleteproduct/:id', productController.deleteOneProduct);


// --------------Order's Routes ---------------
router.post('/addorder', orderController.addOrder);
router.get('/orders', orderController.getAllOrders);


module.exports = router;