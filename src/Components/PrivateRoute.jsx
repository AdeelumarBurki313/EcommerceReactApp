import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn");

  if (isLoggedIn === "true") {
    return element; 
  } else {
    return <Navigate to="/" />; 
  }
}

export default PrivateRoute;
