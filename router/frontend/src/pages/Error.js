import React from "react";
import { useRouteError } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import classes from "./Error.module.css";

const Error = () => {
  const error = useRouteError();
  let title = "An error occured!";
  let message = "We could not find this page.";

  if (error.status === 500) {
    message = error.data.message;
  }

  if (error.status === 404) {
    title = "Not Found.";
    message = "Fail to find resource of the page.";
  }

  return (
    <>
      <MainNavigation />
      <div className={classes.error}>
        <h1>{title}</h1>
      </div>
      <p style={{ textAlign: "center" }}>{message}</p>
    </>
  );
};

export default Error;
