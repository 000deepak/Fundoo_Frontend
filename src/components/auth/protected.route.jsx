// import react from 'react';
// import { Navigate, Route } from 'react-router-dom';


// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       localStorage.getItem('token') ? <Component {...props} /> : <Navigate to={{ pathname: '/Signin' }} />
//     }
//   />
// );

// export default PrivateRoute;

import React from "react";
import { Route, Navigate } from "react-router-dom";
import auth from "./auth";

export const ProtectedRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={props => {
        if (auth.isAuthenticated()) {
          return <Component {...props} />;
        } else {
          return (
            <Navigate
              to={{
                pathname: "/",
                state: {
                  from: props.location
                }
              }}
            />
          );
        }
      }}
    />
  );
};
