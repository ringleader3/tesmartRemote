var express = require('express');
var app = express();
const Changer = require('./js/tesmart.js')
const changer = new Changer();

app.use(express.static('public'))
app.get('/change', function(req, res) {
    changer.changeChannel(req.query.channel);
});

app.listen(process.env.port || 3000);

console.log('Running at Port 3000');