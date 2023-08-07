import React from "react";

const PageContent = ({ title, children }) => {
  return (
    <div style={{ textAlign: "center" }}>
      <h1 style={{ color: "white", fontSize: "2rem", margin: "2rem 0" }}>
        {title}
      </h1>
      {children}
    </div>
  );
};

export default PageContent;
