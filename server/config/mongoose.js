const mongoose = require('mongoose');
const { mongo } = require('./vars');

mongoose.Promise = Promise;

exports.connect = () => {
  mongoose.connect(mongo.uri, {
    keepAlive: 1,
    useNewUrlParser: true,
    useUnifiedTopology: true
  });
  return {
    connection: mongoose.connection
  };
}