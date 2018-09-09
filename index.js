var express = require('express')
var path = require('path')
var app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/', function (req, res) {
    let data = [
      {id:1,title:'news1',body:'this is news 1.'},
      {id:2,title:'news2',body:'this is news 2.'},
      {id:3,title:'news3',body:'this is news 3.'}
    ];
    res.render('index', {
      title:'Home',
      news: data
    })
  })
  

app.get('/news/add', function (req, res) {
    res.render('add_news', {
      title:'News'
    })
  })
  
app.post('/', function (req, res) {
  res.send('you sent a post request.')
})

app.listen(3000, () => console.log('Example app listening on port 3000!'))