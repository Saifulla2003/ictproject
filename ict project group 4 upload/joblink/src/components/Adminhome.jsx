import React from 'react'
import { Link } from 'react-router-dom'
// import './AdminHomePage.css'
const Adminhome = () => {
  return (
    
    <div className="admin-container">
    <nav className="navbar">
      <div className="logo">Joblink</div>
      <div className="nav-buttons">
        <Link to="/AM">
        <button className="btn manage-jobs">Manage Jobs</button>
        </Link>
        <button className="btn logout">Logout</button>
      </div>
    </nav>

    <div className="content">
          <h1></h1>
          <Link to="/AJ">
          <button class="add-new-job-btn">Add New Job</button>
          </Link>
    </div>
  </div>
  )
}

    


export default Adminhome
