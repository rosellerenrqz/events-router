export const getAuthToken = () => {
  const token = localStorage.getItem("token"); //from the set item in AuthenticationPage
  return token;
};

export const tokenLoader = () => {
  return getAuthToken();
};
