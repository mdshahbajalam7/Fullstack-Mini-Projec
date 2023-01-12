import React from "react";
import TextField from "@mui/material/TextField";
import styles from "../page/data.module.css";
import { Box, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import axios from "axios";
import { BaseUrl } from "../../App";
import { useNavigate } from "react-router-dom";
function Signup() {
  const navigate = useNavigate()
  const [formdata, setformdata] = useState({});
  const handlechange = (e) => {
    setformdata({ ...formdata, [e.target.name]: e.target.value });
  };
  const handlesubmit = (e) => {
    e.preventDefault();
    axios
      .post(`${BaseUrl}/signup`, formdata)
      .then(({ data }) => {
        console.log(data);
        navigate("/lognin")
      })
      .catch((err) => console.log(err));
    console.log(formdata);
  };
  return (
    <div className={styles.container}>
      <Box className={styles.inputfield}>
        <form className={styles.form} onSubmit={handlesubmit}>
          <TextField
            className={styles.TextField}
            onChange={handlechange}
            id="outlined-basic"
            label="Name"
            name="Name"
            variant="outlined"
          />
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
            label="Email"
            name="Email"
            variant="outlined"
          />
          <TextField
            type="date"
            style={{ marginTop: "15px" }}
            onChange={handlechange}
            // type="number"
            id="outlined-basic"
            // label="DOB"
            name="DOB"
            variant="outlined"
          />
          {/* <InputLabel id="demo-simple-select-label">Role</InputLabel> */}
          <Select
            style={{ marginTop: "15px" }}
            onChange={handlechange}
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            name="Role"
            label="Role"
            variant="outlined"
            // onChange={handleChange}
          >
            {/* <MenuItem value="Admin">Role</MenuItem> */}
            <MenuItem value="Admin">Admin</MenuItem>
            <MenuItem value="Explorer">Explorer</MenuItem>
          </Select>
          <TextField
            style={{ marginTop: "15px" }}
            onChange={handlechange}
            id="outlined-basic"
            label="Location"
            name="Location"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            onChange={handlechange}
            type="password"
            id="outlined-basic"
            label="Password"
            name="Password"
            variant="outlined"
          />
          <TextField
            style={{ marginTop: "15px" }}
            onChange={handlechange}
            type="password"
            id="outlined-basic"
            label="Confirm Password"
            name="confirmpassword"
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

export default Signup;
