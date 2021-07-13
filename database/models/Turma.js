module.exports= (sequelize, Datatypes) => {
    const Turma = sequelize.define(
        "Turma",
        {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: Datatypes.INTEGER,
                allowNull: false
            },
            "duracao":{
                type: Datatypes.INTEGER,
                allowNull: false
            },
            "ano_inicio":{
                type:Datatypes.INTEGER,
                allowNull: false
            },
            "semestre":{
                type:Datatypes.INTEGER,
                allowNull: false
            },
            "curso_id":{
                type:Datatypes.INTEGER,
                allowNull: false
            },
            "professor_id":{
                type:Datatypes.INTEGER,
                allowNull: false
            }
        },
        {
            "tableName": "turmas",
            "timestamps": true 
            //createdAt  e updatedAt
        }
    );

    Turma.associate = (models) => {

        //N:1 varias turmas pertencem a 1 curso
        Turma.belongsTo(models.Curso, {
            as:'curso',
            foreignKey: 'curso_id'
        });

        // N:1 varias turmas pertencem a 1 professor
        Turma.belongsTo(models.Professor, {
            as:'professor',
            foreignKey: 'professor_id'
        });
        
        //N:M uma turma possui varios alunos
        Turma.belongsToMany(models.Aluno,{
            //apelido da relação, o que eu to querendo pegar? alunos da turma
            as: 'alunos',
            through: 'alunos_has_turmas',
            //chave estrangeira desse model
            foreignKey:'turma_id',
            //chave estrangeira do outro model
            otherKey:'aluno_id',
            timestamps:true
        })
    }
    return Turma;

}