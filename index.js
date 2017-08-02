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
  let robot = req.params.user;
  for (var i = 0; i < data.users.length; i++) {
    if (data.users[i].username === robot) {
      res.render('user', {
        users: data.users[i]
      });
    }
  }
});


app.listen(3000, function(){
  console.log('success!');
})
