const express = require('express');
const routes = require('./routes');
const middlewares = require('./middlewares');

const app = express();

middlewares(app);
routes(app);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is lisening on port ${PORT}`);
});
