const { Schema, model, Types } = require("mongoose");

const AuthSchema = new Schema({
  name: { type: String, required: true },
  username: { type: String, required: true },
  email: { type: String, required: true },
  DOB: { type: String, required: true },
  Role: {
    type: String,
    enum: ["Admin", "Explorer"],
    required: true,
  },
  location: { type: String, required: true },
  password: { type: Number, required: true },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Authuser = model("user", AuthSchema);
module.exports = Authuser;
