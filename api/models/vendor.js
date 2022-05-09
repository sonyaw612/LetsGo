const { Sequelize } = require("sequelize");

const sequelize = new Sequelize('letsgo', 'cmp408', 'cmp408spring', {
    dialect: 'postgres',
});

const vendor = sequelize.define('vendors', {
    name: { type: Sequelize.STRING },
    category: { type: Sequelize.INTEGER },
    contact: { type: Sequelize.STRING },
    phone: { type: Sequelize.STRING },
    email: { type: Sequelize.STRING },
    address: { type: Sequelize.STRING },
    city: { type: Sequelize.STRING},
    state: { type: Sequelize.STRING},
    zipcode: { type: Sequelize.INTEGER},
}, {
    timestamps: false
});

vendor.removeAttribute('id')

module.exports = { vendor }