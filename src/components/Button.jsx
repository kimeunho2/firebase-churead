import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'






const Button = ({type, text, onClick, className, src,}) => {

  
  const handleClick = () => {
    onClick()
  }
  
  return (
    <button type={type} className={`w-96 border mx-19 ${className}`} onClick={onClick}><img src={src} className='loginButton-Img'/><span>{text}</span></button>
  )
}

export default Button