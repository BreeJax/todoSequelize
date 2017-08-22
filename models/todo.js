"use strict"
module.exports = function(sequelize, DataTypes) {
  var toDo = sequelize.define(
    "toDo",
    {
      description: DataTypes.TEXT,
      completed: DataTypes.BOOLEAN,
      completedAt: DataTypes.DATE
    },
    {
      classMethods: {
        associate: function(models) {
          // associations can be defined here
        }
      }
    }
  )
  return toDo
}
