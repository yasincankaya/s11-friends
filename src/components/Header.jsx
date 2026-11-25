import { useContext } from "react";
import { useHistory } from "react-router-dom";
import { AuthContext } from "../contexts/AuthContextProvider";

function Header() {
  const { isLoggedIn, logout } = useContext(AuthContext);
  const history = useHistory();

  return (
    <div>
      <div className="loginFormHeaderDiv">
        <div>
          <h1>FRIENDS DATABASE</h1>
        </div>
        <div className="loginFormHeaderButtonDiv">
          {!isLoggedIn ? (
            <button onClick={() => history.push("/login")}>LOGIN</button>
          ) : (
            <>
              <button onClick={() => history.push("/friends")}>
                FRIENDS LIST
              </button>
              <button onClick={() => history.push("/friends/add")}>
                ADD FRIEND
              </button>
              <button onClick={logout}>LOGOUT</button>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

export default Header;