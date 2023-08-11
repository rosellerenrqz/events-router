import { redirect } from "react-router-dom";

export const getAuthToken = () => {
  const token = localStorage.getItem("token"); //from the set item in AuthenticationPage
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};

//redirects user if user access url that needs token
export const checkAuthToken = () => {
  const token = getAuthToken();

  if (!token) {
    return redirect("/auth");
  }

  return null;
};
