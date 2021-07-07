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
    return Aluno;

}