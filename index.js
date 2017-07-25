const data = require('./data.js');
const express = require('express');
const mustacheExpress = require('mustache-express');
const app = express();

app.engine('mustache', mustacheExpress());
app.set('views', './views')
app.set('view engine', 'mustache')

app.use(express.static('public'));

app.get('/:module.exports', function(req, res){

  res.render('home', {
    user: req.param.module.exports
  });
});

app.listen(3000, function(){
  console.log('success!');
})
