const { Area, Sequelize} = require('../database/models');


const areaController = {
    index: async (req,res) => {
        //listando professores com turmas relacionadas
        const areas = await Area.findAll({
            
            order: [['tipo', 'ASC']]
        });

        return res.json(areas);
    }
};

module.exports = areaController;