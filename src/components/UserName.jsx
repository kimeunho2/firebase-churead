import React from 'react'

const UserName = ({userName, className}) => {
  return (
    <p className={className}>{userName}</p>
  )
}

export default UserName