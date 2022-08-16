import React from 'react'
import "./Authentication.sass"
import Login from './Login'
import Signup from './Signup'

const Authentication = (props) => {
    
  return (
    <div className="authentication">
      <Signup />
      <Login />  
    </div>
  )
}

export default Authentication