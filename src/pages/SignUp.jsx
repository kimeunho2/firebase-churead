import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { auth } from "../firebase";

const SignUp = () => {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errrorMessage, setErrrorMessage] = useState(""); //에러 메시지 관리
    const [isLoading, setIsLoading] = useState(false); // 로딩 메시지 관리

    const navigate = useNavigate();
  

    const handleInputChange = (value, placeholder) => {


      if (placeholder === "name") {
        setName(value)
      } else if (
        placeholder === "Email") {
          setEmail(value)
        }
       else {setPassword(value)
      
      };
    }


    const accession = async (event) => {
      event.preventDefault();
      // navigate('/');
     
      if (!name || !email || !password || isLoading) return;

      setErrrorMessage("")





      console.log("name", name);
      console.log("email", email);
      console.log("password", password);

      setIsLoading(true);

     

      try {
        const credential = await createUserWithEmailAndPassword(auth, email, password)

        console.log(credential);

        navigate('/homelogin');

      await updateProfile(credential.user, {displayName : name});
        
        

      } catch (error) {
        console.error(error)
        setErrrorMessage(error.message)
      } finally {     

      setIsLoading(false);      
      }
    };


  return (
    <div className='loginPage'>
    <img src="/images/logo 1.svg" alt="Logo" className='logo' />
    <p className='login-main-text'>Churead에서 소통해보세요</p>
    <form className='form'>
    <InputField type="Name" placeholder="name" onChange={handleInputChange} />
    <InputField type="email" placeholder="Email" onChange={handleInputChange}/>
    <InputField type="Password" placeholder="Password" onChange={handleInputChange}/>
    {errrorMessage && <p className='text-red-700'>{errrorMessage}</p>}
    <Button text={isLoading ? "Loading..." : "Create Account"} onClick={accession} className="loginButton" />
    </form>
    <p className='Account-Text'>계정이 있신가요?<Link to="/Login" className='Account-Link'> 로그인</Link></p>
    <p className='or'>or</p>
    <Button src="/images/google.svg" type="button" text="Continue wiuth googl >" onClick={accession} className="GoogleLogin"/>
    </div>
  )
}

export default SignUp