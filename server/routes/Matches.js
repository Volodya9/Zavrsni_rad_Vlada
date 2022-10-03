const express = require('express');
const mssql = require('mssql/msnodesqlv8');
const db = require('../database/DbConfig');
const router = express.Router();

router.use('/', (req,res)=>{
    let sql = 
    `select m.id, t1.name as host, t1.code as host_code, t2.name as away, t2.code as away_code, match_date, m.time, s.name as stadium
    from Matches m
    join Teams t1 on t1.id=m.host
    join Teams t2 on t2.id=m.away
    join Stadiums s on s.id=m.stadium
    order by convert(date, m.match_date, 106), m.time
    ;`;
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