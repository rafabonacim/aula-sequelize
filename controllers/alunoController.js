const {Aluno, Sequelize}= require('../database/models/')
const Op = Sequelize.Op;

const alunoController = {
    index: async (req,res)=>{
        //listando alunos com turmas relacionadas
        const alunos = await Aluno.findAll({
            include:['turmas']
        });
        return res.json(alunos);
    },
    filtroAnoMatricula:async(req,res) => {
        const { ano } = req.params;
            
        const alunosFiltrados = await Aluno.findAll({
            where: {
                'ano_matricula': ano
            }
        });

        return res.json(alunosFiltrados);
    },
    filtroNome: async (req,res) => {
        const {nome} = req.params;
        const alunosFiltrados = await Aluno.findAll({
            where:{
                [Op.or]:{
                    nome:{
                        [Op.like]:`%${nome}%`
                    },
                    sobrenome:{
                        [Op.like]:`%${nome}%`
                    } 
                }
            }
        });
        return res.json(alunosFiltrados);
    }

};
module.exports= alunoController;