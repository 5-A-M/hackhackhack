import React from "react";
import { InnerTable } from "./Predict";

const TypeBet = (props) => {
  return (
    <div className={props.className || ""}>
      <InnerTable className="sajkslasjkasdasdsa">
        <div
          className={props.className2 || ""}
          style={{width: "100%", height: "100%", borderRadius: "50%", display: "flex", justifyContent: "center", alignItems: "center", color: "#fff", fontSize: 24, fontWeight: 600, textTransform: "uppercase"}}
        >{props.predict}</div>
      </InnerTable>
    </div>
  );
};

export default TypeBet;
