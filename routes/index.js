var express = require('express');
const alunoController = require('../controllers/alunoController');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/alunos', alunoController.index);
module.exports = router;
