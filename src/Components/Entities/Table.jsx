import React from 'react'

const Table = ({children, className}) => {
  return (
    <table className={className || ""} style={{width: "100%"}}>
      {children}
    </table>
  )
}

export default Table