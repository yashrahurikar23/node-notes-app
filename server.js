const app = require('./config/express');
const { port } = require('./config/vars');
const mongoose = require('./config/mongoose');
const logger = require('./config/logger');

mongoose.connect();

app.listen(port, () => {
  logger.info(`Server started on port ${port}`);
})