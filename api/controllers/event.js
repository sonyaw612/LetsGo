const express = require('express')
const router = express.Router()
const Sequelize = require('sequelize')
const Op = Sequelize.Op
const { event } = require('../models/event')

// get all events
router.get('/', (req, res) => {
    console.log("Received request")
    event.findAll({})
    .then((data) => {
        res.status(200).json(data)
    })
})

// create event (for event coordinator ONLY)
router.post('/createEvent', (req, res) => {
    const data = req.body;
    event.create({
        title: data.title,
        company: data.company,
        description: data.description,
        participants: data.participants,
        datetime: data.datetime,
        address: data.address,
        city: data.city,
        state: data.state,
        zipcode: data.zipcode,
        vendors: data.vendors,
        eventtype: data.eventtype,
    })
    .then(post => {
        res.status(201).json(post);
    })
    .catch(err => {
        res.status(404).json(err);
    })
})

// get events containing 'eventName', returns a list
// ***(DOES NOT need to be fully spelled out)***
router.get('/:eventName', (req, res) => {
    const eventName = req.params.eventName;
    event.findAll({ where: { 
        title: { [Op.iLike]: '%' + eventName + '%' }
    } })
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.json({
            message: "No such event"
        })
    })
})

// get all events with a specific event type
// ***(NEEDS to be fully spelled out)***
router.get('/e/:eventType', (req, res) => {
    const type = req.params.eventType;

    event.findAll({ where: { 
        eventtype: type 
    }})
    .then((data) => {
        res.status(200).json(data)
    })
    .catch(err => {
        res.status(404).json({
            message: "No such event type"
        })
    })
})

// get all events of a certain event type from a specific company
// ***(NEEDS to be fully spelled out)***
router.get('/:company/:eventType', (req, res) => {
    const company = req.params.company;
    const type = req.params.eventType;

    event.findAll({ where: { 
        company: company, 
        eventtype: type 
    }})
    .then((data) => {
        res.status(202).json(data)
    })
    .catch(err => {
        res.status(404).json({
            message: "No association between company and event type"
        })
    })
})

module.exports = router;