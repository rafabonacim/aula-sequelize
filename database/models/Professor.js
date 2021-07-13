module.exports= (sequelize, Datatypes) => {
    const Professor = sequelize.define(
        "Professor", {
            "id": {
                type: Datatypes.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false
            },
            "nome": {
                type: Datatypes.STRING,
                allowNull: false
            },
            "sobrenome": {
                type: Datatypes.STRING,
                allowNull: false
            }
        }, {
            tableName: "professores",
            timestamps: true
        }
    );

    Professor.associate = (models) =>{
        //1:N UM PROFESSOR possui MUITAS TURMAS
        Professor.hasMany(models.Turma, {
            as: 'turmas',
            foreignKey:'professor_id'

        })
    }
    
    return Professor
}