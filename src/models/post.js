'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Post extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(models.Category, {
            foreignKey: 'category_id', // Tên trường chứa khóa ngoại trong bảng Post
            as: 'category', // Đặt biệt danh cho mối quan hệ
          });
    }
  }
  Post.init({
    title: {
        type:DataTypes.STRING,
        allowNull:false,
      },
    content: {
      type:DataTypes.TEXT('long'),
      allowNull:false,
    },
    post_img: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    category_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    isFeatured: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Post',
  });
  return Post;
};