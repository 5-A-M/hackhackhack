import React from 'react'

const Label = (props) => {
  return (
    <div className={props.className}>
        {props.text}
    </div>
  )
}

export default Label