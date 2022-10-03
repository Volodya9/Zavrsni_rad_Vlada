const express = require('express');
const mssql = require('mssql/msnodesqlv8');
const db = require('../database/DbConfig');
const router = express.Router();

router.use('/', (req,res)=>{
    let sql = 
    `select username, password
    from users
    where username='admin' and password='admin'    `;
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