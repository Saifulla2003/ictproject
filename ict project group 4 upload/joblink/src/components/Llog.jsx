// import React from 'react';

// const Llog = () => {
//   return (
//     <div id='abc' className="wrapper">
//       {/* <div className="title">Job Link</div> */}
//       <form action="#">
//         <div className="field">
//           <input 
//             type="text" 
//             placeholder=" Username" 
//             required 
//             className="input-field"
//           />
//         </div>
//         <br/>
//         <div className="field">
//           <input 
//             type="password" 
//             placeholder=" Password" 
//             required 
//             className="input-field"
//           />
//         </div>
//         <div className="pass-link">
//           <a href="#">Forgot password?</a>
//         </div>
//         <div className="field">
//           <button type="submit" className="login-btn">Login</button>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default Llog
import React, { useState } from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const Llog = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate()

  const handleLogin = async (e) => {
    // const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
    // const onSubmit = async (e) => {

    e.preventDefault();

    const formData = { email, password };
      
  
    try {
      const res = await axios.post('http://localhost:3006/login', formData);
      if (res.status === 201) {
        const userId = res.data.user._id
        localStorage.setItem('userId',userId );
        navigate('/B');
      }

    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div id='abc' className="wrapper">
      <form onSubmit={handleLogin}>
        <div className="field">
          <input
            type="text"
            placeholder="Email"
            required
            className="input-field"
            value={email}
            onChange={(e) => setEmail(e.target.value)} // Capture username input
          />
        </div>
        <br />
        <div className="field">
          <input
            type="password"
            placeholder="Password"
            required
            className="input-field"
            value={password}
            onChange={(e) => setPassword(e.target.value)} // Capture password input
          />
        </div>
        <div className="pass-link">
          <a href="#">Forgot password?</a>
        </div>
        <div className="field">
          <button className="login-btn" type='submit'>Login</button>
        </div>
      </form>
    </div>
  );
};

export default Llog
