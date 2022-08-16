import React, { memo, useEffect, useState } from "react";
import Div from "../Entities/Div";
import PBT from "./PBT";
import ResultBet from "./ResultBet";
import Stats from "./Stats";
import TableEachRound from "./TableEachRound";
import TypeBet from "./TypeBet";
import { useLocation } from "react-router-dom"

const Predict = (props) => {
  const location= useLocation()
  return (
    <div
      className="sjdasjasjasasas"
      style={{
        width: "calc(100% - 200px)",
        display: "flex",
        justifyContent: "center",
        flexWrap: "wrap",
      }}
    >
      <Table1 {...props} rate={location?.state?.rate || "Đang tính toán"} />
      <Table2 {...props} rate={location?.state?.rate || "Đang tính toán"} />
    </div>
  );
};

export default Predict;

export const Table1 = (props) => {
  const [valueString, setValueString] = useState(() => "");
  useEffect(() => {
    setValueString(() =>
      props?.resultFormular?.[0]?.valueString.replaceAll(",", "")
    );
  }, [props]);
  return (
    <div
      className="dhskujhjkdfhiudasasas"
      style={{ flex: "1 1 0", width: "50%", padding: 5 }}
    >
      <InnerTable>
        <Header text={`Bàn ${props.name}`} {...props} />
        <InnerTable className="hdsjkhfjkdhajksasds">
          <PercentWin text1={"Tỉ lệ chiến thắng"} text2={props.rate + "%"} />
          <PercentWin
            text1={"Dự đoán ván mới"}
            text2={
              <TypeBet
                className="djkasdhakjshakskls"
                className2={`djkasdhakjshakskls jfklsdejkleaoiawawawa ${
                  valueString?.[props?.results?.length]?.toLowerCase() === "p"
                    ? "dsdjajdhskdhjkeewaw"
                    : ""
                } ${
                  valueString?.[props?.results?.length]?.toLowerCase() === "b"
                    ? "reroiewjsdasdasas"
                    : ""
                } ${
                  valueString?.[props?.results?.length]?.toLowerCase() === "t"
                    ? "tiroaklsklaskajkadsa"
                    : ""
                }`}
                predict={valueString?.[props?.results?.length]}
              />
            }
          />
        </InnerTable>
        <MainPredict setCallAgain={props.setCallAgain} {...props} />
        <ResultBet {...props} />
        <TableEachRound />
        <Stats />
      </InnerTable>
    </div>
  );
};

const Header = (props) => {
  return (
    <div
      className="dsjklasjlkjlkdsasdas"
      style={{ height: 50, width: "100%", padding: 5 }}
    >
      <Div className="fjklsajksljasasa" onClick={() => {}} text={props.text} />
    </div>
  );
};

const PercentWin = (props) => {
  return (
    <div className="djsklasjjfdkldjsaksas" style={{ width: "50%", padding: 5 }}>
      <InnerTable className="jklsajsijasasdsdaws">
        <Div
          className="fdhkjsahkjashjas"
          onClick={() => {}}
          text={props.text1}
        />
        <Div
          className="ijlasjlaksjaklsj"
          onClick={() => {}}
          text={props.text2}
        />
      </InnerTable>
    </div>
  );
};

const MainPredict = (props) => {
  const fake_sleep = (ms) => new Promise((rel) => setTimeout(rel, ms));
  const [waitPredict, setWaitPredict] = useState(() => "");
  const [countDown, setCountDown] = useState(() => 30);
  useEffect(() => {
    const interval = setInterval(async () => {
      setCountDown((prev) => parseInt(prev - 1));
      if (parseInt(countDown) <= 0) {
        setCountDown((prev) => 0);
        setWaitPredict(() => "Chờ một chút");
        await fake_sleep(5000);
        props.setCallAgain((prev) => !prev);
        setWaitPredict(() => "");
        setCountDown(() => 30);
      }
    }, 1000);
    return () => clearInterval(interval);
    
  }, [countDown, props]);
  return (
    <InnerTable className="jklsajsijasasdsdaws">
      <Div
        className="djskdjaksjaadsada"
        onClick={() => {}}
        text={waitPredict.length > 0 ? waitPredict : countDown}
      />
      <InnerTable className="sghahsjakshkjassasasaas dssdfdsdasasassaas">
        {Array.from(Array(72).keys()).map((item, key) => (
          <TypeBet
            index={item}
            className="dsjkajskjskalawas"
            className2="jhsgdfhjsdgjhashgajsas"
            key={key}
          />
        ))}
        <div
          className="fddsshjkidsjdklsda"
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: 0,
            left: 0,
            zIndex: 2,
          }}
        >
          {props?.results?.map((item, key) => (
            <div
              key={key}
              className="dhjkkladskladkasdsasa"
              style={{ width: 28, height: 28, padding: 1 }}
            >
              {item === "P" && <PBT background={"blue"} text={"P"} />}
              {item === "B" && <PBT background={"red"} text={"B"} />}
              {item === "T" && <PBT background={"green"} text={"T"} />}
            </div>
          ))}
        </div>
      </InnerTable>
    </InnerTable>
  );
};
//
//
//

export const Table2 = (props) => {
  return (
    <div
      className="djsdsahjhfjkfhjsdasas"
      style={{
        flex: "1 1 0",
        padding: 5,
        gap: 10,
        display: "flex",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <InnerTable>
        <Header text={"Đồ thị"} />
        <MainChart {...props} />
      </InnerTable>
      {/*  */}
      <StatsBet {...props} />
    </div>
  );
};

const MainChart = (props) => {
  return (
    <div className="sjaksjakldjksasa" style={{ width: "100%", padding: 10 }}>
      <TitleChart />
      <MainMainChart {...props} />
      <FooterChart />
    </div>
  );
};

const TitleChart = (props) => {
  return (
    <div
      className="sashkjashjkashaj"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "12px 0",
      }}
    >
      <p>Đồ thị hiển thị thống kê kết quả dự đoán</p>
    </div>
  );
};

const StatsBet = (props) => {
  return (
    <div
      className="dkaldjsakjasas"
      style={{
        width: "100%",
        borderRadius: 10,
        border: "1px solid #e7e7ee",
        padding: 10,
      }}
    >
      <InnerTable className={"fkldhjaklhdsjkaldas"}>
        {/* dealer */}
        <Percent
          className={"fdhnjkdsjkdskljjkdas"}
          type={`Nhà cái ${Math.round(
            (props?.results?.filter((item) => item === "B")?.length /
              props?.results?.length) *
              100
          )}%`}
          amount={props?.results?.filter((item) => item === "B")?.length}
          percent={`${Math.round(
            (props?.results?.filter((item) => item === "B")?.length /
              props?.results?.length) *
              100
          )}%`}
          background={"red"}
        />
        <Percent
          className={"fankjhdsjkdskjlsdjkl"}
          type={`Người chơi ${Math.round(
            (props?.results?.filter((item) => item === "P")?.length /
              props?.results?.length) *
              100
          )}%`}
          amount={props?.results?.filter((item) => item === "P")?.length}
          percent={`${Math.round(
            (props?.results?.filter((item) => item === "P")?.length /
              props?.results?.length) *
              100
          )}%`}
          background={"blue"}
        />
        <Percent
          className={"huieaikjhsdjkhdajass"}
          type={`Hòa ${Math.round(
            (props?.results?.filter((item) => item === "T")?.length /
              props?.results?.length) *
              100
          )}%`}
          amount={props?.results?.filter((item) => item === "T")?.length}
          percent={`${Math.round(
            (props?.results?.filter((item) => item === "T")?.length /
              props?.results?.length) *
              100
          )}%`}
          background={"green"}
        />
      </InnerTable>
    </div>
  );
};

const Percent = (props) => {
  return (
    <div
      className="fkjdhjkkladakljas"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        gap: 5,
      }}
    >
      <A1 {...props} />
      <A2 {...props} />
    </div>
  );
};

const A1 = (props) => {
  return (
    <div
      className="sajskldjkldjsklsasa"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Div className={props.className} text={props.type} onClick={() => {}} />
      <Div
        className="dvnjldfjkhahdjksadas"
        text={props.amount}
        onClick={() => {}}
      />
    </div>
  );
};

const A2 = (props) => {
  return (
    <div
      className="dsjhkshjvdlkjdsljkfsdj"
      style={{
        width: "100%",
        position: "relative",
        height: 20,
        overflow: "hidden",
        borderRadius: 80,
      }}
    >
      <PercentBar {...props} />
    </div>
  );
};

const PercentBar = (props) => {
  return (
    <div
      className="djfsdjkldhsjaksaklas"
      style={{
        width: props.percent,
        position: "absolute",
        top: 0,
        left: 0,
        height: "100%",
        zIndex: 3,
        background: props.background,
      }}
    ></div>
  );
};

//
//

const MainMainChart = memo((props) => {
  // const [startPoint, setStartPoint] = useState(() => 1020);
  const [P, setP] = useState(() => []);
  const [B, setB] = useState(() => []);
  const [T, setT] = useState(() => []);
  useEffect(() => {
    if(props?.results?.length > 0) {
      let a= 1021
      const p= []
      const b= []
      const t= []
      props?.results?.map((item, key)=> {
        if(parseInt(key) === 0) {
          if(item.toLowerCase() === "p") {
            p.push(a)
          }
          else if(item.toLowerCase() === "b") {
            b.push(a)
          }
          else if(item.toLowerCase() === "t") {
            t.push(a)
          }
        }
        else {
          if(item.toLowerCase() === "p") {
            a+= 61
            p.push(a)
          }
          else if(item.toLowerCase() === "b") {
            a-= 59
            b.push(a)
          }
          else if(item.toLowerCase() === "t") {
            a+= 1
            t.push(a)
          }
        }
        setP(()=> p)
        setB(()=> b)
        setT(()=> t)
        return 0
      })
    }
  }, [props.results]);
  return (
    <div
      className="dsjkhjksahjkladas"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <ul
        className="sjkldjaksljkladsda"
        style={{
          minWidth: 600,
          maxWidth: 600,
          height: 360,
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {Array.from(Array(2160).keys()).map((item, key) => (
          <li
            className={"ajkshasjkassaas"}
            key={key}
            style={{
              width: 10,
              height: 10,
              listStyleType: "none",
              border: "1px solid #000",
              borderCollapse: "collapse",
              borderBottomColor:
                parseInt(key) + 1 <= 1080 && parseInt(key) + 1 > 1020
                  ? "red"
                  : "#000",
              borderBottomWidth:
                parseInt(key) + 1 <= 1080 && parseInt(key) + 1 > 1020
                  ? "3px"
                  : "1px",
              background: P.includes(parseInt(key) + 1) ? "blue" : B.includes(parseInt(key) + 1) ? "red" : T.includes(parseInt(key) + 1) ? "green" : "#fff",
            }}
          ></li>
        ))}
      </ul>
    </div>
  );
});

const FooterChart = (props) => {
  return (
    <div
      className="djkalsajksjdkadsa"
      style={{
        width: "100%",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        margin: "16px 0",
      }}
    >
      <Div
        className="dkalsaklssasasa"
        onClick={() => {}}
        text={"Khách hàng có thể xem đồ thị để biết các kỹ thuật đặt cược"}
      />
    </div>
  );
};

// common

export const InnerTable = memo(({ children, className }) => {
  return (
    <div
      className={`djaklsjahisjasklasas ${className || ""}`}
      style={{ width: "100%" }}
    >
      {children}
    </div>
  );
});
