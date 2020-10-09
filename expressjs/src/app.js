const app = require('express')();
const ejs = require('ejs');
const configuration = require('../../bot_config.json');
const path = require('path');
app.set('view engine', 'ejs');
app.get('/',(req,res)=>{
    res.render(__dirname + '/views/dynamic/index')
})

app.listen(configuration.express.port);