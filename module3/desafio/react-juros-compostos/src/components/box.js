import React from "react";

export default function Box({ children }) {
  return (
    <div
      style={{ margin: "5px" }}
      /*style={{
        border: "1px solid black",
        borderRadius: "4px",
        width: "90px",
        height: "90px",
        margin: "5px"
      }}*/
    >
      {children}
    </div>
  );
}
