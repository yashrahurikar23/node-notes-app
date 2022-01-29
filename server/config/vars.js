const path = require('path');

require('dotenv-safe').config({
  example: path.join(__dirname, '../../.env.example'),
  allowEmptyValues: true
})

module.exports = {
  port: process.env.PORT,
  mongo: {
    uri: process.env.MONGO_URI
  }
}