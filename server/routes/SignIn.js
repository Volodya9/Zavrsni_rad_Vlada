const express = require('express');
const mssql = require('mssql/msnodesqlv8');
const db = require('../database/DbConfig');
const { route } = require('./Login');
const router = express.Router();

router.use('/', (req,res)=>{
    const user = {
        username: req.body.username,
        password: req.body.password
    }
    let sql = 
    `insert into Users(username, password)
    values ('${req.body.username}', '${req.body.password}') `;
    mssql.connect(db.config, function(err){
        if(err) throw err;

        let request = new mssql.Request();
        request.query(sql, (error, data)=>{
            if(error) console.log(error);

            //res.json(data.recordset);
            console.log('1 record inserted')
        })

        res.json('1 record is inserted');
    })     
});

module.exports = router;