import React, { Fragment } from "react";
import { Helmet } from "react-helmet-async";
import ChooseLobby from "./Component/ChooseDealer/ChooseLobby";
import HeaderIndex from "./Component/Header/HeaderIndex";

const HomeIndex = (props) => {
  return (
    <Fragment>
      <Helmet>
        <title>Home</title>
      </Helmet>
      <HeaderIndex />
      <ChooseLobby />
    </Fragment>
  );
};

export default HomeIndex;
