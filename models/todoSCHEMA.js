"use strict"
module.exports = function(sequelize, DataTypes) {
  let toDo = sequelize.define("toDo", {
    description: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    timeCreated: {
      type: DataTypes.DATE,
      allowNull: false
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    }
  })
  return toDo
}
