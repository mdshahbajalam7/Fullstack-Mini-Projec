const express = require("express");
const cors = require("express");
const connection = require("./database/db");
const AuthRouter = require("./Router/Authusers");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => {
  res.send("FullStack-Mini-Project");
});

app.use("/auth", AuthRouter);

app.listen(process.env.PORT, async () => {
  await connection;
  console.log(`Database connect to server`);
  console.log(`Server running on http://localhost:${process.env.PORT}`);
});
