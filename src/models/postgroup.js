'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Postgroup extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.belongsTo(models.Member, { foreignKey: 'member_id', as: 'members' });
        this.belongsTo(models.Group, { foreignKey: 'id', as: 'group' });
    }
  }
  Postgroup.init({
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
    group_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    member_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Postgroup',
  });
  return Postgroup;
};