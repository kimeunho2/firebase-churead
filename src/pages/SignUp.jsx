import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // const navigate = useNavigate();
  

    const handleInputChange = (data, placeholder) => {
      if (placeholder === "name") {
        setName(data)
      } else if (
        placeholder === "Email") {
          setEmail(data)
        }
       else {setPassword(data)
      
      };
    }


    const accession = () => {
      // navigate('/');
     
      console.log("name", name);
      console.log("email", email);
      console.log("password", password);
    };


  return (
    <div className='loginPage'>
    <img src="/images/logo 1.svg" alt="Logo" className='logo' />
    <p className='login-main-text'>Churead에서 소통해보세요</p>
    <form className='form'>
    <InputField type="Name" placeholder="name" onChange={handleInputChange} />
    <InputField type="email" placeholder="Email" onChange={handleInputChange}/>
    <InputField type="Password" placeholder="Password" onChange={handleInputChange}/>
    <Button text="Create Account" onClick={accession} className="loginButton" />
    </form>
    <p className='Account-Text'>계정이 있신가요?<Link to="/Login" className='Account-Link'> 로그인</Link></p>
    <p className='or'>or</p>
    <Button src="/images/google.svg" type="button" text="Continue wiuth googl >" onClick={accession} className="GoogleLogin"/>
    </div>
  )
}

export default SignUp