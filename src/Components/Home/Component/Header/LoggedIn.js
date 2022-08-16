import { Button } from '@mui/material'
import React, { useEffect, useState } from 'react'
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

const LoggedIn = (props) => {
  const [coin, setCoin]= useState(()=> sessionStorage.getItem("coin"))
  useEffect(()=> {
    setCoin(()=> sessionStorage.getItem("coin"))
  }, [])
  return (
    <div className="gjkdshjkhjdjhsasa" style={{display: "flex", justifyContent: "center", alignItems: "center", gap: 16}}>
        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}><AttachMoneyIcon color="warning" /> {sessionStorage.getItem("coin")}</div>
        <div>{sessionStorage.getItem("account")}</div>
        <Button onClick={()=> {sessionStorage.clear(); window.location.reload()}} variant={"contained"}>Đăng xuất</Button>
    </div>
  )
}

export default LoggedIn