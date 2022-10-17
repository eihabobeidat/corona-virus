import React, { createRef, useState } from "react";

const Login = () => {
  const [form, setForm] = useState({ username: "", password: "" });
  const [error, setError] = useState({ username: [], password: [] });
  const username = createRef();
  const password = createRef();

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(username.current.value);
    console.log(password.current.value);
  };

  const Validate = async () => {
    console.log(error);
    if (form.username.trim() === "") {
      if (error.username.indexOf("Field required") === -1)
        error.username.push("Field required");
    } else {
      error.username.pop();
    }

    if (form.password.trim() === "") {
      if (error.password.indexOf("Field required") === -1)
        error.password.push("Field required");
    } else {
      error.password.pop();
    }

    setError({ ...error });
  };

  const HandleText = (event) => {
    form[event.currentTarget.id] = event.currentTarget.value;
    setForm({ ...form });
    Validate();
  };

  return (
    <div className="p-5">
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            id="username"
            ref={username}
            value={form.username}
            type="text"
            onChange={HandleText}
            className="form-control"
          />
          {error.username.map((error, index) => (
            <p key={index} className="text-danger mt-1">
              {error}
            </p>
          ))}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            id="password"
            ref={password}
            value={form.password}
            type="password"
            onChange={HandleText}
            className="form-control"
          />
          {error.password.map((error, index) => (
            <p className="text-danger mt-1" key={index}>
              {error}
            </p>
          ))}
        </div>
        <button className="btn mt-3 btn-primary">Login</button>
      </form>
    </div>
  );
};

export default Login;
