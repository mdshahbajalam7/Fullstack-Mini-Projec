import { Button } from "@mui/material";
import React from "react";
// import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthContext";
import styles from "./navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  // const { authState, logoutUser } = useContext(AuthContext);
  let data =  localStorage.getItem("token")
  console.log(data);
  const logoutfunction = () => {
    // logoutUser();
    localStorage.clear()
    navigate("/lognin");
  };
  return (
    <div className={styles.container}>
      <div className={styles.full}>
        <Link className={styles.link} to="/">
          FullStack-Mini-Porject
        </Link>
      </div>
      <div className={styles.HomeSide}>
        <Link className={styles.link} to="/">
          Home
        </Link>
        <Link className={styles.link} to="/about">
          About
        </Link>
        <Button variant="contained" href="/signup">
          SignUp
        </Button>
        {!data ? (
          <Button color="success" variant="contained" href="/lognin">
            Lognin
          </Button>
        ) : (
          <Button variant="contained" color="error" onClick={logoutfunction}>
            Logout
          </Button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
