const express = require('express');
const app = require('./config/express');
const { port } = require('./config/vars');
const mongoose = require('./config/mongoose');
const logger = require('./config/logger');
const router = express.Router();

// Routes
const v1Routes = require('./api/routes/v1');

// Routes
app.use('/api/v1', v1Routes);

const { connection } = mongoose.connect();

connection.on('error', () => {

});

connection.on('open', () => {
  app.listen(port, () => {
    logger.info(`Server started on port ${port}`);
  });
});


