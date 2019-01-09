const Sequelize = require('sequelize');
const Conn = require('../../config/sequelizeConf').getConnection();

const Posts = Conn.define('posts',{
    title:{
        type: Sequelize.STRING
    },
    body:{
        type: Sequelize.STRING
    }
});
module.exports = Posts;