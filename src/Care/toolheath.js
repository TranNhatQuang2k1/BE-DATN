'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Toolheath extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
    //   this.belongsTo(models.Status, { foreignKey: 'status_id', as: 'status' });
    this.hasMany(models.Post, {
        foreignKey: 'category_id', // Tên trường chứa khóa ngoại trong bảng Post
        as: 'posts', // Đặt biệt danh cho mối quan hệ
      },
      {
        foreignKey: 'specialty_id', as: 'doctors'
      }
      );
    }
  }
  Toolheath.init({
    tool_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT('long'),
      allowNull: true
    },
    category_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
      specialty_id: {
        type: DataTypes.INTEGER,
        allowNull: false
      },
    image:{
      type: DataTypes.STRING,
      allowNull: true
    },
    result:{
      type: DataTypes.STRING,
      allowNull: true
    },
  }, {
  sequelize,
  modelName: 'Category',
});
return Toolheath;
};