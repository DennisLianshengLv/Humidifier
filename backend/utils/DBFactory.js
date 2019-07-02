let DBHelper = require('./DBHelper');
let MongoDBConfig = require('../config/MongoDBConfig');

module.exports = {
    getMongoDBClient(){
        return new DBHelper(MongoDBConfig.DBNmae,MongoDBConfig.DBURL);
    }
}