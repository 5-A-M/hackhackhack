import _ from "lodash";
import React, { useState } from "react";
// import { Link } from "react-router-dom";
// import { chooseTable } from "../../../../docs/chooseTable";

const Formular = (props) => {
  const [selectValue, setSelectValue]= useState(()=> 0)
  return (
    <div style={{ width: "100%", maxWidth: 200 }}>
      <div style={{ textAlign: "center", fontSize: 32 }}>Formular</div>
      {_.orderBy(props?.result, ["type"], ["asc"]).map((item, key) => (
        <ChooseFormular index={parseInt(key) + 1} selectValue={selectValue} setSelectValue={setSelectValue} setIdFormular={props.setIdFormular} setTable={props.setTable} key={key} {...item} />
      ))}
    </div>
  );
};

export default Formular;

const ChooseFormular= (props)=> {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "8px 0",
      }}
    >
      <div onClick={()=> {props.setIdFormular(()=> props.id);props.setSelectValue(()=> parseInt(props?.index))}} className="dshjkfhjdksadjssad" style={{textDecoration: "none", color: "#fff"}}>
        <InnerLink {...props} />
      </div>
    </div>
  )
}

const InnerLink= (props)=> {
  return (
    <div
      style={{
        padding: 10,
        background: parseInt(props.selectValue) === parseInt(props.index) ? "blue" : "#2e89ff",
        color: "#fff",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: 80,
        width: 150,
        cursor: "pointer",
      }}
    >
      {props.name}
  </div>
  )
}