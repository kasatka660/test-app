import * as React from "react";
import "./SignUp.scss";
import { Formik } from "formik";
import ProgressIndicator from "./../../shared/ProgressIndicator";
import { Link } from "react-router-dom";

interface SignUpFormValues {
  fullName?: string;
  email?: string;
  password?: string;
}

const SignUp: React.FC = () => {
  const initialValues: SignUpFormValues = {
    fullName: "",
    email: "",
    password: "",
  };

  return (
    <div className="SigUpFormWrapper">
      <div className="SignUpForm">
        <ProgressIndicator />
        <h3 className="AuthFormTitle">Sign Up</h3>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: SignUpFormValues = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            return errors;
          }}
          onSubmit={(values, { setSubmitting }) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2));
              setSubmitting(false);
            }, 400);
          }}
        >
          {({
            values,
            errors,
            touched,
            handleChange,
            handleBlur,
            handleSubmit,
            isSubmitting,
          }) => (
            <form onSubmit={handleSubmit}>
              <div className="FormGroup">
                <label htmlFor="fullName">Email</label>
                <input
                  id="fullName"
                  type="fullName"
                  name="fullName"
                  placeholder="Jogn Doe"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <span className="InputError">{errors.email}</span>
                )}
              </div>
              <div className="FormGroup">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  name="email"
                  placeholder="user@email.com"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.email}
                />
                {errors.email && touched.email && (
                  <span className="InputError">{errors.email}</span>
                )}
              </div>
              <div className="FormGroup">
                <label htmlFor="password">Password</label>
                <input
                  id="password"
                  type="password"
                  name="password"
                  placeholder="*****************"
                  onChange={handleChange}
                  onBlur={handleBlur}
                  value={values.password}
                />
                {errors.password && touched.password && (
                  <span className="InputError">{errors.password}</span>
                )}
              </div>
              <button
                className="SubmitButton"
                type="submit"
                disabled={isSubmitting}
              >
                Sign-In
              </button>
            </form>
          )}
        </Formik>
      </div>
      <p>
        Already registered?{" "}
        <Link className="TextStandardSize" to="/signin">
          Sign in
        </Link>
      </p>
    </div>
  );
};

export default SignUp;
