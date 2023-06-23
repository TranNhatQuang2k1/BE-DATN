'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Roles', [
      {
        name: 'ROLE_ADMIN',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ROLE_DOCTOR',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ROLE_USER',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'ROLE_PATIENT',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các dữ liệu mẫu khác nếu cần
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Roles', null, {});
  }
};
