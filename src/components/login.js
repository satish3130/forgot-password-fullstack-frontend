import axios from "axios";
import { ErrorMessage, Field, Form, Formik } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
//import { useHistory } from "react-router";
import * as YUP from "yup";
import "../App.css";

// schema
const schema = YUP.object().shape({
  email: YUP.string().required("Please enter your email id"),
  password: YUP.string()
    .min(4, "password should be minimum  4 characters")
    .required("please enter your password"),
});

export default function Login() {
  //const history = useHistory();

  const loginAccount = async (values) => {
    try {
      const response = await axios.post(
        "https://satish-login.herokuapp.com/users/login",
        {
          email: values.email,
          password: values.password,
        }
      );
      if (response.status === 200) {
        window.localStorage.setItem("auth-token", response.data.token);
      }
      alert("Login-Success");
      return true;
      //   setInfo("User Login Successfully");
    } catch (err) {
      alert("invalid crendtials");

      //   return false;
    }
  };

  return (
    <div className="d-flex justify-content-center login_content">
      <div>
        <div className="login">
          <Formik
            initialValues={{
              email: "",
              password: "",
            }}
            validationSchema={schema}
            onSubmit={async (values) => {
              loginAccount(values);
              //   if reset is true
              // if (reset) {
              //   history.push("/protected");
              // }
            }}
          >
            {() => {
              return (
                <Form className="mb-3">
                  {/* email */}

                  <div className="mb-3">
                    <label>Email</label>
                    <Field
                      className="form-control"
                      type="text"
                      name="email"
                      component="input"
                      placeHolder="Email"
                      style={{
                        backgroundColor: "#060d20",
                        border: "1px solid  rgb(38, 83, 79)",
                        color: "rgb(235, 226, 226)",
                      }}
                    />
                    <div>
                      <ErrorMessage name="email" />
                    </div>
                  </div>

                  {/* password */}
                  <div>
                    <label>Password</label>
                    <Field
                      className="form-control"
                      type="password"
                      name="password"
                      component="input"
                      placeHolder="password"
                      style={{
                        backgroundColor: "#060d20",
                        border: "1px solid rgb(38, 83, 79)",
                        color: "rgb(235, 226, 226)",
                      }}
                    />
                    <div>
                      <ErrorMessage name="password" />
                    </div>
                  </div>
                  <div className="mt-4 d-flex justify-content-center ">
                    <button
                      type="submit"
                      className="btn btn-primary button"
                      style={{
                        backgroundColor: "rgb(18, 126, 115)",
                        color: "rgb(235, 226, 226)",
                        border: "none",
                      }}
                    >
                      LOGIN
                    </button>
                  </div>
                  <div className="mt-3 d-flex justify-content-between">
                    <div>
                      <NavLink
                        style={{ color: "rgb(235, 226, 226)" }}
                        to="/register"
                      >
                        New Here? Register
                      </NavLink>
                    </div>
                  </div>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
