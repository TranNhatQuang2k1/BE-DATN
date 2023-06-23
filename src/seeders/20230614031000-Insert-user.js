'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert('Users', [
      {
        email: 'nhatquangtran135@gmail.com',
        password: '0935267739',
        name: 'Nhat Quang',
        image: 'https://tse4.mm.bing.net/th?id=OIP.Td-1qkLRcbE2gHw51-rlWAHaHa&pid=Api&P=0&h=180',
        gender: true,
        phoneNumber: '0935267739',
        birthday: '2022-11-20',
        address: '12 thanh huy 2',
        status: true,
        role_id: 1,
        token: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        email: 'nhatquangtran130@gmail.com',
        password: '0935267739',
        name: 'Lee Quang',
        image: 'https://tse4.mm.bing.net/th?id=OIP.eVdVaaTXBrBFWquUKu_KdwHaE-&pid=Api&P=0&h=180',
        gender: true,
        phoneNumber: '0935267739',
        birthday: '2001-01-02',
        address: '12 thanh huy 2',
        status: true,
        role_id: 1,
        token: null,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Thêm các dữ liệu mẫu khác nếu cần
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete('Users', null, {});
  }
};
