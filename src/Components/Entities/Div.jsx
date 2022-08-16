import React from 'react'

const Div = (props) => {
  return (
    <div onClick={()=> props.onClick} className={props?.className}>{props?.text}</div>
  )
}

export default Div