var config        = require('./../config')


exports.getDomain = function(req, res){
  res.send(config.domain);
};

// methods
exports.getInit = function(req, res) {        // GET de todos los TODOs
  res.render('weddingPage', { 
    domain: config.domain
  });
};