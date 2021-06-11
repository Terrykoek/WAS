import React from "react";
import { Redirect, Route } from "react-router-dom";

//this function accepts component and other route details as props
//component refers to component routes
//restofprops refers to the rest of props that comes with the component
function ProtectedRoute({ component: Component, ...restOfProps }) {
  //get userauthdata from sessionStorage from login action
  const userAuthData = sessionStorage.getItem("userAuthData");

  return (
    <Route
      {...restOfProps}
      render={(props) =>
        //if the value is true, render the component, else redirect route to / page
        userAuthData ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  );
}


export default ProtectedRoute;