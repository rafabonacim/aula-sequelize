module.exports= (sequelize, Datatypes) => {
    const Curso = sequelize.define(
        "Curso",
        {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: Datatypes.INTEGER,
                allowNull: false
            },
            "nome":{
                type: Datatypes.STRING,
                allowNull: false
            },
            "area_id": {
                type:Datatypes.INTEGER,
                allowNull: false
            }
        },
        {
            "tableName": "cursos",
            "timestamps": true 
            //createdAt  e updatedAt
        }
    );
    
    Curso.associate = (models)=>{
        //N:1 um curso pertence a uma area
        Curso.belongsTo(models.Area, {
            as: 'area',
            foreignKey: 'area_id'
        });

        //1:N um curso possui muitas turmas
        Curso.hasMany(models.Turma, {
            //apelido da relação
            as: 'turmas',
            //chave estrangeira
            foreignKey:'curso_id'
        });
    }


    return Curso;

}