import React from 'react'
import { useNavigate } from 'react-router-dom'

const Error = () => {
  const navigate = useNavigate()
  return (
    <div style={{display:'flex', justifyContent:'center', alignItems:'center' ,height:'100vh', width:'100vw', backgroundColor:'black', display:'flex', flexDirection:'column'}}>
      <h1 style={{color:'red', fontSize:'3rem'}}>Error 404 Not Found 🤧</h1>
      <div style={{padding:'1rem'}}>
        <button style={{padding:'1rem', fontSize:'1rem' , fontWeight:'bold', borderRadius:'1rem'}} onClick={()=>{
        navigate('/')
        }} >Return to Home Page</button>
      </div>
    </div>
  )
}

export default Error
