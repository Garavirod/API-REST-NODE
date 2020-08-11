const express = require('express');
const router = express.Router();

// Import Client controller
const clientController = require('../controllers/ClientController');
// --------------Routes ---------------
// CREATE A CLIENT  POST
router.post("/create", clientController.createClient);
// SHOW ALL CLIENTS
router.get("/clients", clientController.showClients);
// GET A CLIENT BY ID
router.get("/client/:id", clientController.getOneClient);
// UPDATE CLIENT
router.put("/clientupdate/:id", clientController.updateOneclient);
// DELETE CLIENT
router.delete('/delete/:id', clientController.deleteOneClient);


module.exports = router;