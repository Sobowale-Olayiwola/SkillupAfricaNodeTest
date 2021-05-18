const todoRoute = require('./todoRoutes');
const frontEndRoute = require('./frontEndRoutes')
const config = require('../config/config');

module.exports = (app) => {
  app.use('api/v1/todos', todoRoute);
  app.use('/', frontEndRoute);
}
