import React, { useState } from 'react'

const InputField = ({type, placeholder, onChange}) => {

  const [value, setValue] = useState('');
  
  
  const handleChange = (event) => {


    const {value} = event.target;

    setValue(value);
    onChange(value, placeholder); 

  }

  return (
    <input type={type} placeholder={placeholder} value={value} className="border w-96 Input-Field" 
    onChange={handleChange} /> 
  )
}

export default InputField