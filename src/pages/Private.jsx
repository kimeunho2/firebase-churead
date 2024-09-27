import React from 'react'
import { Navigate, Outlet } from 'react-router-dom'
import { auth } from '../firebase'

const Private = () => {
    const user = auth.currentUser // 
  
  
    return user ? (
    
        <Outlet/>
    
  ) : <Navigate to="/login"/> 
}

export default Private