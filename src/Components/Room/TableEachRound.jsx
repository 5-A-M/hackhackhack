import React from "react";
import Table from "../Entities/Table";
import TBody from "../Entities/TBody";
import TD from "../Entities/TD";
import THead from "../Entities/THead";
import TR from "../Entities/TR";
import { InnerTable } from "./Predict";

const TableEachRound = (props) => {
  return (
    <InnerTable className="ajksajskldjaklsdsas">
      <Table className={"skalsklafadsa"}>
        <THead className={"dsklkalskfafdsa"}>
          <TR className="sajshajkshajsasas">
            <TD className="akslskfdjkasfsd">Vòng</TD>
            <TD className="akslskfdjkasfsd">Tay gấp lose</TD>
            <TD className="akslskfdjkasfsd">Kết quả</TD>
          </TR>
        </THead>
        <TBody className={"aiejaislhjdlsdas"}>
          <TR className="sajshajkshajsasas">
            <TD className="akslskfdjkasfsd">15</TD>
            <TD className="akslskfdjkasfsd">1</TD>
            <TD className="akslskfdjkasfsd dhkjsdhkjnasjkals">win</TD>
          </TR>
          <TR className="sajshajkshajsasas">
            <TD className="akslskfdjkasfsd">16</TD>
            <TD className="akslskfdjkasfsd">1</TD>
            <TD className="akslskfdjkasfsd dhkjsdhkjnasjkals">win</TD>
          </TR>
          <TR className="sajshajkshajsasas">
            <TD className="akslskfdjkasfsd">17</TD>
            <TD className="akslskfdjkasfsd">1</TD>
            <TD className="akslskfdjkasfsd dhkjsdhkjnasjkals">win</TD>
          </TR>
        </TBody>
      </Table>
    </InnerTable>
  );
};

export default TableEachRound;
