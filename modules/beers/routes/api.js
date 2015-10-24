var express = require('express');
var router = express.Router();

var Controller = require('./../controller');

router.get('/', function(req, res, next) {
  //res.render('index', { title: 'Listagem de Cervejas'});
  Controller.retrieve(req, res);
});

router.post('/', function(req, res, next) {
  Controller.create(req, res);
});

module.exports = router;
