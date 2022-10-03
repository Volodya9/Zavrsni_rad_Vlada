const express = require('express');
const mssql = require('mssql/msnodesqlv8');
const db = require('../database/DbConfig');
const router = express.Router();

router.use('/', (req,res)=>{
    let sql = 
    `select p.name as player_name, position, t.name as team, p.points
    from Players p
    join Teams t on t.id=p.team
    where position='goalkeeper'`;
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