const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('letsgo', 'cmp408', 'cmp408spring', {
    dialect: 'postgres'
});

const company = sequelize.define('companies', {
    name: { type: Sequelize.STRING },
}, {
    timestamps: false
});

company.removeAttribute('id')

module.exports = { company }