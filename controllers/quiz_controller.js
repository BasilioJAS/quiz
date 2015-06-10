var models = require('../models/models.js');
// GET /quizes/question
exports.question = function(req, res) {
  models.Quiz.findAll().then(function(quiz) {
  	console.log("checa la tablaaaaaaaaaaaaaa");
    res.render('quizes/question', { pregunta: quiz[0].pregunta, title: 'pregunta' });
  })
};

// GET /quizes/answer
exports.answer = function(req, res) {
  models.Quiz.findAll().then(function(quiz) {
    if (req.query.respuesta === quiz[0].respuesta) {
      res.render('quizes/answer', { respuesta: 'Correcto', title: 'respuesta' });
    } else {
      res.render('quizes/answer', { respuesta: 'Incorrecto', title: 'respuesta' });
    }
  })
};
//GET /author
exports.author = function (req, res){
	res.render('author', {title: "author"});
};