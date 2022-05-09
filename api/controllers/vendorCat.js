const express = require('express')
const router = express.Router();
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { vendorCat } = require('../models/vendorCat')

// get all vendor categories
router.get('/', (req, res) => {
    vendorCat.findAll({})
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.json(err)
    })
})

// get vendor categories containing 'cat', returns list
// ***(DOES NOT need to be fully spelled out)***
router.get('/:cat', (req, res) => {
    const cat = req.params.cat;
    vendorCat.findAll({ where: { 
        category: { [Op.iLike] : '%' + cat + '%' }
    }})
    .then((data) => {
        res.status(200).json(data);
    })
})

module.exports = router;