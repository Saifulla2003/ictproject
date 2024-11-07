import React from 'react';
import { Link, useNavigate } from 'react-router-dom';


const Userhome = () => {
  const navigate = useNavigate()

  const handleLogOut = async ()=>{
    localStorage.removeItem("userId");
    navigate("/");
  }
  return (
    <div className="user-home-container">
      <nav className="navbar">
        <div className="logo">JOBLINK</div>
        <div className="nav-buttons">
        <Link to="/profile" className="nav-link">
            <img src='ACCOUNT.png' alt="Profile" className="profile-icon" />
          </Link>
        
          <Link to="/UAJ" className="nav-link"> Applied Jobs</Link>
          {/* <Link to="/update-profile" className="nav-link">Update Profile</Link> */}
          <button onClick={handleLogOut} className="nav-link">LogOut</button>
        </div>
      </nav>

      <div className="content">
        <h1>Welcome to Joblink</h1>
        <p>Find your dream job today!</p>
        <br/>
        <Link to="/UM" className="nav-link outlined-link">Browse Jobs</Link>
      </div>
    </div>
  )
}


export default Userhome
