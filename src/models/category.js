'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Category extends Model {
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
      });
    }
  }
  Category.init({
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    description:{
      type: DataTypes.TEXT('long'),
      allowNull: false
    },
    image:{
      type: DataTypes.STRING,
      allowNull: false
    },
  }, {
  sequelize,
  modelName: 'Category',
});
return Category;
};