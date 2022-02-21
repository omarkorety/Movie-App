import React, { useState } from "react";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
    showPassword: false,
    btnText: "Show Password",
  });
  const [errors, setErrors] = useState({
    emailErr: "",
    passwordErr: "",
  });

  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const emailInputChange = (event) => {
    setValues({ ...values, email: event.target.value });

    setErrors({
      ...errors,
      emailErr:
        event.target.value.length === 0
          ? "This Field Is Required"
          : !regex.test(event.target.value)
          ? "Wrong Email Format"
          : null,
    });
  };

  const passwordInputChange = (event) => {
    setValues({ ...values, password: event.target.value });

    setErrors({
      ...errors,
      passwordErr:
        event.target.value.length === 0
          ? "This Field is Required"
          : event.target.value.length < 8
          ? "Length must be more than 8"
          : null,
    });
  };

  const handleShowPassword = (event) => {
    setValues({ showPassword: !values.showPassword });
    event.preventDefault();
  };

  return (
    <div className="page-container">
      <div className="row mx-0 my-5">
        <div className="container col-lg-4 col-md-8 col-sm-9 my-5 ">
          <div className="card p-5 my-5 shadow custom-card-login custom-card">
            <h1>Login</h1>
            <form>
              <div className="mb-3 my-3">
                <input
                  type="email"
                  className="form-control"
                  onChange={emailInputChange}
                  placeholder="Email address"
                />
                <span className="text-danger">{errors.emailErr}</span>
              </div>
              <div className="mb-3">
                <input
                  type={values.showPassword ? "text" : "password"}
                  onChange={passwordInputChange}
                  className="form-control"
                  id="exampleInputPassword1"
                  placeholder="Password"
                />
                <button onClick={handleShowPassword} className="show-password">
                  {values.showPassword ? "Hide Password" : "Show Password"}
                </button>
                <span className="text-danger">{errors.passwordErr}</span>
              </div>
              <button
                type="submit"
                disabled={
                  errors.emailErr || errors.passwordErr || !values.email || !values.password
                }
                className="btn btn-primary"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
