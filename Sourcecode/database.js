const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let db = null;

const mongoConnect = (callback) => {
    MongoClient.connect("mongodb://localhost:27017/callRecordAnalysis")
    .then(client => {
        console.log("connected")
        db = client.db();
        callback()
    })
    .catch(err => {
        console.log(err);
    })
}

const getDb = () => {
    if(db) return db;
}

module.exports = {
    getDb,
    mongoConnect
}