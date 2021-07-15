const { Router } = require('express');
var express = require('express');
const alunoController = require('../controllers/alunoController');
const areaController = require('../controllers/areaController');
const cursoController = require('../controllers/cursoController');
const indexController = require('../controllers/indexController');
const professorController = require('../controllers/professorController');
const turmaController = require('../controllers/turmaController');
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

router.get('/areas', areaController.index)

router.get('/cursos', cursoController.index)

router.get('/turmas', turmaController.index)

router.get('/dashboard', indexController.index)

router.get('/alunos/novo', indexController.novo);

router.post('/alunos/novo', indexController.create);

router.get('/alunos/:id', indexController.editarAluno)

router.post('/alunos/:id', indexController.atualizarAluno)



module.exports = router;
