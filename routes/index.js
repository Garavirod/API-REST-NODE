const express = require('express');
const router = express.Router();

// Import controller
const controller = require('../controller/controller');
// Routes
router.get("/us", controller.us);



module.exports = router;