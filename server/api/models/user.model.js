const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  first_name: {
    type: String,
    default: null
  },
  last_name: {
    type: String,
    default: null
  },
  email:  {
    type: String,
    unique: true
  },
  password: {
    type:  String,
  },
  token: {
    type: String,
  }
}, {
  collection: 'users',
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  }
});

const UserModel = mongoose.model('users', userSchema);

module.exports = UserModel;