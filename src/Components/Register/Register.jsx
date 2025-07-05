import React, { useState } from "react";
import { useFormik } from "formik";
import axios from "axios";
import { useNavigate } from "react-router";
import * as Yup from "yup";

export default function Register() {


  const [errorApi, seterrorApi] = useState(null);
  const [isLoading, setisLoading] = useState(false);
  let navigate = useNavigate();

  async function handleRegister(values) {
    setisLoading(true);
    try {
      const res = await axios.post(
        `https://ecommerce.routemisr.com/api/v1/auth/signup`,
        values
      );
      console.log(res);
      setToken(res.data.token);
      localStorage.setItem("token", res.data.token);
      navigate("/");

    } catch (error) {
      console.log(error.response);
      seterrorApi(error.response?.data?.message || "An error occurred");
    } finally {
      setisLoading(false);
    }
  }

  const validationSchema = Yup.object().shape({
    name: Yup.string()
      .min(3, "name min 3 letters ")
      .max(10, "name max 10 letters")
      .required("name is required"),
    email: Yup.string().email("email is inValid").required("email is required"),
    phone: Yup.string()
      .matches(/^01[0125][0-9]{8}$/, "phone is inValid")
      .required("phone is required"),
    password: Yup.string()
      .matches(
        /^[A-Za-z0-9]{6,10}$/,
        "password include letters and number min 6 and max 10"
      )
      .required("password is required"),
    rePassword: Yup.string()
      .oneOf([Yup.ref("password")], "password and re-password not match")
      .required("re-password is required"),
  });

  const formikRegister = useFormik({
    initialValues: {
      name: "",
      email: "",
      password: "",
      rePassword: "",
      phone: "",
    },
    validationSchema,
    onSubmit: handleRegister,
  });

  return (
    <div className="container">
      <div className="w-50 m-auto my-5">
        {errorApi ? (
          <div className="p-4 my-4 text-sm text-danger rounded bg-red">
            {errorApi}
          </div>
        ) : null}

        <h3 className="text-center">Register Now</h3>
        <form onSubmit={formikRegister.handleSubmit}>
          {/* Name */}
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Full Name
            </label>
            <input
              onChange={formikRegister.handleChange}
              value={formikRegister.values.name}
              onBlur={formikRegister.handleBlur}
              type="text"
              name="name"
              className="form-control"
              id="name"
              placeholder="enter your name"
            />
            {formikRegister.errors.name && formikRegister.touched.name ? (
              <div className="alert alert-danger">
                {formikRegister.errors.name}
              </div>
            ) : null}
          </div>

          {/* Password */}
          <div className="mb-3">
            <label htmlFor="password" className="form-label">
              Password
            </label>
            <input
              onChange={formikRegister.handleChange}
              value={formikRegister.values.password}
              onBlur={formikRegister.handleBlur}
              type="password"
              name="password"
              className="form-control"
              id="password"
              placeholder="enter your password"
            />
            {formikRegister.errors.password &&
              formikRegister.touched.password ? (
              <div className="alert alert-danger">
                {formikRegister.errors.password}
              </div>
            ) : null}
          </div>

          {/* Re-password */}
          <div className="mb-3">
            <label htmlFor="rePassword" className="form-label">
              Re-Password
            </label>
            <input
              onChange={formikRegister.handleChange}
              value={formikRegister.values.rePassword}
              onBlur={formikRegister.handleBlur}
              type="password"
              name="rePassword"
              className="form-control"
              id="rePassword"
              placeholder="enter your re-password"
            />
            {formikRegister.errors.rePassword &&
              formikRegister.touched.rePassword ? (
              <div className="alert alert-danger">
                {formikRegister.errors.rePassword}
              </div>
            ) : null}
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              E-mail
            </label>
            <input
              onChange={formikRegister.handleChange}
              value={formikRegister.values.email}
              onBlur={formikRegister.handleBlur}
              type="email"
              name="email"
              className="form-control"
              id="email"
              placeholder="enter your email"
            />
            {formikRegister.errors.email && formikRegister.touched.email ? (
              <div className="alert alert-danger">
                {formikRegister.errors.email}
              </div>
            ) : null}
          </div>

          {/* Phone */}
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              onChange={formikRegister.handleChange}
              onBlur={formikRegister.handleBlur}
              value={formikRegister.values.phone}
              type="tel"
              name="phone"
              className="form-control"
              id="phone"
              placeholder="enter your phone"
            />
            {formikRegister.errors.phone && formikRegister.touched.phone ? (
              <div className="alert alert-danger">
                {formikRegister.errors.phone}
              </div>
            ) : null}
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              disabled={!formikRegister.isValid || !formikRegister.dirty}
              className="btn btn-primary"
            >
              {isLoading ? (
                <i className="fa-solid fa-spinner fa-spin"></i>
              ) : (
                "Register"
              )}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
