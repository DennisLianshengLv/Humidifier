let DBfactory = require('../utils/DBFactory');

let collectionName = "education";

module.exports = {
    async addNewEducation(userName, ID){
        var myobj = {
            employeeID: ID, 
            employeeName: userName, 
            educations: []
        };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.addOneItem(collectionName,myobj);
    },
    async addNewEducationItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$push":{"educations":itemObj}});
    },

    async deleteEducation(id){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteOneItem(collectionName,{"employeeID":id});
    },
    async deleteEducationItem(id, itemObj){
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$pull":{"educations":itemObj}});
    },

    async deleteEducations(query){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteManyItems(collectionName,query);
    },

    async updateEducation(id,updateItem){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"employeeID":id},{"$set":updateItem});
    },

    async getEducationInfo(ID){
        var myobj = { employeeID: ID };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,myobj);
    },

    async getSearchEducationInfo(querys){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,querys);
    }
};