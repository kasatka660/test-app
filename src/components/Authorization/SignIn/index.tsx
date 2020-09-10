import * as React from "react";
import "./../Authorization.scss";
import { Formik } from "formik";
import { Link, useHistory } from "react-router-dom";
import auth from "../../../utils/auth";
import { useState } from "react";

interface SignInFormValues {
  email?: string;
  password?: string;
}

const SignIn: React.FC = () => {
  const history = useHistory();
  const [submitButtonActive, setButtonToActive] = useState<boolean>(false);
  const initialValues: SignInFormValues = { email: "", password: "" };

  return (
    <div className="AuthFormWrapper">
      <div className="AuthForm">
        <h3 className="AuthFormTitle">Sign In</h3>
        <Formik
          initialValues={initialValues}
          validate={(values) => {
            const errors: SignInFormValues = {};
            if (!values.email) {
              errors.email = "Required";
            } else if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = "Invalid email address";
            }
            if (!values.password) {
              errors.password = "Required";
            }
            if (!!Object.values(errors).length) {
              return errors;
            } else {
              setButtonToActive(true);
            }
          }}
          onSubmit={(values, { setSubmitting }) => {
            auth.authenticate();
            history.push("/intro");
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
                disabled={isSubmitting || !submitButtonActive}
              >
                Sign-In
              </button>
            </form>
          )}
        </Formik>
      </div>
      <p className="TextRight">
        Not registered?{" "}
        <Link className="TextStandardSize" to="/signup">
          Sign up
        </Link>
      </p>
    </div>
  );
};

export default SignIn;
