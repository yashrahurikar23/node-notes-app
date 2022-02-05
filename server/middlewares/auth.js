const jwt = require('jsonwebtoken');
const UserModel = require('../api/models/user.model');
const { token_key } = require('../config/vars');

const authenticateJWTToken = async (req, res, next) => {
  const token = req.body.token || req.query.token || req.headers["x-access-token"];

  if(!token) {
    // Throw error for token not present
  }

  try {
    // Decode the JWT token
    const decoded = jwt.verify(token, token_key);

    // Find the user based on the decoded token
    const user = await UserModel.findById(decodedToken.user_id);

    if(!user) {
      // Throw error if the user does not exists
    }

    // Update users last seen time

    req.user = decoded;
    return next();
  } catch(error) {
    
  }
}

module.exports = authenticateJWTToken;