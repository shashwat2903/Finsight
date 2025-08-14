// import React from "react";

// function Signup(){
//     return(
//         <h1>Signup</h1>
//     );
// }

// export default Signup;



// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";

// function Signup() {
//   const [formData, setFormData] = useState({
//     name: "", // Removed hardcoded name
//     email: "",
//     password: ""
//   });
//   const [error, setError] = useState("");
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSignup = async () => {
//     try {
//       setError("");
      
//       // Validation
//       if (!formData.name.trim()) {
//         throw new Error("Name is required");
//       }
//       if (!formData.email.includes("@")) {
//         throw new Error("Invalid email format");
//       }
//       if (formData.password.length < 6) {
//         throw new Error("Password must be at least 6 characters");
//       }

//       const response = await axios.post("http://localhost:5000/api/signup", formData);
      
//       if (response.data.message === "User created successfully") {
//         navigate("/");
//       }
//     } catch (err) {
//       setError(err.response?.data?.error || err.message);
//     }
//   };

//   return (
//     <div className="signup-form">
//       <h2>Create Account</h2>
//       {error && <div className="error">{error}</div>}
      
//       <input
//         type="text"
//         name="name"
//         placeholder="Full Name"
//         value={formData.name}
//         onChange={handleChange}
//         required
//       />
      
//       <input
//         type="email"
//         name="email"
//         placeholder="Email"
//         value={formData.email}
//         onChange={handleChange}
//         required
//       />
      
//       <input
//         type="password"
//         name="password"
//         placeholder="Password"
//         value={formData.password}
//         onChange={handleChange}
//         required
//         minLength="6"
//       />
      
//       <button onClick={handleSignup}>
//         Sign Up
//       </button>
//     </div>
//   );
// }

// export default Signup;




// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';
// import './Signup.css'; // Create this CSS file (same styles as AuthPage.css)

// function Signup() {
//   const [isLogin, setIsLogin] = useState(false); // Default to signup view
//   const [formData, setFormData] = useState({
//     name: '',
//     email: '',
//     password: ''
//   });
//   const navigate = useNavigate();

//   const handleChange = (e) => {
//     setFormData({ ...formData, [e.target.name]: e.target.value });
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const endpoint = isLogin ? '/api/login' : '/api/signup';
//       const payload = isLogin 
//         ? { email: formData.email, password: formData.password }
//         : formData;

//       const response = await axios.post(endpoint, payload);
      
//       localStorage.setItem('user', JSON.stringify(response.data.user));
//       navigate('/');
//     } catch (error) {
//       alert(error.response?.data?.error || error.message);
//     }
//   };

//   return (
//     <div className="auth-container">
//       <div className="auth-tabs">
//         <button 
//           className={`tab ${isLogin ? 'active' : ''}`}
//           onClick={() => setIsLogin(true)}
//         >
//           Login
//         </button>
//         <button 
//           className={`tab ${!isLogin ? 'active' : ''}`}
//           onClick={() => setIsLogin(false)}
//         >
//           Sign Up
//         </button>
//       </div>

//       <form onSubmit={handleSubmit} className="auth-form">
//         {!isLogin && (
//           <div className="form-group">
//             <label>Full Name</label>
//             <input
//               type="text"
//               name="name"
//               value={formData.name}
//               onChange={handleChange}
//               required={!isLogin}
//             />
//           </div>
//         )}

//         <div className="form-group">
//           <label>Email Address</label>
//           <input
//             type="email"
//             name="email"
//             value={formData.email}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         <div className="form-group">
//           <label>Password</label>
//           <input
//             type="password"
//             name="password"
//             value={formData.password}
//             onChange={handleChange}
//             required
//           />
//         </div>

//         {isLogin && (
//           <div className="forgot-password">
//             <a href="/forgot-password">Forgot password?</a>
//           </div>
//         )}

//         <button type="submit" className="auth-button">
//           {isLogin ? 'Login' : 'Sign Up'}
//         </button>

//         <div className="auth-switch">
//           {isLogin ? (
//             <>
//               Not a member?{' '}
//               <button type="button" onClick={() => setIsLogin(false)}>
//                 Sign Up
//               </button>
//             </>
//           ) : (
//             <>
//               Already have an account?{' '}
//               <button type="button" onClick={() => setIsLogin(true)}>
//                 Login
//               </button>
//             </>
//           )}
//         </div>
//       </form>
//     </div>
//   );
// }

// export default Signup;



import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './Signup.css';

function Signup() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: ''
  });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

 const handleSubmit = async (e) => {
  e.preventDefault();
  setError('');
  
  // Basic validation
  if (!formData.name.trim() || !formData.email.trim() || !formData.password.trim()) {
    setError('All fields are required');
    return;
  }

  if (!formData.email.includes('@')) {
    setError('Please enter a valid email');
    return;
  }

  try {
    // 1. First, sign up the user
    const response = await axios.post(
      'http://localhost:5000/api/auth/signup',
      {
        name: formData.name.trim(),
        email: formData.email.trim().toLowerCase(),
        password: formData.password.trim()
      },
      {
        headers: {
          'Content-Type': 'application/json'
        }
      }
    );
    
    console.log('Signup success:', response.data);

    // 2. Auto-login after successful signup
    try {
      const loginResponse = await axios.post(
        'http://localhost:5000/api/auth/login', 
        {
          email: formData.email.trim(),
          password: formData.password.trim()
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        }
      );
      
      // Store user data and redirect to homepage
      localStorage.setItem('user', JSON.stringify(loginResponse.data.user));
      navigate('/', { state: { fromSignup: true } });
      
    } catch (loginError) {
      console.error('Auto-login failed:', loginError);
      // If auto-login fails, still redirect but show message
      navigate('/login', { 
        state: { 
          message: 'Account created! Please log in' 
        } 
      });
    }
    
  } catch (err) {
    console.error('Signup error:', err.response?.data || err.message);
    setError(err.response?.data?.error || 'Signup failed. Please try again.');
  }
};


  return (
    <div className="signup-container">
      <h2>Create Account</h2>
      {error && <div className="error-message">{error}</div>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            type="text"
            name="name"
            placeholder="Full Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="email"
            name="email"
            placeholder="Email Address"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="form-group">
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={formData.password}
            onChange={handleChange}
            required
            minLength="6"
          />
        </div>
        <button type="submit" className="submit-button">
          Sign Up
        </button>
      </form>
      <p className="login-redirect">
        Already have an account? <a href="/login">Log in</a>
      </p>
    </div>
  );
}

export default Signup;