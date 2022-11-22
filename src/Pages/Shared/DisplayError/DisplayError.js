import React, { useContext } from "react";
import { Link, useRouteError } from "react-router-dom";
import { AuthContext } from "../../../Contexts/AuthProvider";

const DisplayError = () => {
  const { logOut } = useContext(AuthContext);
  const error = useRouteError();
  return (
    <div className="text-center lg:mt-48">
      <p className="text-red-600 font-bold">SomeThing Went Wrong</p>
      <p className="text-red-400">{error.statusText || error.message}</p>
      <h4 className="text-3xl font-semibold">
        Please{" "}
        <Link to="/">
          <button onClick={logOut} className="btn btn-primary btn-xs">
            LogOut
          </button>
        </Link>{" "}
        and get back soon.
      </h4>
    </div>
  );
};

export default DisplayError;
