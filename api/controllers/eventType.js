const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { eventType } = require('../models/eventType')

// get all event types
router.get('/', (req, res) => {
    eventType.findAll({})
    .then((data) => {
        res.status(202).json(data)
    })
})

// get event types containing 'type', returns a list
// ***(DOES NOT need to be fully spelled out)***
router.get('/:type', (req, res) => {
    const type = req.params.type;
    eventType.findAll({ where: { 
        type: { [Op.iLike] : '%' + type + '%' }
    }})
    .then((data) => {
        res.status(200).json(data);
    })
    .catch(err => {
        res.json({
            message: "No such event type"
        })
    })
})

module.exports = router;
