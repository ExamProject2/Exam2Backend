var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('Hello');
  res.json({
    name:'Nastya',
    age: 14
  }).status(400)
});

router.get('/info', function(req, res){
  res.json({
    name:'Katya',
    password:'1234',
    age:23,
  })
})

router.get('/redirect', function(req, res){
  res.redirect("https://google.com")
})

router.get('/error', function (req, res){
  res.send('error!').status(401);
})

module.exports = router;
