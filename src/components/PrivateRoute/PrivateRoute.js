import React from "react";
import { useContext } from "react";
import { Redirect, Route } from "react-router";
import { homeContext } from "../Context/Context";

const PrivateRoute = ({ children, ...rest }) => {
    const [checkOut, setCheckOut, user, setUser] = useContext(homeContext)
  return (
    <div>
      <Route
        {...rest}
        render={({ location }) =>
          user.emailVerified ? (
            children
          ) : (
            <Redirect
              to={{
                pathname: "/login",
                state: { from: location },
              }}
            />
          )
        }
      />
    </div>
  );
};

export default PrivateRoute;
