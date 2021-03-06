var Model = require('./model');

var Controller = {
  create: function(req, res) {
    var dados = req.body;

    var model = new Model(dados),
        msg = '';

    model.save(function (err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Cerveja inserida: ', data);
        msg = data;
      }
      res.json(msg);          
    });
  },
  retrieve: function (req, res) {
    var query = {};

    Model.find(query, function(err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Listagem: ', data);
        msg = data;
      }
      res.json(msg);
    });
  },
  list: function (req, res) {
    var query = {};

    Model.find(query, function(err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Listagem: ', data);
        msg = data;
      }
      res.render('list', { 
        title: 'Listagem de Cervejas', 
        beers: data 
      });
    });
  },  
  get: function (req, res) {
    var query = {_id: req.params.id};

    Model.findOne(query, function(err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Get: ', data);
        msg = data;
      }
      res.json(msg);
    });
  }, 
  showBeer: function (req, res) {
    var query = {_id: req.params.id};

    Model.findOne(query, function(err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Get: ', data);
        msg = data;
      }
      res.render('beer', { 
        title: 'Cerveja', 
        beer: data     
      });
    });
  },  
  update: function (req, res) {
    var query = {_id: req.params.id};

    var mod = req.body;

    var optional = {
      upsert: false, // apenas atualizar
      multi: false // atualizar apenas o primeiro registro
    }

    // busca pela Skol e atualiza para Brahma
    Model.update(query, mod, function (err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Cervejas atualizadas com sucesso: ', data);
        msg = data;
      }
      res.json(msg);
    });    
  },
  delete: function (req, res){
    var query = {_id: req.params.id};

    // é multi: true CUIDADO!
    Model.remove(query, function (err, data){
      if (err){
        console.log('Erro: ', err);
        msg = err;
      }
      else {
        console.log('Cerveja deletada com sucesso! Quantidade: ', data.result);
        msg = data;
      }
      res.json(msg);
    });
  }
}

module.exports = Controller;