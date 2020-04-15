import React, { useState } from "react";
import { connect } from "react-redux";
// import actions
import { setUser } from "../../redux/actions";

// import { Link } from "react-router-dom";
// object descturing
function Login({ setUser }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const patternEmail = /^[a-z][a-z0-9_\.]{1,32}@[a-z0-9]{2,}(\.[a-z0-9]{2,4}){1,2}$/;

  const handleSubmitLogin = (event) => {
    event.preventDefault();
    setUser(email, password);
  };
  // const handleErrors = (email, password) => {
  //   let errors = {};

  //   if (!email) {
  //     errors.email = "email address is required";
  //   } else if (!patternEmail.test(email)) {
  //     errors.email = "email address is invalid";
  //   }
  //   if (!password) {
  //     errors.password = "Password is required";
  //   } else if (password.length < 3) {
  //     errors.password = "Password needs to be more than 2 characters";
  //   }
  //   setErrors({ ...errors, errors });

  //   return errors;
  // };

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    let errors = {
      emailErrors: "",
      passErrors: "",
    };
    if (name === "email") {
      console.log(value);
      if (!value) {
        errors.emailErrors = "email address is required";
      } else if (!patternEmail.test(email)) {
        errors.emailErrors = "email address is invalid";
      } else {
        setErrors({});
        setEmail(value);
        console.log(value);
      }
      setErrors({ ...errors, errors });
      console.log(errors.emailErrors);
      return errors;
    }
    // if (name === "email") {
    //   if (value !== "") {
    //     setEmail(value);
    //     console.log(value);
    //   }
    // }
    // if (name === "password") {
    //   setPassword(value);
    // }
  };
  // console.log(errors);

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
                // value={email}
                onChange={(event) => handleOnChange(event)}
              />
              {errors.emailErrors && (
                <p className="error">{errors.emailErrors}</p>
              )}
            </div>
            <div className="form-group">
              <input
                type="password"
                name="password"
                id=""
                value={password}
                onChange={handleOnChange}
              />
              {/* {errorsPassword && <p className="error">sai passs</p>} */}
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

const mapStateToProps = (state) => {
  const { email } = state;
  return {
    email,
  };
};
const mapDispatchToProps = {
  setUser,
};
export default connect(mapStateToProps, mapDispatchToProps)(Login);
