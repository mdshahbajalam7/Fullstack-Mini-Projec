const jwt = require("jsonwebtoken");
const authenticate = (req, res, next) => {
  const token = req.headers.authorization;
  if (token) {
    const decoded = jwt.verify(token, "Mdshahbaj700");
    if (decoded) {
      const userID = decoded.userID;
      console.log(decoded);
      req.body.userID = userID;
      next();
    } else {
      res.send("please login first");
    }
  } else {
    res.send("please login first");
  }
};
module.exports = authenticate;
// 63bfafdc064bc17343aebc02
// 63c0396ca14e5f17c200eb8a
