const { Turma, Sequelize} = require('../database/models');


const turmaController = {
    index: async (req,res) => {
        //listando professores com turmas relacionadas
        const turmas = await Turma.findAll({
         
            order: [['id', 'ASC']]
        });

        return res.json(turmas);
    }
};

module.exports = turmaController;