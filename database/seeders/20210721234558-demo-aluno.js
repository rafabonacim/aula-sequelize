'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    //bulkInsert (tableName,colums)
    await queryInterface.bulkInsert('alunos', [{
      nome: 'Rafa',
      sobrenome: 'Bonacim',
      ano_matricula: 2021,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Kaiza',
      sobrenome: 'Rosa',
      ano_matricula: 2010,
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      nome: 'Hendy',
      sobrenome: 'Almeida',
      ano_matricula: 2010,
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  
  },

  down: async (queryInterface, Sequelize) => {
    //bulkDelete(tableName,where)
    await queryInterface.bulkDelete('alunos', null, {});
    
  }
};
