const MongoClient = require('mongodb').MongoClient;

class MongoDBHelper {
    constructor(dbName,dbPath,userName,passwrd){
        this.dbName=dbName;
        this.dbPath=dbPath;
        this.userName=userName;
        this.passwrd=passwrd;
        this.DBClient = new MongoClient(dbPath,{useNewUrlParser: true});
    }
    createCollection(collectionName){
        let items = {};
        MongoClient.connect(this.dbPath, { useNewUrlParser: true }, (err, db)=> {
            if (err) throw err;
            let dbo = db.db(this.dbName);
            dbo.createCollection(collectionName, function (err, res) {
                if (err) throw err;
                console.log("Create new collection "+collectionName+" succeed.");
                db.close();
            });
        });
        return items;
    };

    
    async searchItems(collectionName, queryItem){
        let client =null;
        try{
            client  = await this.DBClient.connect();
            let dbo = client.db(this.dbName);
            return new Promise((reslove, reject) => {
                dbo.collection(collectionName).find(queryItem).toArray(function (err, result) {
                    if (err || !result) {
                        reject(err);
                    } else {
                        console.log("Search items from collection "+collectionName+" succeed.");
                        reslove(result);
                    }
                });
            });
        } catch(err){
            console.log(err);
        }finally{
            client.close();
        }
    };

    async addOneItem(collectionName,newItem){
        let client =null;
        try{
            client  = await this.DBClient.connect();
            let dbo = client.db(this.dbName);
            return new Promise((reslove, reject) => {
                dbo.collection(collectionName).insertOne(newItem,function (err, result) {
                    if (err || !result) {
                        reject(err);
                    } else {
                        console.log("Insert new one item to "+collectionName+" succeed.");
                        reslove(result);
                    }
                });
            });
        } catch(err){
            console.log(err);
        }finally{
            client.close();
        }
    };
    
    addManyItems(collectionName,newItems){
        MongoClient.connect(this.dbPath, { useNewUrlParser: true }, (err, db)=> {
            if (err) throw err;
            let dbo = db.db(this.dbName);
            dbo.collection(collectionName).insertMany(newItems, function(err, result) {
                if (err) throw err;
                console.log("Insert new "+newItems.length +" items to "+collectionName+" succeed.");
                db.close();
            });
        });
    };

    async updateOneItem(collectionName,queryItem,updateItem){
        let client =null;
        try{
            client  = await this.DBClient.connect();
            let dbo = client.db(this.dbName);
            return new Promise((reslove, reject) => {
                dbo.collection(collectionName).updateOne(queryItem,updateItem,function (err, result) {
                    if (err || !result) {
                        reject(err);
                    } else {
                        console.log("Update new one item to "+collectionName+" succeed.");
                        reslove(result);
                    }
                });
            });
        } catch(err){
            console.log(err);
        }finally{
            client.close();
        }
    };

    updateManyItems(collectionName,queryItem,updateItem){
        MongoClient.connect(this.dbPath, { useNewUrlParser: true }, (err, db)=> {
            if (err) throw err;
            let dbo = db.db(this.dbName);
            dbo.collection(collectionName).updateMany(queryItem,updateItem, function(err, res) {
                if (err) throw err;
                console.log("Update "+ res.result.nModified+" items of "+collectionName+" succeed.");
                db.close();
            });
        });
    };

    async deleteOneItem(collectionName,queryItem){
        let client =null;
        try{
            client  = await this.DBClient.connect();
            let dbo = client.db(this.dbName);
            return new Promise((reslove, reject) => {
                dbo.collection(collectionName).deleteOne(queryItem,function (err, result) {
                    if (err || !result) {
                        reject(err);
                    } else {
                        console.log("Delete new one item to "+collectionName+" succeed.");
                        reslove(result);
                    }
                });
            });
        } catch(err){
            console.log(err);
        }finally{
            client.close();
        }
    };

    async deleteManyItems(collectionName,queryItem){
        let client =null;
        try{
            client  = await this.DBClient.connect();
            let dbo = client.db(this.dbName);
            return new Promise((reslove, reject) => {
                dbo.collection(collectionName).deleteMany(queryItem,function (err, res) {
                    if (err || !res) {
                        reject(err);
                    } else {
                        console.log("Delete "+ res.result.n+" items of "+collectionName+" succeed.");
                        reslove(res);
                    }
                });
            });
        } catch(err){
            console.log(err);
        }finally{
            client.close();
        }
    };
}

module.exports = MongoDBHelper;
