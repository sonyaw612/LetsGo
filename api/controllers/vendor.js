const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { vendor } = require('../models/vendor.js')

// get all vendors
router.get('/', (req, res) => {
    vendor.findAll({ where: {} })
    .then((data) => {
        res.status(200).json(data)
    })
})

// get vendors containing 'vendorName', returns list
// ***(DOES NOT need to be fully spelled out)***
router.get('/:vendorName', (req, res) => {
    const vendorName = req.params.vendorName;
    vendor.findAll({ where: {
        name : { [Op.iLike] : '%' + vendorName + '%' }
    }})
    .then((data) => {
        res.status(202).json(data)
    })
    .catch(err => {
        res.json({
            message: 'Vendor not on record'
        })
    })
})

// get all vendors with a specific category
// ***(NEEDS to be fully spelled out)***
router.get('/cat/:venCat', (req, res) => {
    const category = req.params.venCat;
    vendor.findAll({ where: { category: category }})
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({
            message: "invalid vendor category"
        })
    })
})

module.exports = router;