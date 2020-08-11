const express = require('express');
const router = express.Router();

// Import controllers
const clientController = require('../controllers/ClientController');
const productController = require('../controllers/ProductController');

// --------------Cients Routes ---------------
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

// --------------Products Routes ---------------


module.exports = router;