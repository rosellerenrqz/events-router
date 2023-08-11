import React from "react";
import AuthForm from "../components/AuthForm";
import { json, redirect } from "react-router-dom";

const Authentication = () => {
  return <AuthForm />;
};

export default Authentication;

export const action = async ({ request }) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get("mode") || "login";
  console.log(searchParams, "searchparams");
  console.log(mode, "mode");

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  console.log("unsupportedmode");

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  console.log(data, "data");
  console.log(authData, "authdata");

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  console.log(response, "response");
  console.log("stop");

  if (response.status === 422 || response.status === 401) {
    return response;
  }
  console.log("responsestatus");

  if (!response.ok) {
    throw json({ message: "Could not authenticate User" }, { status: 500 });
  }

  console.log("response got okay");

  return redirect("/");
};
