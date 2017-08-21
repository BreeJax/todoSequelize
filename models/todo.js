'use strict';
module.exports = function(sequelize, DataTypes) {
  var toDo = sequelize.define('toDo', {
    decription: DataTypes.TEXT,
    completed: DataTypes.BOOLEAN
  }, {
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return toDo;
};