import axios from "axios";
import { ErrorMessage, Field, Formik, Form } from "formik";
import React from "react";
import { NavLink } from "react-router-dom";
import * as YUP from "yup";
import "./css/register.css";

const schema = YUP.object().shape({
  name: YUP.string().required("Please enter Name"),
  email: YUP.string().email().required("Please Enter your Email"),
  password: YUP.string()
    .min(4, "Password should be minimum 4 characters")
    .required("Enter Password"),
});

export default function Register() {
  const createAccount = async (values) => {
    try {
      const response = await axios.post(
        "https://satish-login.herokuapp.com/users/register",
        {
          name: values.name,
          email: values.email,
          password: values.password,
        }
      );
      console.log(response);
      alert("User Registered Successfully");
    } catch (err) {
      alert("Email-id already exists");
      console.log(err);
    }
  };
  return (
    <div className="card-container d-flex justify-content-center login_content ">
      <div className="login">
        <div className="">
          <Formik
            initialValues={{
              name: "",
              email: "",
              password: "",
            }}
            validationSchema={schema}
            onSubmit={(values, { resetForm }) => {
              createAccount(values);
              resetForm();
            }}
          >
            {() => {
              return (
                <Form className="d-flex flex-column">
                  {/* name */}
                  <div className="mb-3">
                    <label>Name</label>
                    <Field
                      className="form-control register_form"
                      type="text"
                      name="name"
                      component="input"
                      placeHolder="Name"
                      style={{
                        backgroundColor: "#060d20",
                        border: "1px solid rgb(38, 83, 79)",
                        color: "rgb(235, 226, 226)",
                      }}
                    />
                    <div>
                      <ErrorMessage className="text-danger" name="name" />
                    </div>
                  </div>

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
                        border: "1px solid rgb(38, 83, 79)",
                        color: "rgb(235, 226, 226)",
                      }}
                    />
                    <div>
                      <ErrorMessage name="email" />
                    </div>
                  </div>

                  {/* password */}
                  <div className="mb-3">
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
                  <div className="mt-2 d-flex justify-content-between">
                    <button
                      type="submit"
                      className="btn btn-primary button"
                      style={{
                        backgroundColor: "rgb(18, 126, 115)",
                        border: "none",
                      }}
                    >
                      SIGNUP
                    </button>
                  </div>
                  <NavLink style={{ color: "rgb(235, 226, 226)" }} to="/login">
                    Go to Login
                  </NavLink>
                </Form>
              );
            }}
          </Formik>
        </div>
      </div>
    </div>
  );
}
