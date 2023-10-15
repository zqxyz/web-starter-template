const Sequelize = require('sequelize');

// https://sequelize.org/docs/v6/getting-started/

const DATABASE_NAME = 'hello_world_db';
const DATABASE_USERNAME = 'DATABASE_USERNAME';
const DATABASE_PASSWORD = 'DATABASE_PASSWORD';
const DATABASE_HOST = 'DATABASE_HOST';

const Sequelize = require('sequelize');
const sequelize = new Sequelize(DATABASE_NAME, DATABASE_USERNAME, DATABASE_PASSWORD, {
    host: DATABASE_HOST,
    dialect: 'mysql',
    define: {
        timestamps: false, // Set to true if you want Sequelize to automatically manage timestamps
    },
});

module.exports = sequelize;
