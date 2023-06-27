'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Comments', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      post_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      member_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      parent_id: {
        type:Sequelize.STRING,
        allowNull:true,
      },
      content: {
        type:Sequelize.TEXT('long'),
        allowNull:true,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Comments');
  }
};