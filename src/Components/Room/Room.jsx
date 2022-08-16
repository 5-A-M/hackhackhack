import axios from "axios";
import React, { Fragment, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { SERVER_URL } from "../../config/config";
import HeaderIndex from "../Home/Component/Header/HeaderIndex";
import Formular from "../Home/Component/IntoExchange/Formular";
import Predict from "./Predict";
import Wrapper from "./Wrapper";
import { BrowserView, isBrowser } from "react-device-detect";
import "./style.sass";

const Room = (props) => {
  // eslint-disable-next-line
  const [searchParams, setSearchParams] = useSearchParams();
  const [idFormular, setIdFormular]= useState(()=> "")
  // eslint-disable-next-line
  const [table, setTable] = useState(() => {});
  const [formular, setFormular] = useState(() => {});
  const [callAgain, setCallAgain]= useState(()=> false)
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `${SERVER_URL}/api/v1/get/table/lobby`,
        method: "get",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          id_lobby: searchParams.get("id_lobby"),
        },
        responseType: "json",
      });
      const result = await res.data;
      setTable(
        () =>
          result.result.filter(
            (item) =>
              parseInt(item.id) === parseInt(searchParams.get("tableId"))
          )[0]
      );
    })();
  }, [searchParams, callAgain]);
  useEffect(() => {
    (async () => {
      const res = await axios({
        url: `${SERVER_URL}/api/v1/get/formular/lobby`,
        method: "get",
        headers: {
          "Access-Control-Allow-Origin": "*",
        },
        params: {
          id_lobby: searchParams.get("id_lobby"),
        },
        responseType: "json",
      });
      const result = await res.data;
      setFormular(() => result);
    })();
  }, [searchParams]);
  return (
    <Fragment>
      <HeaderIndex />
      <Wrapper>
        {isBrowser === true && (
          <BrowserView className="djkdklkslaska" style={{ width: 200 }}>
            <Formular setIdFormular={setIdFormular} {...formular} />
          </BrowserView>
        )}
        <Predict setCallAgain={setCallAgain} resultFormular={formular?.result?.filter(item=> parseInt(item.id) === parseInt(idFormular))} idFormular={idFormular} {...table} />
      </Wrapper>
    </Fragment>
  );
};

export default Room;
