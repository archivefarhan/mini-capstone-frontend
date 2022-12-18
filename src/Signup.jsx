import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/";
      })
      .catch((error) => {
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };
  return (
    <div className="container-fluid" id="signup">
      <h1>Signup</h1>
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <label className="mt-1" htmlFor="name">
          Name:{" "}
        </label>
        <input className="form-control" type="text" name="name" id="name" />
        <label className="mt-1" htmlFor="email">
          Email:{" "}
        </label>
        <input className="form-control" type="email" name="email" placeholder="yourname@test.com" id="email" />
        <label className="mt-1" htmlFor="password">
          Password:{" "}
        </label>
        <input className="form-control" type="password" name="password" id="password" />
        <label className="mt-1" htmlFor="password_confirmation">
          Password Confirmation:{" "}
        </label>
        <input className="form-control" type="password" name="password_confirmation" id="password_confirmation" />
        <button className="btn btn-primary mt-3" type="submit">
          {" "}
          Signup
        </button>
      </form>
    </div>
  );
}
