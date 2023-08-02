import React from "react";
import classes from "./Error.module.css";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  return (
    <>
      <MainNavigation />
      <div className={classes.error}>
        <h1>An error occured!</h1>
        <p>We could not find this page.</p>
      </div>
    </>
  );
};

export default Error;
