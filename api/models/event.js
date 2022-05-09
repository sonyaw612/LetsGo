const { Sequelize, DataTypes } = require("sequelize");

const sequelize = new Sequelize('letsgo', 'cmp408', 'cmp408spring', {
    dialect: 'postgres'
});

const event = sequelize.define('events', {
    title: { type: Sequelize.STRING },       // PK
    company: { type: Sequelize.STRING },
    description: { type: Sequelize.STRING },
    participants: { type: Sequelize.INTEGER },
    datetime: { type: Sequelize.TIME },
    address: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING },
    state: { type: Sequelize.STRING },
    zipcode: { type: Sequelize.INTEGER },
    vendors: { type: Sequelize.ARRAY(DataTypes.INTEGER) },
    eventtype: { type: Sequelize.STRING },
}, {
    timestamps: false
});

event.removeAttribute('id')

module.exports = { event }

