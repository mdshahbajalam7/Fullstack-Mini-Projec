import { Box, TextField } from "@mui/material";
import React from "react";
import styles from "../page/data.module.css";
function Lognin() {
  const handlechange = () => {};
  const handlesubmit = (e) => {
    e.preventDefault();
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
            label="UserName"
            name="Username"
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
