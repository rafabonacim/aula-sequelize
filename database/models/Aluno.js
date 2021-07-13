module.exports= (sequelize, Datatypes) => {
    const Aluno = sequelize.define(
        "Aluno",
        {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: Datatypes.INTEGER,
                allowNull: false
            },
            "nome":{
                type: Datatypes.INTEGER,
                allowNull: false
            },
            "sobrenome": {
                type:Datatypes.STRING,
                allowNull: false
            },
            "ano_matricula":{
                type:Datatypes.INTEGER,
                allowNull: false
            }
        },
        {
            "tableName": "alunos",
            "timestamps": true 
            //createdAt  e updatedAt
        }
    );
   

    Aluno.associate = (models) =>{
        //muitos p muitos , N:M aluno pertencem a varias turmas
        Aluno.belongsToMany(models.Turma, {
            //apelido da relação
            as: 'turmas',
            //nome da tabela intermediaria
            through: 'alunos_has_turmas',
            //chave estrangeira desse model
            foreignKey:'aluno_id',
            //chave estrangeira do outro model
            otherKey:'turma_id',
            //adiciona createdAt e updatedAt
            timestamps:true
        });
    }

    return Aluno;
}