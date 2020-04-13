import React, { useState } from "react";

// import { Link } from "react-router-dom";
function Login(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorsEmail, setErrorsEmail] = useState(false);
  const [errorsPassword, setErrorsPassword] = useState(false);
  const patternEmail = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    if (!patternEmail.test(email)) {
      setErrorsEmail(true);
    } else {
      setErrorsEmail(false);
    }
    if (password === "") {
      setErrorsPassword(true);
    } else {
      setErrorsPassword(false);
    }
    if (errorsEmail === false && errorsPassword === false) {
      props.history.push("/");
    }
  };
  const handleOnChange = (event) => {
    const { name, value } = event.target;
    if (name === "email") {
      setEmail(value);
    }
    if (name === "password") {
      setPassword(value);
    }
  };

  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <div className="form">
          <form className="login-form" onSubmit={handleSubmitLogin} noValidate>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder="Your email"
                value={email}
                onChange={handleOnChange}
              />
              {errorsEmail && <p className="error">sai email</p>}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id=""
                value={password}
                onChange={handleOnChange}
              />
              {errorsPassword && (
                <p className="error">sai con me may pass roi</p>
              )}
            </div>
            <button>Login</button>
            <div className="form-group box-remember">
              <input
                type="checkbox"
                name="rememberMe"
                defaultValue="lsRememberMe"
                id="rememberMe"
              />
              <label htmlFor="rememberMe">Remember Me</label>
            </div>
            <p className="message">
              Not registered?
              {/* <Link to="/RegisterPage">Create an account</Link> */}
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
