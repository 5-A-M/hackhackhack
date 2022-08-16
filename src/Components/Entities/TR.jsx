import React from 'react'

const TR = ({children, className}) => {
  return (
    <tr className={className || ""}>
        {children}
    </tr>
  )
}

export default TR