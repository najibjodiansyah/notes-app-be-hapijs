const { addHandler } = require('./handler');

const routes = [
  {
    method: 'GET',
    path: '/',
    handler: addHandler,
  },
];

module.exports = routes;
