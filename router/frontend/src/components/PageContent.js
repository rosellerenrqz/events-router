import React from "react";

const PageContent = ({ title, children }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "red" }}>{title}</h1>
      {children}
    </div>
  );
};

export default PageContent;
