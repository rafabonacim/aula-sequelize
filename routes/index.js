var express = require('express');
const alunoController = require('../controllers/alunoController');
const professorController = require('../controllers/professorController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/alunos', alunoController.index);

router.get('/alunos/matricula/:ano', alunoController.filtroAnoMatricula);

router.get('/alunos/nome/:nome', alunoController.filtroNome);

router.get('/professores', professorController.index);

router.post('/professores', professorController.create);

router.put('/professores/:id', professorController.update);

router.delete('/professores/:id', professorController.destroy);

module.exports = router;
