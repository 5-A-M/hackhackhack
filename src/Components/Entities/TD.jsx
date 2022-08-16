import React from "react";

const TD = ({ children, className }) => {
  return <td className={className || ""}>{children}</td>;
};

export default TD;
