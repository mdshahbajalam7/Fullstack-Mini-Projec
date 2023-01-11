import { Box, TextField } from "@mui/material";
import React, { useState } from "react";
import { useContext } from "react";
import { BaseUrl } from "../../App";
import { AuthContext } from "../../Context/AuthContext";
import styles from "../page/data.module.css";
// import { AuthContext } from ".../Context/AuthContext";

const user = {
  Username: "",
  Password: "",
};

function Lognin() {
  const [userID, setUserID] = useState(user);
  const { authState, loginUser } = useContext(AuthContext);
  // const { authState, loginUser } = useContext(AuthContext);
  const [boolean, setBoolean] = useState(false);
  const handlechange = (e) => {
    setUserID({ ...userID, [e.target.name]: e.target.value });
  };
  const handlesubmit = async (e) => {
    e.preventDefault();
    setBoolean(true);
    // console.log(userID);
    try {
      let res = await fetch(`${BaseUrl}/lognin`, userID, {
        method: "POST",
        headers: {
          "Content-type": "Application/json",
        },
        body: JSON.stringify({
          Username: "",
          Password: "",
        }),
      });

      let data = await res.json();
      console.log("data", data);
      if (data.token) {
        loginUser(data.token);
      } else {
        alert("not found");
      }
      // console.log(data);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <div className={styles.container}>
      <Box className={styles.inputfield}>
        <form className={styles.form} onSubmit={handlesubmit}>
          <TextField
            style={{ marginTop: "15px" }}
            onChange={handlechange}
            id="outlined-basic"
            label="UserName"
            name="Username"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            onChange={handlechange}
            id="outlined-basic"
            label="Password"
            name="Password"
            variant="outlined"
          />
          <input
            style={{ marginTop: "15px" }}
            className={styles.btn}
            type="submit"
            value="SignUp"
          />
        </form>
      </Box>
    </div>
  );
}

export default Lognin;
