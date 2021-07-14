const { Curso, Sequelize} = require('../database/models');


const cursoController = {
    index: async (req,res) => {
        //listando professores com turmas relacionadas
        const cursos = await Curso.findAll({
            
            order: [['nome', 'ASC']]
        });

        return res.json(cursos);
    }
};

module.exports = cursoController;