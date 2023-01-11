import React from "react";
import { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Context/AuthContext";
import styles from "./navbar.module.css";

function Navbar() {
  const navigate = useNavigate();
  const { authState, logoutUser } = useContext(AuthContext);
  const logoutfunction = () => {
    logoutUser();
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
        <Link
          style={{
            // border: "1px solid",
            width: "20%",
            textAlign: "center",
            height: "30px",
            marginTop: "-3px",
            background: "teal",
            color: "white",
            borderRadius: "5px",
          }}
          className={styles.link}
          to="/signup"
        >
          SignUp
        </Link>
        {!authState.isAuth ? (
          <Link
            style={{
              // border: "1px solid",
              width: "20%",
              textAlign: "center",
              height: "30px",
              marginTop: "-3px",
              background: "Green",
              color: "white",
              borderRadius: "5px",
            }}
            className={styles.link}
            to="/lognin"
          >
            Lognin
          </Link>
        ) : (
          <Link
            style={{
              // border: "1px solid",
              width: "20%",
              textAlign: "center",
              height: "30px",
              marginTop: "-3px",
              background: "red",
              color: "white",
              borderRadius: "5px",
            }}
            className={styles.link}
            // to="/lognin"
            onClick={logoutfunction}
          >
            Logout
          </Link>
        )}
      </div>
    </div>
  );
}

export default Navbar;
