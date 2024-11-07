// import React from 'react';
// import { TextField, Button } from '@mui/material';

// const Sign = () => {
//   return (
//     <div id="abc" className="wrapper">
//       <form action="#">
//         <div className="field">
//           {/* Using Material UI TextField for a more modern look */}
//           <TextField 
//             fullWidth 
//             label="User Name" 
//             variant="outlined" 
//             required 
//             InputLabelProps={{
//               style: { color: '#fff' }, // White label for contrast with dark background
//             }}
//             InputProps={{
//               style: { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Input style
//             }}
//           />
//         </div>
//         <br/>
//         <div className="field">
//           {/* Another TextField for password */}
//           <TextField 
//             fullWidth 
//             label='Password' 
//             type="password" 
//             variant="outlined" 
//             required 
//             InputLabelProps={{
//               style: { color: '#fff' }, // White label
//             }}
//             InputProps={{
//               style: { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Input style
//             }}
//           />
//         </div>
//         <div className="field">
//           {/* Material UI Button for Signup */}
//           <Button 
//             type="submit" 
//             fullWidth 
//             variant="contained" 
//             style={{
//               backgroundColor: '#48c6ef', 
//               color: '#fff',
//               marginTop: '20px',
//               borderRadius: '50px',
//             }}
//           >
//             Signup
//           </Button>
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Sign


import React ,{useState} from 'react';
import { TextField, Button } from '@mui/material';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Sign = () => {
  const [formData, setFormData] = useState({ name : '' ,phone : '' ,username: '', email: '', password: '' });
  const { name, phone, username, email, password } = formData;
  const navigate = useNavigate();

  const onChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const onSubmit = async (e) => {

    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:3006/signup', formData);
      if (res.status === 201) {
        navigate('/B');
      }
      
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div id="abc" className="wrapper">
      <form action="#">
        <div className="field">
          <TextField 
            fullWidth 
            label="Name" 
            variant="outlined" 
            name='name'
            value={name}
            onChange={onChange}
            required 
            InputLabelProps={{
              style: { color: '#fff' }, // White label for dark background
            }}
            InputProps={{
              style: { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Input style
            }}
          />
        </div>
        <br/>
        <div className="field">
          <TextField 
            fullWidth 
            label="Phone" 
            variant="outlined" 
            name='phone'
            value={phone}
            onChange={onChange}
            required 
            InputLabelProps={{
              style: { color: '#fff' }, // White label
            }}
            InputProps={{
              style: { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Input style
            }}
          />
        </div>
        <br/>
        <div className="field">
          <TextField 
            fullWidth 
            label="Email" 
            type="email" 
            name='email'
            value={email}
            onChange={onChange}
            variant="outlined" 
            required 
            InputLabelProps={{
              style: { color: '#fff' }, // White label
            }}
            InputProps={{
              style: { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Input style
            }}
          />
        </div>
        <br/>
        <div className="field">
          <TextField 
            fullWidth 
            label="Username" 
            name='username'
            value={username}
            onChange={onChange}
            variant="outlined" 
            required 
            InputLabelProps={{
              style: { color: '#fff' }, // White label
            }}
            InputProps={{
              style: { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Input style
            }}
          />
        </div>
        <br/>
        <div className="field">
          <TextField 
            fullWidth 
            label="Password" 
            type="password" 
            name='password'
            value={password}
            onChange={onChange}
            variant="outlined" 
            required 
            InputLabelProps={{
              style: { color: '#fff' }, // White label
            }}
            InputProps={{
              style: { color: '#fff', backgroundColor: 'rgba(255, 255, 255, 0.1)' }, // Input style
            }}
          />
        </div>
        <div className="field">
          <Button 
            onClick={onSubmit}
            fullWidth 
            variant="contained" 
            style={{
              backgroundColor: '#48c6ef', 
              color: '#fff',
              marginTop: '20px',
              borderRadius: '50px',
            }}
          >
            Signup
          </Button>
        </div>
      </form>
    </div>
  );
}

export default Sign;
