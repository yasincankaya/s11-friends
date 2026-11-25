import "./App.css";
import { Switch, Route } from "react-router-dom";
import AuthContextProvider from "./contexts/AuthContextProvider";
import PrivateRoute from "./components/PrivateRoute";
import LoginForm from "./components/LoginForm";
import Header from "./components/Header";
import FriendsList from "./components/FriendsList";
import AddFriend from "./components/AddFriend";

function App() {
  return (
    <AuthContextProvider>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/login" component={LoginForm} />
          <PrivateRoute path="/friends/add" component={AddFriend} />
          <PrivateRoute path="/friends" component={FriendsList} />
          <PrivateRoute exact path="/" component={FriendsList} />
        </Switch>
      </div>
    </AuthContextProvider>
  );
}

export default App;