const express = require('express');
const app = express();
const fs = require('fs')
const path = require('path')
const mongoConnect = require('./database').mongoConnect
const getDb = require('./database').getDb


mongoConnect(() => {

    fs.readFile(path.join(__dirname , 'call_data.json'), 'utf-8' ,(err,data) => {
    
        data = JSON.parse(data);
      
    
        const db = getDb();
    
        data.map(ele => {
            db.collection('callRecord').insertOne(ele)
            .then(res => {
                console.log("done")
               
            })
        })
    })
    

})






