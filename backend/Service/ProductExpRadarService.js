let DBfactory = require('../utils/DBFactory');

let collectionName = "productExpRadar";

module.exports = {
    async addNewProductExpRadar(userName, ID){
        var myobj = {
            employeeID: ID, 
            employeeName: userName, 
            educations: []
        };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.addOneItem(collectionName,myobj);
    },

    async addNewProductExpRadarItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$push":{"products":itemObj}});
    },

    async addNewProductExpRadarItemProperty(id, productName,itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id, "productName":productName},{"$set":{"details":itemObj}});//,{"$push":{ propertyName : itemObj }});
    },

    async deleteProductExpRadar(id){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteOneItem(collectionName,{"employeeID":id});
    },
    async deleteProductExpRadarItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$pull":{"products":itemObj}});
    },

    async deleteProductExpRadars(query){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteManyItems(collectionName,query);
    },

    async updateProductExpRadar(id,updateItem){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$set":updateItem});
    },

    async getProductExpRadarInfo(ID){
        var myobj = { employeeID: ID };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,myobj);
    },

    async getSearchProductExpRadarInfo(querys){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,querys);
    }
};