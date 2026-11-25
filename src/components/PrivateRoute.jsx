import { useContext } from "react";
import { Route, Redirect } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";

export default function PrivateRoute({ children, component: Component, ...rest }) {
  const { isLoggedIn } = useContext(AuthContext);

  return (
    <Route
      {...rest}
      render={(props) =>
        isLoggedIn ? (
          Component ? <Component {...props} /> : children
        ) : (
          <Redirect to="/login" />
        )
      }
    />
  );
}