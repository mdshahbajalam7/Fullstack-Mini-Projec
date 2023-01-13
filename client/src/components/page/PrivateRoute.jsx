import React from "react";
import { Navigate } from "react-router-dom";
// import { AuthContext } from "../../Context/AuthContext";

function PrivateRoute({ children }) {
  // const { authState } = useContext(AuthContext);
  let data =  localStorage.getItem("token")
  if (!data) {
    return <Navigate to={"/lognin"} />;
  }
  return children;
}

export default PrivateRoute;
