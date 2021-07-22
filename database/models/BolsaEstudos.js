module.exports= (sequelize, Datatypes) => {
    const BolsaEstudos = sequelize.define(
        "BolsaEstudos",
        {
            id: {
                type: Datatypes.INTEGER,
                primaryKey: true,
                allowNull:true,
                autoIncrement: true 
              },
              nome: {
                type: Datatypes.STRING,
                allowNull: false
              },
              porcentagem_desconto: {
                type: Datatypes.INTEGER,
                allowNull:false
              },
              patrocinador: {
                type: Datatypes.STRING,
                allowNull: false
              },
              max_aplicacoes: {
                type: Datatypes.INTEGER,
                allowNull: false
              },
              status: {
                type: Datatypes.BOOLEAN,
                allowNull:false,
                defaultValue: 1
              }
        }, {
            "tableName": "bolsa_estudos",
            "timestamps": true 
        }
    );
    return BolsaEstudos;
}