const express = require('express');
const router = express.Router();

// Import controller
const controller = require('../controller/controller');
// --------------Routes ---------------
// CREATE A CLIENT  POST
router.post("/create", controller.createClient);



module.exports = router;