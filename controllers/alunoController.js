const {Aluno}= require('../database/models/')
const alunoController = {
    index: async (req,res)=>{
        const alunos = await Aluno.findAll();
        return res.json(alunos);
    }

};
module.exports= alunoController;