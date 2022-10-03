const express = require('express');
const mssql = require('mssql/msnodesqlv8');
const db = require('../database/DbConfig');
const router = express.Router();

router.use('/', (req,res)=>{
    let sql = 'SELECT * FROM NEWS';
    mssql.connect(db.config, function(err){
        if(err) throw err;

        let request = new mssql.Request();
        request.query(sql, (error, data)=>{
            if(error) console.log(error);

            res.json(data.recordset);
        })
    })
});

module.exports = router;