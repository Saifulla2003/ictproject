
import { Button } from '@mui/material'
import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const userId = localStorage.getItem('userId')
  useEffect(() => {
    if(userId !== ""){
      localStorage.removeItem('userID')
    }
  }, [])
  return (
    
    // <div className="welcome-container">
    <div>
      <h1 className="welcome-title">Welcome to Joblink</h1>
      <br/>
      <div className="button-group">
        <Link to="/L">
          <Button variant="contained" className="welcome-btn login-btn">Login</Button>
        </Link>
        <Link to="/S">
          <Button variant="outlined" className="welcome-btn signup-btn">Signup</Button>
        </Link>
      </div>
    </div>

      
  )
}

export default Home
