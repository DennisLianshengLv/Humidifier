let DBfactory = require('../utils/DBFactory');

let collectionName = "certificate";
module.exports = {
    async addNewCertificate(userName, ID){
        var myobj = {
            employeeID: ID, 
            employeeName: userName, 
            certificates: []
        };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.addOneItem(collectionName,myobj);
    },
    async addNewCertificateItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$push":{"certificates":itemObj}});
    },

    async deleteCertificate(id){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteOneItem(collectionName,{"employeeID":id});
    },
    async deleteCertificateItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$pull":{"certificates":itemObj}});
    },

    async deleteCertificates(query){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteManyItems(collectionName,query);
    },

    async updateCertificate(id,updateItem){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$set":updateItem});
    },

    async getCertificateInfo(ID){
        var myobj = { employeeID: ID };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,myobj);
    },

    async getSearchCertificateInfo(querys){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,querys);
    }
};