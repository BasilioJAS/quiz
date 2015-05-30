//GET /quizes/question
exports.question = function (reg, res){
	res.render('quizes/question', {pregunta: 'Capital de italia', title: 'Quiz' });

};

//GET /quizes/answer
exports.answer = function (req, res){
	if(req.query.respuesta === 'Roma'){
		res.render('quizes/answer', {respuesta: 'Correcto', title: 'Quiz' });
	}else{
		res.render('quizes/answer', {respuesta: 'Incorrecto', title: 'Quiz' });
	}
};
//GET /author
exports.author = function (req, res){
	res.render('author', {title: "author"});
};