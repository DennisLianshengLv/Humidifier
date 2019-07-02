let DBfactory = require('../utils/DBFactory');

let collectionName = "award";

module.exports = {
    async addNewAward(userName, ID){
        var myobj = {
            employeeID: ID, 
            employeeName: userName, 
            awards: []
        };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.addOneItem(collectionName,myobj);
    },
    async addNewAwardItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$push":{"awards":itemObj}});
    },

    async deleteAward(id){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteOneItem(collectionName,{"employeeID":id});
    },
    async deleteAwardItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$pull":{"awards":itemObj}});
    },

    async deleteAwards(query){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteManyItems(collectionName,query);
    },

    async updateAward(id,updateItem){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$set":updateItem});
    },

    async getAwardInfo(ID){
        var myobj = { employeeID: ID };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,myobj);
    },

    async getSearchAwardInfo(querys){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,querys);
    }
};