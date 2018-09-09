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


const Article = require('./models/article');
//Route
app.get('/', function (req, res) {
  Article.find({}, function(err, data){
    if(err){
      console.log(err);
    }else{
      res.render('index', {title:'Home', news: data});
    }
  });
});

app.get('/news/add', function (req, res) {
    res.render('add_news', {
      title:'News'
    })
  })
  
app.post('/', function (req, res) {
  res.send('you sent a post request.')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))

