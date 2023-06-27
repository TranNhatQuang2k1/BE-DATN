'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Comment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsTo(models.Postgroup, { foreignKey: 'post_id', as: 'post' });
      this.belongsTo(models.Member, { foreignKey: 'member_id', as: 'member' });
    }
  }
  Comment.init({
    post_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    member_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    parent_id: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    content: {
      type:DataTypes.TEXT('long'),
      allowNull:true,
    },
  }, {
    sequelize,
    modelName: 'Comment',
  });
  return Comment;
};