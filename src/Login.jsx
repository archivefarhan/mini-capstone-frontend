import axios from "axios";
import { useState } from "react";

const jwt = localStorage.getItem("jwt");
if (jwt) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${jwt}`;
}

export function Login() {
  const [errors, setErrors] = useState([]);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/sessions", params)
      .then((response) => {
        console.log(response.data);
        axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
        localStorage.setItem("jwt", response.data.jwt);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response);
        setErrors(["Invalid email or password"]);
      });
  };
  return (
    <div className="mt-3 container-fluid" id="login">
      <h1 className="mt-1">Login</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label className="mt-1 form-label" htmlFor="email_login">
          Email:{" "}
        </label>
        <input className="form-control" type="email" id="email_login" name="email" />
        <label className="mt-2 form-label" htmlFor="password_login">
          Password:{" "}
        </label>
        <input className="form-control" type="password" name="password" id="password_login" />
        <button className="mt-3 btn btn-primary" type="submit">
          Login
        </button>
      </form>
    </div>
  );
}
