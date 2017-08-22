"use strict"

module.exports = {
  up: function(queryInterface, Sequelize) {
    queryInterface.renameColumn("toDos", "decription", "description")

    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.createTable('users', { id: Sequelize.INTEGER });
    */
  },

  down: function(queryInterface, Sequelize) {
    queryInterface.renameColumn("toDos", "description", "decription")

    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.dropTable('users');
    */
  }
}
