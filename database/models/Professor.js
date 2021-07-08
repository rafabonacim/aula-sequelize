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
    
    return Professor
}