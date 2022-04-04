const mongoose = require('mongoose');
const {Schema} = require("mongoose");

const otpSchema = new mongoose.Schema
(
  {
    otp:
      {
        type: Number,
        required: true
      },

    createdAt:
      {
        type: Date,
        default: Date.now,
        expires: '15m',
        required: true
      },

    userID:
      {
        type: Schema.Types.ObjectId,
        ref: 'User',
        required: true
      }
  }
);

module.exports = mongoose.model
(
  'OTP',
  otpSchema
);
