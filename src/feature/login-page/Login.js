import React from "react";

const Login = () => {
  return (
    <div className="login-page-wrapper">
      <div className="login-page">
        <div className="form">
          <form className="login-form">
            <div className="form-group">
              <input type="email" name="email" placeholder="Your email" />
            </div>
            <div className="form-group">
              <input type="password" name="password" id="" />
            </div>
            <button>Login</button>
            <div className="form-group box-remember">
              <input
                type="checkbox"
                name="rememberMe"
                defaultValue="lsRememberMe"
                id="rememberMe"
              />
              <label htmlFor="rememberMe"></label>
            </div>
            <p className="message">Not registered?</p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
