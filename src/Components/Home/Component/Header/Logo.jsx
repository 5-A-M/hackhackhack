import React from 'react'
import "./Logo.sass"

const Logo = (props) => {
  return (
    <div className="logo">
        <img src={props?.logo} alt={props?.alt} className="img-logo" />
    </div>
  )
}

export default Logo