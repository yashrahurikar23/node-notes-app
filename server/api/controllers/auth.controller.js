const UserModel = require('../models/user.model');
const { token_key } = require('../../config/vars');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

AuthController = module.exports;

AuthController.registerUser = async (params) => {
  // Getting users inputs
  const { first_name, last_name, email, password } = params;

  // Validate user input
  if(!(email && first_name && last_name && password)) {
    // Throw Error for the missing parameter
  }

  // Validating if the user already exists
  const oldUser = await UserModel.findOne({ email });

  if(oldUser) {
    // Throw an user already exist error
  }

  // Encrpyting user password
  const encryptedPassword = await bcrypt.hash(password, 10);

  // Creating the new user
  const user = await new UserModel({
    first_name,
    last_name,
    email: email.toLowerCase(),
    password: encryptedPassword,
  });

  // Creating token
  const token = jwt.sign(
    { user_id: user._id, email },
    token_key,
    { expiresIn: '2h' }
  );
  user.token = token;
  
  // Saving user token
  await user.save();

  return user;
}

AuthController.loginUser = async (params) => {
  // Getting users inputs
  const { email, password } = params;

  // Validate user input
  if(!(email && password)) {
    // Throw Error for missing parameters
  }

  const user = await UserModel.findOne({ email });

  // Check if the user exists
  if(!user) {
    // Throw error for no users found
  }

  // Check if password is authentic
  const checkPasswordWithBcyrpt = await bcrypt.compare(password, user.password);
  if(checkPasswordWithBcyrpt) {
    // Create token
    const token = jwt.sign(
      { user_id: user._id, email },
      token_key,
      { expiresIn: '2h' }
    );

    // Save user token
    user.token = token;
    return user;

  }
  return null;
}