const express = require('express');
const cors = require('cors');
const db = require('./database/DbConfig');
const stadiums = require('./routes/Stadiums');
const news = require('./routes/News');
const matches = require('./routes/Matches');
const teams = require('./routes/Teams');
const groups = require('./routes/Groups');
const signin = require('./routes/SignIn');
const goalkeepers = require('./routes/Goalkeepers');
const players = require('./routes/Players');

const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req,res)=>{
   res.send(db.config);
});

//get all stadiums
app.get('/stadiums', stadiums);

//get all news
app.get('/news', news);

//get all matches
app.get('/matches', matches);

//get all groups
app.get('/groups', groups);

//get all teams
app.get('/teams', teams);

//insert single user
app.post('/signin', signin);

//get all goalkeepers
app.get('/goalkeepers', goalkeepers);

//get all players by position
app.use('/players', players);


app.listen(3000, ()=>{
    console.log('Server is running at port 3000');
});