import { useState, useEffect, useContext } from "react";
import axios from "axios";
import { AuthContext } from "../contexts/AuthContextProvider";

export default function FriendsList() {
  const [friends, setFriends] = useState([]);
  const { authUserInfo } = useContext(AuthContext);

  useEffect(() => {
    axios
      .get("https://nextgen-project.onrender.com/api/s11d2/friends", {
        headers: {
          Authorization: authUserInfo?.token,
        },
      })
      .then((res) => {
        setFriends(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [authUserInfo?.token]);

  return (
    <div className="friendListDiv">
      <h1>FRIENDS LIST</h1>
      {friends.map((friend, key) => (
        <div className="friendList" key={key}>
          -{friend.name}-{friend.email}
        </div>
      ))}
    </div>
  );
}