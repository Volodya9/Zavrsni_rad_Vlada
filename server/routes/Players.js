const express = require('express');
const mssql = require('mssql/msnodesqlv8');
const db = require('../database/DbConfig');
const router = express.Router();

//goalkeepers
router.route('/goalkeepers')
.get((req, res)=>{
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

//defenders
router.route('/defenders')
.get((req, res)=>{
    let sql = 
    `select p.name as player_name, position, t.name as team, p.points
    from Players p
    join Teams t on t.id=p.team
    where position='defender'`;
    mssql.connect(db.config, function(err){
        if(err) throw err;

        let request = new mssql.Request();
        request.query(sql, (error, data)=>{
            if(error) console.log(error);

            res.json(data.recordset);
        })
    })
});

//midfielders
router.route('/midfielders')
.get((req, res)=>{
    let sql = 
    `select p.name as player_name, position, t.name as team, p.points
    from Players p
    join Teams t on t.id=p.team
    where position='midfielder'`;
    mssql.connect(db.config, function(err){
        if(err) throw err;

        let request = new mssql.Request();
        request.query(sql, (error, data)=>{
            if(error) console.log(error);

            res.json(data.recordset);
        })
    })
});


//atackers
router.route('/atackers')
.get((req, res)=>{
    let sql = 
    `select p.name as player_name, position, t.name as team, p.points
    from Players p
    join Teams t on t.id=p.team
    where position='atacker'`;
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