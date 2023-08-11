import React, { useEffect } from "react";
import { Outlet, useLoaderData, useSubmit } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";
import { getTokenDuration } from "../util/auth";

const Root = () => {
  const token = useLoaderData();

  //getting data of the Form in Main Navigation logout form
  const submit = useSubmit();

  useEffect(() => {
    if (!token) {
      return;
    }

    if (token === "EXPIRED") {
      submit(null, { action: "/logout", method: "post" }); //logout action
      return;
    }

    const tokenDuration = getTokenDuration();
    console.log(tokenDuration);

    //start to process logout once timeout ends, null = no data to submit
    setTimeout(() => {
      submit(null, { action: "/logout", method: "post" });
    }, tokenDuration); //1hr, 60minutes, 60seconds, 1kms
  }, [token, submit]);

  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Root;
