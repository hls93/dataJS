const data = require('./data');
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

//attach mustache
app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

//make public folder usable
app.use(express.static('public'));

//
app.get('/', function(req, res){
  res.render('home', data)
});

app.get('/:user', function(req, res){
  req.render('user', data)
})


app.listen(3000, function(){
  console.log('success!');
})
