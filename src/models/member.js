'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class Member extends Model {
    static associate(models) {
      this.belongsTo(models.Group, { foreignKey: 'group_id', as: 'group' });
      this.belongsTo(models.User, { foreignKey: 'user_id', as: 'memberUser' });
    }
  }

  Member.init(
    {
      // Các trường của bảng Member
      group_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    },
    {
      sequelize,
      modelName: 'Member',
    }
  );

  return Member;
};
