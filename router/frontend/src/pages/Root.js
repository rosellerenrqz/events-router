import React from "react";
import { Outlet, useNavigation } from "react-router-dom";
import MainNavigation from "../components/MainNavigation";

const Root = () => {
  // const navigation = useNavigation();

  return (
    <React.Fragment>
      <MainNavigation />
      <main>
        {/* {navigation.state === "loading" && (
          <p style={{ textAlign: "center" }}>Loading...</p>
        )} */}
        <Outlet />
      </main>
    </React.Fragment>
  );
};

export default Root;
