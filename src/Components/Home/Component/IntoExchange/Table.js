import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import _ from "lodash"

const Table = (props) => {
  useEffect(()=> {
    localStorage.setItem("lastname", [1,2,3,4,5,6])
  }, [])
  return (
    <div className="djkldajskljdklsasa" style={{width: "calc(100% - 200px)", padding: 10, display: "flex", flexWrap: "wrap", height: "max-content"}}>
        {
            _.orderBy(props?.result, ["name"], ["asc"]).map((item, key)=> <DetailTable rate={props?.rateWin[parseInt(key)]} key={key} {...item} />)
        }
    </div>
  )
}

const DetailTable= (props)=> {
    return (
        <div className="dsjkdjsadkasjasddsas" style={{width: "50%", padding: 10}}>
            <Link className="fjkljdsaklsjkladsasd" style={{textDecoration: "none", color: "#3a3b3c"}} to={`/room?id_lobby=${props.lobbyId}&tableId=${props.id}`} state={{rate: props.rate}}> 
                <div className="dajlksajkskldjssasasa" style={{width: "100%", height: 100, display: "flex", alignItems: "center", background: "#f2f0f5", cursor: "pointer"}}>
                    <LeftSide {...props} />
                    <RightSide {...props} />
                </div>
            </Link>
        </div>
    )
}

const LeftSide= (props)=> {
    return (
        <div className="dsjkldadjkdjsaaass" style={{display: "flex", alignItems: "center", justifyContent: "center", flex: "1 1 0"}}>
            <div className="djkljaklsjaksas" >
                <img src="" alt="" />
            </div>
            <div>Bàn: {props.name}</div>
        </div>
    )
}

const RightSide= (props)=> {
    return (
        <div className='djkldshjakshjadfadd' style={{display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", gap: 10, flex: "1 1 0"}}>
            <p>Tỉ lệ chiến thắng: <span style={{color: parseInt(props.rate) >= 75 ? "green" : parseInt(props.rate) >= 60 && parseInt(props.rate) < 75 ? "orange" : "red", fontWeight: 600, fontSize: 18}}>{props.rate}</span>%</p>
        </div>
    )
}

export default Table