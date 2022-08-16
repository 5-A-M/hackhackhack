import React, { useEffect, useState } from 'react'
import Div from '../Entities/Div'
import Wrapper from '../Entities/Wrapper'
import { InnerTable } from './Predict'

const ResultBet = (props) => {
  const [{B, P, T}, setResult]= useState(()=> ({
    B: props.results?.filter(item=> item === "B").length || "_",
    P: props.results?.filter(item=> item === "B").length || "_",
    T: props.results?.filter(item=> item === "B").length || "_"
  }))
  useEffect(()=> {
    setResult(prev=> ({...prev, B: props?.results?.filter(item=> item === "B").length, P: props?.results?.filter(item=> item === "P").length, T: props?.results?.filter(item=> item === "T").length}))
  }, [props])
  return (
    <InnerTable className="djksajskjfkaldsa">
      <Wrapper className="saskajskljfkldasas">
        <Div onClick={()=> {}} className="jaksjklfjadas hujdhgdkj89e" text={`B ${B > 0 ? B : "_"}`} />
        <Div onClick={()=> {}} className="jaksjklfjadas hduaskhakjsh" text={`P ${P > 0 ? P : "_"}`} />
        <Div onClick={()=> {}} className="jaksjklfjadas wauhkajssadr" text={`T ${T > 0 ? T : "_"}`} />
      </Wrapper>
      <Div onClick={()=> {}} className="sajkdhjdksoiresnjk" text={"Số liệu thống kê"} />
    </InnerTable>
  )
}

export default ResultBet