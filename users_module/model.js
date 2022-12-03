const { Schema, mongoose } = require("../db/mongoose");

const userSchema = new Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
      // todo: add length requirement
    },
    createdAt: {
      type: Date,
      default: Date.now,
    },
  },
  { timestamps: true }
);

const userModel = mongoose.model("users", userSchema);

// whenever a user is saved, you want to send an email ** how do I do this? I have a 15% off "coupon" I wanted people to get

module.exports = userModel;
