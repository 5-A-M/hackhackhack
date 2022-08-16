import React from 'react'
import Table from '../Entities/Table'
import TBody from '../Entities/TBody'
import TD from '../Entities/TD'
import THead from '../Entities/THead'
import TR from '../Entities/TR'
import { InnerTable } from './Predict'

const Stats = (props) => {
  return (
    <div className="ajskajklsfjsasassa">
        <InnerTable className="ajksajskldjaklsdsas">
            <Table className={"skalsklafadsa"}>
                <THead className={"dsklkalskfafdsa"}>
                    <TR className="sajshajkshajsasas">
                        <TD className="akslskfdjkasfsd">Tổng kết quả</TD>
                        <TD className="akslskfdjkasfsd">Tổng ván thắng</TD>
                        <TD className="akslskfdjkasfsd">Tổng ván thua</TD>
                    </TR>
                </THead>
                <TBody className={"aiejaislhjdlsdas"}>
                    <TR className="sajshajkshajsasas">
                        <TD className="akslskfdjkasfsd">18</TD>
                        <TD className="akslskfdjkasfsd">17</TD>
                        <TD className="akslskfdjkasfsd">1</TD>
                    </TR>
                </TBody>
            </Table>
        </InnerTable>
    </div>
  )
}

export default Stats