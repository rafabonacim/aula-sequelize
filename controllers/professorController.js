const { Professor, Sequelize} = require('../database/models');


const professorController = {
    index: async (req,res) => {
        //listando professores com turmas relacionadas
        const professores = await Professor.findAll({
            include: ['turmas'],
            order: [['nome', 'ASC']]
        });

        return res.json(professores);
    },
    create: async (req,res) =>{
        const {nome,sobrenome} = req.body;

        const professor = await Professor.create({
            nome,
            sobrenome
        });

        return  res.json(professor);
    },
    update: async (req,res) => {
        const {nome, sobrenome} = req.body;
        const {id} = req.params;

        const professor = await Professor.update({
            nome,
            sobrenome
        }, {
            where: {id}
        });
        return res.json(professor);
    },
    destroy: async (req,res) =>{
        const {id} = req.params;

        const professor = await Professor.destroy({
            where:{
                id
            }
        });
        return res.json(professor);
    }
};

module.exports = professorController;