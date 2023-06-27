'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.hasMany(models.Postgroup, { foreignKey: 'group_id', as: 'posts' });
      this.hasMany(models.Member, { foreignKey: 'group_id', as: 'members' });
    }
  }
  Group.init({
    name: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    description: {
      type:DataTypes.TEXT('long'),
      allowNull:true,
    },
    img_bg: {
      type:DataTypes.STRING,
      allowNull:false,
    },
    avartar_group: {
      type:DataTypes.STRING,
      allowNull:true,
    },
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};