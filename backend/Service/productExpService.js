let DBfactory = require('../utils/DBFactory');

let collectionName = "productExp";

module.exports = {
    async addNewProductExp(userName, ID){
        var myobj = {
            employeeID: ID, 
            employeeName: userName, 
            educations: []
        };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.addOneItem(collectionName,myobj);
    },
    async addNewProductExpItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$push":{"productExps":itemObj}});
    },

    async deleteProductExp(id){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteOneItem(collectionName,{"employeeID":id});
    },
    async deleteProductExpItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$pull":{"productExps":itemObj}});
    },

    async deleteProductExps(query){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteManyItems(collectionName,query);
    },

    async updateProductExp(id,updateItem){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$set":updateItem});
    },

    async getProductExpInfo(ID){
        var myobj = { employeeID: ID };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,myobj);
    },

    async getSearchProductExpInfo(querys){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,querys);
    }
};