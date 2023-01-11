const { Schema, model, Types } = require("mongoose");

const AuthSchema = new Schema({
  Name: { type: String },
  Username: { type: String },
  Email: { type: String },
  DOB: { type: String },
  Role: {
    type: String,
    enum: ["Admin", "Explorer"],
    required: true,
  },
  Location: { type: String },
  Password: { type: Number },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

const Authuser = model("user", AuthSchema);
module.exports = Authuser;
