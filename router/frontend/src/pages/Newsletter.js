import React from "react";
import PageContent from "../components/PageContent";
import NewsletterSignUp from "../components/NewsletterSignUp";

const Newsletter = () => {
  return (
    <PageContent title="Join our awesome newsletter!">
      <NewsletterSignUp />
    </PageContent>
  );
};

export default Newsletter;

export const action = async ({ request }) => {
  const data = await request.formData();
  const email = data.get("email");

  // send to backend newsletter server ...
  console.log(email);
  return { message: "Signup successful!" };
};
