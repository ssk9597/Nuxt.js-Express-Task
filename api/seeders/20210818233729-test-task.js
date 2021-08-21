'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const now = new Date();
    return queryInterface.bulkInsert(
      'Tasks',
      [
        { id: 1, content: 'aaa', status: true, createdAt: now, updatedAt: now },
        { id: 2, content: 'bbb', status: false, createdAt: now, updatedAt: now },
        { id: 3, content: 'ccc', status: true, createdAt: now, updatedAt: now },
        { id: 4, content: 'ddd', status: false, createdAt: now, updatedAt: now },
        { id: 5, content: 'eee', status: true, createdAt: now, updatedAt: now },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('Tasks', null, {});
  },
};
