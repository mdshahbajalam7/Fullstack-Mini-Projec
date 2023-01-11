const { Router } = require("express");
const Authuser = require("../models/Auth");
const jwt = require("jsonwebtoken");
const AuthRouter = Router();

// <-------------------PostRouterSingup-------------------------->
AuthRouter.post("/signup", async (req, res) => {
  const { Name, Username, Email, DOB, Role, Location, Password } = req.body;
  try {
    const signupdata = new Authuser({
      Name,
      Username,
      Email,
      DOB,
      Role,
      Location,
      Password,
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
// <-------------------PostRouter login-------------------------->
AuthRouter.post("/lognin", async (req, res) => {
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
// <-------------------getRouter-------------------------->

AuthRouter.get("/get", async (req, res) => {
  try {
    const getdata = await Authuser.find();
    res
      .status(200)
      .json({ message: "get data Successfully", getdata: getdata });
  } catch (error) {
    res.status(401).json(error.message);
    console.log(error);
  }
});
// <-------------------UpdateRouter-------------------------->
AuthRouter.put("/update/:loginId", async (req, res) => {
  const loginId = req.params.loginId;
  const payload = req.body;
  try {
    let updatedata = await Authuser.findByIdAndUpdate(
      { _id: loginId },
      payload
    );
    res
      .status(201)
      .json({ message: "Update Successfully", updatedata: updatedata });
  } catch (error) {
    res.status(501).json(error.message);
  }
});
// <-------------------DeleteRouter-------------------------->
AuthRouter.delete("/deletes/:loginId", async (req, res) => {
  const loginId = req.params.loginId;
  try {
    let deletedata = await Authuser.findByIdAndDelete({ _id: loginId });
    res
      .status(201)
      .json({ message: "Update Successfully", updatedata: deletedata });
  } catch (error) {
    res.status(501).json(error.message);
  }
});

module.exports = AuthRouter;
