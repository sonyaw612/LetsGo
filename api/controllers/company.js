const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { company } = require('../models/company')
const { event   } = require('../models/event')

// get all companies
router.get('/', (req, res) => {
    company.findAll({})
    .then((data) => {
        res.status(200).json(data)
    })
})

// get companies containing 'companyName', returns list
// ***(DOES NOT need to be fully spelled out)***
router.get('/:companyName', (req, res) => {
    const companyName = req.params.companyName;
    company.findAll({ where: { 
        name: { [Op.iLike]: '%' + companyName + '%' }
    } })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(err => {
        const message = {
            message: "Enter valid company"
        }
        res.status(404).json(message)
    })
})

// get all events from a specific company
// ***(companyName NEEDS to be fully spelled out)***
router.get('/:companyName/events', (req, res) => {
    const companyName = req.params.companyName;
    event.findAll({ where: { company: companyName } })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(err => {
        const message = {
            message: "Enter valid company"
        }
        res.status(404).json(message)
    })
})

// router.post('/createCompany', (req, res) => {
//     // const data = req.body
// })

module.exports = router;