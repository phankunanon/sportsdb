var express = require('express')
var path = require('path')
var app = express()
var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/nodekb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function(){console.log('connected to MongoDB.')});
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

var bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


const Match = require('./models/match');
//Route
app.get('/', function (req, res) {
  Match.find({}, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.render('index2', {title:'Welcome To Thailand E-Sports Schedule', news: data});
    }
  }).sort({date:1}).sort({time:1});
});
app.post('/',function(req,res){
  res.render('add_match', {
    title:'Add Match'
  });
});

app.get('/match/add', function (req, res) {
  res.render('add_match', {
    title:'Add Match'
  })
})
app.post('/match/add', function (req, res) {
  let match = new Match();
  match.teamA = req.body.teamA
  match.teamB = req.body.teamB
  match.date = req.body.date
  match.time = req.body.time
  match.save(function(err){
    if(err){
      console.log(err)
    }else{
      res.redirect('/')
    }
  })
})

  
app.post('/', function (req, res) {
  res.send('you sent a post request.')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

