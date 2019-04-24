'use strict';

const items = [
  {
    id: 'MARTEAU-1234',
    name: 'Marteau',
  },
  {
    id: 'CLOUS-5678',
    name: 'Clous',
  },
];

module.exports = {
  up: (queryInterface, Sequelize) => {
    return process.env.INSERT_MOCK_ITEMS
      ? queryInterface.bulkInsert("Items", itemsMock, {})
      : Promise.resolve();
  },

  down: (queryInterface, Sequelize) => {
    return process.env.INSERT_MOCK_ITEMS
      ? queryInterface.bulkDelete(
          "Items",
          {
            id: { [Sequelize.Op.in]: itemsMock.map(item => item.id) }
          },
          {}
        )
      : Promise.resolve();
  }
};