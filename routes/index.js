const todoRoute = require('./todoRoutes');
const frontEndRoute = require('./frontEndRoutes')
const config = require('../config/config');


module.exports = (app) => {
  app.use('api/v1/todos', todoRoute);
  app.use('/', frontEndRoute);
}
//   app.get('/', (req, res) => {
//     console.log(`I go here`);
//     res.json({"success": 'You just Ping me !'});
//     res.render("index")
//   });

//   app.post('/', (req, res) => {
//     res.json({"success": "OK"});
//   })
// };



// Route
// middleware use function with route pattern and handler
// http verb of the express function
// middleware use function with route pattern and exported router module


// User Module
// Post Module

// /users => all user
// /users/:id => particular user /users/ade

// /posts => all user
// /posts/:id => particular post
