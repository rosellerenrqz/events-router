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

  if (mode !== "login" && mode !== "signup") {
    throw json({ message: "Unsupported mode." }, { status: 422 });
  }

  const data = await request.formData();
  const authData = {
    email: data.get("email"),
    password: data.get("password"),
  };

  const response = await fetch("http://localhost:8080/" + mode, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
    },
    body: JSON.stringify(authData),
  });

  if (response.status === 422 || response.status === 401) {
    return response;
  }

  if (!response.ok) {
    throw json({ message: "Could not authenticate User" }, { status: 500 });
  }

  const responseData = await response.json();

  const token = responseData.token;
  localStorage.setItem("token", token); //storing in browser api
  // console.log(token);

  const expiration = new Date();
  expiration.setHours(expiration.getHours() + 1); //1 hour
  localStorage.setItem("expiration", expiration.toISOString()); //converts date to isostring

  return redirect("/");
};
