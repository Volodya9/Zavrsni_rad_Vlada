const express = require('express');
const mssql = require('mssql/msnodesqlv8');
const db = require('../database/DbConfig');
const router = express.Router();

router.use('/', (req,res)=>{
    let sql = 
    `select g.group_name, t1.name as team1, t1.code as team1_code, t2.name as team2,  t2.code as team2_code, 
	    t3.name as team3, t3.code as team3_code, t4.name as team4, t4.code as team4_code
    from groups g
    join teams t1 on t1.id=g.team1 
    join teams t2 on t2.id=g.team2
    join teams t3 on t3.id=g.team3 
    join teams t4 on t4.id=g.team4`;
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