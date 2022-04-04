const mongoose = require('mongoose');

const uniqueValidator = require('mongoose-unique-validator');

const userSchema = new mongoose.Schema
(
  {
    role:
      {
        type: String,
        enum: ['admin', 'handyman', 'customer'],
        required: true
      },

    username:
      {
        type: String,
        required: true
      },

    password:
      {
        type: String,
        required: true
      },

    first_name:
      {
        type: String,
        required: true
      },

    last_name:
      {
        type: String,
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
        required: true,
        unique: true
      },

    address:
      {
        type:
          {
            locality:
              {
                type: String,
                required: true
              },

            landmark:
              {
                type: String
              },

            pin_code:
              {
                type: Number,
                required: true
              },

            city_district_town:
              {
                type: String,
                required: true
              },

            state:
              {
                type: String,
                required: true
              },

            address_line:
              {
                type: String,
                required: true
              }
          },
        required: true
      },

    verified:
      {
        type: Boolean,
        required: true,
        default: false
      }
  }
);

userSchema.index({"username": 1, "role": 1}, {unique: true}); // Making combination of role and username unique

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model
(
  'User',
  userSchema
);
