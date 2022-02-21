import React, { useState } from "react";
import Success from "./Submitted";

function Register() {
  const [values, setValues] = useState({
    name: "",
    email: "",
    userName: "",
    password: "",
    confirmPassword: "",
  });
  const [errors, setErrors] = useState({
    nameErr: "",
    emailErr: "",
    userNameErr: "",
    passwordErr: "",
    confirmPasswordErr: "",
  });
  const regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  const regexPassword = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;

  const [submitted, setSubmitted] = useState(false);

  const nameInputChange = (event) => {
    setValues({ ...values, name: event.target.value });

    setErrors({
      ...errors,
      nameErr:
        event.target.value.length === 0
          ? "This Field Is Required"
          : event.target.value.length < 2
          ? "Min Length is 2 Characters"
          : null,
    });
  };
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
  const userNameInputChange = (event) => {
    setValues({ ...values, userName: event.target.value });

    setErrors({
      ...errors,
      userNameErr:
        event.target.value.length === 0
          ? "This Field is Required"
          : event.target.value.match(/ /)
          ? "Spaces are not Allowed"
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
          : !regexPassword.test(event.target.value)
          ? "Minimum eight characters, at least one letter, one number and one special character"
          : null,
    });
  };
  const confirmPasswordInputChange = (event) => {
    setValues({ ...values, confirmPasswordErr: event.target.value });

    setErrors({
      ...errors,
      confirmPasswordErr: event.target.value !== values.password ? "Password Doesn't Match" : null,
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };
  return (
    <div className="page-container">
      <div className="row mx-0 my-2">
        <div className="container col-md-6 col-sm-9">
          <div className="card p-5 my-5 shadow custom-card">
            {submitted ? <Success details="Success! Thank you for Registering" /> : null}
            <h1>Register</h1>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label name="name" className="form-label">
                  Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  onChange={nameInputChange}
                  value={values.name}
                />
                <span className="text-danger">{errors.nameErr}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  onChange={emailInputChange}
                  value={values.email}
                />
                <span className="text-danger">{errors.emailErr}</span>
              </div>
              <div className="mb-3">
                <label name="userName" className="form-label">
                  User Name
                </label>
                <input
                  type="name"
                  className="form-control"
                  onChange={userNameInputChange}
                  value={values.userName}
                />
                <span className="text-danger">{errors.userNameErr}</span>
              </div>
              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  onChange={passwordInputChange}
                  value={values.password}
                />
                <span className="text-danger">{errors.passwordErr}</span>
              </div>

              <div className="mb-3">
                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  onChange={confirmPasswordInputChange}
                  className="form-control"
                />
                <span className="text-danger">{errors.confirmPasswordErr}</span>
              </div>
              <button
                type="submit"
                disabled={
                  !values.name || !values.email || !values.password || errors.confirmPasswordErr
                }
                className="btn btn-primary"
              >
                Register
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
