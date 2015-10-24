var Model = require('./model');

var Controller = {
  create: function(req, res) {
    var dados = {
      name: 'Skol',
      description: 'Mijo de rato',
      alcohol: 4.5,
      price: 3.0,
      category: 'pilsen'
    }

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
  update: function (req, res) {
    var query = {name: /skol/i};

    var mod = {
      name: 'Brahma',
      alcohol: 4,
      price: 6,
      category: 'pilsen'
    }

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
    var query = {name: /brahma/i};

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