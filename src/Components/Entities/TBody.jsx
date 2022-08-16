import React from 'react'

const TBody = ({children, className}) => {
  return (
    <tbody className={className} style={{width: "100%"}}>
        {children}
    </tbody>
  )
}

export default TBody