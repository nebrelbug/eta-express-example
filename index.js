var express = require('express')
var app = express()
var Eta = require('eta')

app.use(express.static(__dirname))

Eta.defaultConfig.cache = false

app.set('view engine', 'eta')

app.set('views', './views')

app.get('/', function (req, res) {
  res.render('index', {
    favorite: 'Eta',
    name: 'Ben',
    reasons: ['fast', 'lightweight', 'simple']
  })
})

app.get('/inline-css', function (req, res) {
  res.render('inline-stylesheet', {
    favorite: 'Eta',
    name: 'Ben',
    reasons: ['fast', 'lightweight', 'simple']
  })
})

app.listen(3000, function () {
  console.log('listening to requests on port 3000')
})
