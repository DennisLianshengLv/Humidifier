let UUID = require('node-uuid');
let DBfactory = require('../utils/DBFactory');

let collectionName = "employee";

module.exports = {
    async addNewEmployee(userName, useTeam, useProduct, useTitle, useGender){
        var myobj = {
            ID: UUID.v1(), 
            name: userName, 
            team: useTeam,
            product:useProduct,
            title:useTitle,
            gender:useGender 
        };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.addOneItem(collectionName,myobj);
    },

    async deleteEmployee(id){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteOneItem(collectionName,{"ID":id});
    },

    async deleteEmployees(query){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.deleteManyItems(collectionName,query);
    },

    async updateEmployee(id,updateItem){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.updateOneItem(collectionName,{"ID":id},{"$set":updateItem});
    },

    async getEmployeeInfo(employeeID){
        var myobj = { ID: employeeID };
        let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,myobj);
    },

    async getSearchEmployeeInfo(querys){
      let MongoDBHelper = DBfactory.getMongoDBClient();
        return await MongoDBHelper.searchItems(collectionName,querys);
    }
};

