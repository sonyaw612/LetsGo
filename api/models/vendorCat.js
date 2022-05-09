const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('letsgo', 'cmp408', 'cmp408spring', {
    dialect: 'postgres'
});

const vendorCat = sequelize.define('vendorcats', {
    category: { type: Sequelize.STRING },       // PK
}, {
    timestamps: false
});

vendorCat.removeAttribute('id')

module.exports = { vendorCat }