"use strict"
module.exports = function(sequelize, DataTypes) {
  let toDo = sequelize.define("toDo", {
    decription: {
      type: DataTypes.TEXT,
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
