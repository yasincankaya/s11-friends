import { createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import useLocalStorage from "../hooks/useLocalStorage";

export const AuthContext = createContext();

export default function AuthContextProvider({ children }) {
  const [authUserInfo, setAuthUserInfo] = useLocalStorage("code2work_s11d2", {});
  const history = useHistory();

  const isLoggedIn = Boolean(authUserInfo?.token);

  const login = (credentials) => {
    axios
      .post("https://nextgen-project.onrender.com/api/s11d2/login", credentials)
      .then((res) => {
        setAuthUserInfo(res.data);
        history.push("/friends");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const logout = () => {
    setAuthUserInfo({});
    history.push("/login");
  };

  return (
    <AuthContext.Provider
      value={{
        authUserInfo,
        token: authUserInfo?.token,
        isLoggedIn,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}