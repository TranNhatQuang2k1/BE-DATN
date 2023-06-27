'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Postgroups', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      title: {
        type:Sequelize.STRING,
        allowNull:false,
      },
      content: {
        type:Sequelize.TEXT('long'),
        allowNull:false,
      },
      post_img: {
        type:Sequelize.STRING,
        allowNull:true,
      },
      group_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
      },
      member_id: {
        type:Sequelize.INTEGER,
        allowNull:false,
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
    await queryInterface.dropTable('Postgroups');
  }
};