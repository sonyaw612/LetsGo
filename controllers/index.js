const express = require('express');
const router = express.Router();


// Load each controller
const pageController = require('./pages.js');
const appConfigController = require('./appConfig.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/page', pageController);
router.use('/application-configuration', appConfigController);


module.exports = router;