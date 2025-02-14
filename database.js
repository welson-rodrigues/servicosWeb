const { Sequelize } = require('sequelize')

const sequelize = new Sequelize('aulaNestMarcilio', 'postgres', 'ifrn.cn',
    { host: 'localhost', dialect: 'postgres'});

module.exports = sequelize;