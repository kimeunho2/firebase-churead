import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
    
  const getData = () => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(json => console.log(json))


      
  }  
  
  const history = useNavigate()
  
    const login = () => {
        history('/Login')
    };
  
    return (
    <div>
    <h2 className='button'>Home</h2>
    
    <button type='button' onClick={login}>로그인 하기</button>
    <button type='button' onClick={getData}>11</button>
    </div>
  
  )
}

export default Home

