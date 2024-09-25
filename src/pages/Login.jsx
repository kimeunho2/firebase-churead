import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'

/**
 * 1. 로그인, 구글 로그인 버튼 클릭하면 로그인 함수가 실행 됨 
 * 2. 로그인 버튼을 클릭할 때의 콘솔 로그 내용과 구글 로그인 버튼 클릭할 때 콘솔 로그 내용을 다르게 해야 됨
*/




  const Login = () => {
    // const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleInputChange = (data, placeholder) => {
  
      if (placeholder === "Email") {
        setEmail(data)
      } else {
        setPassword(data)
      };


      

    }
  
    const handleClick = () => {
  
   
      
      console.log("email", email);
      console.log("password", password);
      
    
      // navigate('/');
    };
  
  return (
    <div className='loginPage '>
    <img src="/images/logo 1.svg" alt="Logo" className='logo' />
    <p className='login-main-text'>Churead에서 소통해보세요</p>
    <form className='form'>
    <InputField type="email" placeholder="Email" onChange={handleInputChange}/>
    <InputField type="Password" placeholder="Password" onChange={handleInputChange}/>
    <Button type={"submit"} text="Login" onClick={handleClick} className="loginButton"/>
    </form>
    <p className='Account-Text'>계정이 없으신가요?<Link to="/Sign-up" className='Account-Link'> 가입하기</Link></p>
    <p className='or'>or</p>
    <Button type={"button"} src="/images/google.svg" text="Continue with google >" onClick={handleClick} className="GoogleLogin"/>
    


    {/* <button type='button' onClick={goToHome}>Home화면으로 이동</button> */}
    {/* <Link to={'/'}>Home화면으로 이동</Link> */}
  

    </div>
  );
}

export default Login