/**
 * @function LoginPage
 * @description This functional component renders a user login form. It manages
 * the input values for email and password, performs basic client-side
 * validation, and displays feedback messages.
 * @returns {JSX.Element} A div containing the centered and styled login form.
 */

import React, { useState } from 'react'; // 

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
     setMessage('Please enter both your email and password to log in.');
      return;
    }
    console.log('Login attempt initiated with:', { email, password });
    setMessage('Login form submitted successfully! (Backend authentication would be performed here)');
  };

  // Inline style for creative background pattern
  const pageBackgroundStyle = {
    backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmOGY5ZmEiLz4KICA8bGluZSB4MT0iMCIgeTE9IjEwMCIgeDI9IjEwMCIgeTI9IjAiIHN0cm9rZT0iI2U5ZWNlZiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPGxpbmUgeDE9IjUwIiB5MT0iMTAwIiB4Mj0iMTAwIiB5Mj0iNTAiIHN0cm9rZT0iI2U5ZWNlZiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSI1MCIgeDI9IjUwIiB5Mj0iMCIgc3Ryb2tlPSIjZTllY2VmIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+")`,
    backgroundRepeat: 'repeat',
    backgroundSize: '100px 100px',
  };

  // Inline style for input transitions and hover effects
  const inputStyle = { transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out' };
  const buttonStyle = { transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out' };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light" style={pageBackgroundStyle}>
    <div className="container py-5">
    <div className="row justify-content-center">
    <div className="col-md-6">
    <div className="card shadow-lg rounded-3">
    <div className="card-body p-4">
    <h2 className="card-title text-center mb-4 fw-bold text-primary">Welcome Back!</h2>
      <form onSubmit={handleSubmit}>
       <div className="mb-3">
          <label htmlFor="emailInput" className="form-label text-muted">
           <i className="bi bi-envelope-fill me-2"></i> Email address
          </label>
            <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
        </div>
        <div className="mb-3">
          <label htmlFor="passwordInput" className="form-label text-muted">
           <i className="bi bi-lock-fill me-2"></i> Password
          </label>
             <input type="password" className="form-control" id="passwordInput" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
        </div>
              {message && <div className="alert alert-info mt-3 rounded-3" role="alert">{message}</div>}
          <div className="d-grid gap-2 mt-4">
            <button type="submit" className="btn btn-primary btn-lg" style={buttonStyle}
              onMouseOver={(e) => {
               e.currentTarget.style.backgroundColor = '#0056b3';
               e.currentTarget.style.transform = 'translateY(-2px)';
               e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
             }}
               onMouseOut={(e) => {
                 e.currentTarget.style.backgroundColor = '#0d6efd';
                 e.currentTarget.style.transform = 'translateY(0)';
                 e.currentTarget.style.boxShadow = 'none';
            }}>Login</button>
          </div>
      </form>
    </div>
    </div>
    </div>
    </div>
   </div>
    </div>
  );
}

export default LoginPage;