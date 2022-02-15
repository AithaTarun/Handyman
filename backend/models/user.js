const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema
(
  {
    username:
      {
        type: String,
        required: true,
        unique: true
      },

    password:
      {
        type: String,
        required: true
      },

    role:
      {
        type: String,
        enum: ['Admin', 'Handyman', 'Customer'],
        required: true
      },

    email:
      {
        type: String,
        required: true,
        unique: true
      },

    phone:
      {
        type: String,
        unique: true
      },

    verified:
      {
        type: Boolean,
        required: true,
        default: false
      }
  }
);

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model
(
  'User',
  userSchema
);
