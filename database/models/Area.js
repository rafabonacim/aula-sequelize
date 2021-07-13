module.exports= (sequelize, Datatypes) => {
    const Area = sequelize.define(
        "Area",
        {
            "id": {
                primaryKey: true,
                autoIncrement: true,
                type: Datatypes.INTEGER,
                allowNull: false
            },
            "tipo":{
                type: Datatypes.STRING,
                allowNull: false
            }
        },
        {
            "tableName": "areas",
            "timestamps": true 
            //createdAt  e updatedAt
        }
    );
    Area.associate = (models)=>{

        //1:N uma area possui muitos cursos
        Area.hasMany(models.Curso, {
            //apelido da relação
            as: 'cursos',
            //chave estrangeira
            foreignKey:'area_id'
        });

    }
    
    return Area;
}