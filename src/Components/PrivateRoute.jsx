import { Navigate } from "react-router-dom";

function PrivateRoute({ element }) {
  const isLoggedIn = localStorage.getItem("isLoggedIn"); // Check login status from localStorage

  if (isLoggedIn === "true") {
    return element; // Allow access to the component if the user is logged in
  } else {
    return <Navigate to="/" />; // Redirect to login page if not logged in
  }
}

export default PrivateRoute;
