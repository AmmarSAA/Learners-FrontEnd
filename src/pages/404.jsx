/************************
 * File Name: 404.jsx  	*
 * Author: Ammar S.A.A 	*
 * Output: 404 Error   	*
 ***********************/

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsExclamationCircle, BsHouse } from "react-icons/bs";
import LoginForm from "../components/LoginForm";
import SignupForm from "../components/SignUpForm";
import { FcIdea } from "react-icons/fc";
import { LoginContext } from '../Context/Login-Context/login-context';

const NotFoundPage = () => {
  const { state } = useContext(LoginContext);

  return (
    <div className="d-flex flex-column justify-content-center align-items-center vh-100">
      <BsExclamationCircle size={80} color="#dc3545" />
      {state.token ? (
        <h1 className="mt-4">Oops! Page Not Found</h1>
      ) : (
        <h1 className="mt-4">Oops! Sign In First</h1>
      )}
      <p className="text-center">
        The page you are looking for does not exist or is private.
      </p>
      {/* <div className="alert alert-primary text-center p-0 px-3 pt-2">
        <FcIdea />
        <p className="text-center text-primary small">Tip: Try Signing In.</p>
      </div> */}
      <div className="row col-3 p-2">
        <Link
          to="/"
          type="button"
          className="btn custom-button d-flex align-items-center gap-2 btn btn-light"
        >
          <BsHouse className="text-light navbar-icon text-white" />
          <span className="d-none d-lg-inline text-white"> Home</span>
        </Link>
      </div>
      <div className="row col-3 p-2">
        <LoginForm />
      </div>
      <div className="row col-3 p-2">
        <SignupForm />
      </div>
    </div>
  );
};

export default NotFoundPage;
