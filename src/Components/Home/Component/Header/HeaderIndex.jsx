import React from 'react'
import Authentication from './Authentication'
import Logo from './Logo'
import "./HeaderIndex.sass"
import LoggedIn from './LoggedIn'

const HeaderIndex = () => {
  
  return (
    <div className="header">
      <Logo logo={"https://hackbcr.net/img/v2/logo.png"} />
      {
        sessionStorage?.getItem("uid")?.length > 0 ? <LoggedIn /> :
        <Authentication />
      }
    </div>
  ) 
}

export default HeaderIndex