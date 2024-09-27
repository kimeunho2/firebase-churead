import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import InputField from '../components/InputField'
import Button from '../components/Button'
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from 'firebase/auth'
import { auth } from '../firebase'

/**
 * 1. 로그인, 구글 로그인 버튼 클릭하면 로그인 함수가 실행 됨 
 * 2. 로그인 버튼을 클릭할 때의 콘솔 로그 내용과 구글 로그인 버튼 클릭할 때 콘솔 로그 내용을 다르게 해야 됨
*/




  const Login = () => {
    const navigate = useNavigate(); //로그인 버튼 클릭시 홈 로그인으로 이동


    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const [errrorMessage, setErrrorMessage] = useState(""); //에러 메시지 관리
    const [isLoading, setIsLoading] = useState(false); // 로딩 메시지 관리

    const handleInputChange = (data, placeholder) => {
  
      if (placeholder === "Email") {
        setEmail(data)
      } else {
        setPassword(data)
      };


      

    }
  
    // 로그인 버튼 클릭시 작동
    const handleClick = async (event) => {
      event.preventDefault();
   
      
      console.log("email", email);
      console.log("password", password);
      
      // 로그인 기능 구현

      // 사용자가 이메일, 비밀번호 입력 안 하면 실행 안됨
      if (!email || !password ||isLoading) return;



      setIsLoading(true);
      try {
      // 비동기 처리 성공시
        const credential = await signInWithEmailAndPassword(auth, email, password);
        console.log(credential);

        navigate('/homelogin');

      } catch(error) {
         // 비동기처리 실패시
        setErrrorMessage(error.message)
     



      } finally {
        setIsLoading(false);


      }

    };

    //구글 로그인 버튼 클릭시 작동
    const handleGooglelLogin = async () => {
      
      // 구글 뭐 하는거 
      const provider = new GoogleAuthProvider();

      try {
        await signInWithPopup(auth, provider);
        navigate('/homelogin');

      } catch (error) {
        console.log(error);
      }
    }
  
  return (
    <div className='loginPage '>
    <img src="/images/logo 1.svg" alt="Logo" className='logo' />
    <p className='login-main-text'>Churead에서 소통해보세요</p>
    <form className='form'>
    <InputField type="email" placeholder="Email" onChange={handleInputChange}/>
    <InputField type="Password" placeholder="Password" onChange={handleInputChange}/>
    {errrorMessage && <p className='text-red-700'>{errrorMessage}</p>}
    <Button type={"submit"} text={isLoading ? "loding..." : "Login"} onClick={handleClick} className="loginButton"/>
    </form>
    <p className='Account-Text'>계정이 없으신가요?<Link to="/Sign-up" className='Account-Link'> 가입하기</Link></p>
    <p className='or'>or</p>
    <Button type={"button"} src="/images/google.svg" text="Continue with google >" onClick={handleGooglelLogin} className="GoogleLogin"/>
    


    {/* <button type='button' onClick={goToHome}>Home화면으로 이동</button> */}
    {/* <Link to={'/'}>Home화면으로 이동</Link> */}
  

    </div>
  );
}

export default Login