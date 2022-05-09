const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('letsgo', 'cmp408', 'cmp408spring', {
    dialect: 'postgres'
});

const eventType = sequelize.define('eventtypes', {
    type: { type: Sequelize.STRING },       // PK
}, {
    timestamps: false
});

eventType.removeAttribute('id')

module.exports = { eventType }