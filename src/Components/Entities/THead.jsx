import React from "react";

const THead = ({ children, className }) => {
  return (
    <thead className={className || ""} style={{ width: "100%" }}>
      {children}
    </thead>
  );
};

export default THead;
