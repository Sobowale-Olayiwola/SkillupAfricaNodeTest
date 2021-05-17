const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class todos extends Model {}

  todos.init(
    {
      uniqueid: DataTypes.STRING,
      description: DataTypes.STRING,
      iscompleted: DataTypes.BOOLEAN
    },
    {
      sequelize,
      modelName: 'todos'
    }
  );

  return todos;
};
