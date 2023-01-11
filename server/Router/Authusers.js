const { Router } = require("express");

const Authuser = require("../models/Auth");
const jwt = require("jsonwebtoken");

const AuthRouter = Router();

AuthRouter.post("/signup", async (req, res) => {
  const { name, username, email, DOB, Role, location, password } = req.body;
  try {
    const signupdata = new Authuser({
      name,
      username,
      email,
      DOB,
      Role,
      location,
      password,
    });
    console.log("signupdata", signupdata);
    signupdata.save().then(() => {
      res.send({ Message: "Signup successfully", signupdata: signupdata });
    });
  } catch (error) {
    res.send("Error in Signup the user");
    console.log(error);
  }
});
AuthRouter.post("/login", async (req, res) => {
  const { username, password } = req.body;
  const logindata1 = await Authuser.findOne({ username, password });
  console.log("logindata1", logindata1);
  if (logindata1?.username !== username) {
    res.status(402).send("Inavlid email");
  } else {
    const token = jwt.sign({ username: "chand" }, "Mdshahbaj700", {
      expiresIn: "1d",
    });
    return res.send({ token: token, message: "login successfully" });
  }
  res.status(401).send("unathorized");
});

module.exports = AuthRouter;
