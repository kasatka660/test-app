import React from "react";
import auth from "../utils/auth";
import { Redirect } from "react-router-dom";

const RequireLogin: React.FC = ({ children }) => {
  if (!auth.isAuthenticated()) {
    return <Redirect to={"signin"} />;
  }
  return <>{children}</>;
};

export default RequireLogin;
