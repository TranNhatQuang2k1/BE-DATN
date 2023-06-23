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
      this.belongsTo(models.Specialty, { foreignKey: 'post_id', as: 'post' });
      this.belongsTo(models.Specialty, { foreignKey: 'member_id', as: 'member' });
    }
  }
  Group.init({
    description: {
      type:DataTypes.STRING,
      allowNull:true,
    },
    rate: DataTypes.FLOAT,
    user_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
    hospital_id: {
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    clinic_id: {
      type:DataTypes.INTEGER,
      allowNull:true,
    },
    specialty_id: {
      type:DataTypes.INTEGER,
      allowNull:false,
    },
  }, {
    sequelize,
    modelName: 'Group',
  });
  return Group;
};