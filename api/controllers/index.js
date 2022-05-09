const express = require('express');
const router = express.Router();

// Load each controller
const companyController = require('./company.js');
const eventController = require('./event.js');
const eventTypeController = require('./eventType.js');
const vendorController = require('./vendor.js');
const vendorCatController = require('./vendorCat.js');

// Mount each controller under a specific route. These
// will be prefixes to all routes defined inside the controller
router.use('/company', companyController);
router.use('/event', eventController);
router.use('/eventtype', eventTypeController);
router.use('/vendor', vendorController);
router.use('/vendorcat', vendorCatController);

// router.use('/application-configuration', appConfigController);


module.exports = router;