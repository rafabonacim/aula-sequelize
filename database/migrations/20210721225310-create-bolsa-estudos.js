'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('bolsa_estudos', {
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull:true,
        autoIncrement: true 
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      porcentagem_desconto: {
        type: Sequelize.INTEGER,
        allowNull:false
      },
      patrocinador: {
        type: Sequelize.STRING,
        allowNull: false
      },
      max_aplicacoes: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      status: {
        type: Sequelize.BOOLEAN,
        allowNull:false,
        defaultValue: 1
      },
      createdAt: Sequelize.DATE,
      updatedAt: Sequelize.DATE
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('bolsa_estudos');
  }
};
