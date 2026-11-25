import { useState, useContext } from "react";
import { AuthContext } from "../contexts/AuthContextProvider";

function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const { login } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    login(form);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  return (
    <div>
      <div className="loginFormMainDiv">
        <h1>LOGIN</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input
              type="text"
              name="username"
              placeholder="Username"
              value={form.username}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
            />
          </div>
          <button type="submit">SUBMIT</button>
        </form>
      </div>
    </div>
  );
}

export default LoginForm;