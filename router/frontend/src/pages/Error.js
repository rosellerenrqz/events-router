import React from "react";
import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";
import MainNavigation from "../components/MainNavigation";

const Error = () => {
  const error = useRouteError();
  let title = "An error occured!";
  let message = "We could not find this page.";

  if (error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if (error.status === 404) {
    title = "Not Found.";
    message = "Fail to find resource of the page.";
  }

  return (
    <>
      <MainNavigation />
      <PageContent title={title}>
        <p style={{ textAlign: "center" }}>{message}</p>
      </PageContent>
    </>
  );
};

export default Error;
