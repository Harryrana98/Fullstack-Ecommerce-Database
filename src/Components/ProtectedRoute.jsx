import axios from 'axios';
import React, { useEffect, useState } from 'react';
// import { auth } from "./Firebase";
// import { onAuthStateChanged } from 'firebase/auth';
import { Navigate, useNavigate } from 'react-router-dom';

function ProtectedRoute({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true); 
  
const navigate=useNavigate()
const value=async()=>{
     try{
          let res=await axios.get(" https://ecommerce-api-8ga2.onrender.com/user/me",{withCredentials:true})
          setUser(res.data)
     }
     catch(err){
       console.log(err)
       navigate("/login")
     }
}  

useEffect(()=>{

 value()
},[])
  if(!user){
    return <div>Loading...</div>
  }

  return children;
}

export default ProtectedRoute;