// src/pages/RegisterPage.jsx

import React, { useState } from 'react'; // <--- ADDED useState HERE

/**
 * @function RegisterPage
 * @description This functional component renders a user registration form.
 * It collects user details, performs client-side validation, and provides feedback messages.
 * @returns {JSX.Element} A div containing the centered and styled registration form.
 */
function RegisterPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !password || !confirmPassword) {
      setMessage('Please fill in all required fields to register.');
      return;
    }
    if (password !== confirmPassword) {
      setMessage('Passwords do not match. Please ensure both password fields are identical.');
      return;
    }
    if (password.length < 6) {
      setMessage('Password must be at least 6 characters long for security.');
      return;
    }
    console.log('Registration attempt with:', { name, email, password });
    setMessage('Registration submitted successfully! (Backend registration would occur here)');
  };

  const pageBackgroundStyle = {
    backgroundImage: `url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIiB2aWV3Qm94PSIwIDAgMTAwIDEwMCI+CiAgPHJlY3QgeD0iMCIgeT0iMCIgd2lkdGg9IjEwMCIgaGVpZ2h0PSIxMDAiIGZpbGw9IiNmOGY5ZmEiLz4KICA8bGluZSB4MT0iMCIgeTE9IjEwMCIgeDI9IjEwMCIgeTI9IjAiIHN0cm9rZT0iI2U5ZWNlZiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPGxpbmUgeDE9IjUwIiB5MT0iMTAwIiB4Mj0iMTAwIiB5Mj0iNTAiIHN0cm9rZT0iI2U5ZWNlZiIgc3Ryb2tlLXdpZHRoPSIyIi8+CiAgPGxpbmUgeDE9IjAiIHkxPSI1MCIgeDI9IjUwIiB5Mj0iMCIgc3Ryb2tlPSIjZTllY2VmIiBzdHJva2Utd2lkdGg9IjIiLz4KPC9zdmc+")`,
    backgroundRepeat: 'repeat',
    backgroundSize: '100px 100px',
  };
  const inputStyle = { transition: 'border-color 0.3s ease-in-out, box-shadow 0.3s ease-in-out' };
  const buttonStyle = { transition: 'background-color 0.3s ease-in-out, transform 0.3s ease-in-out, box-shadow 0.3s ease-in-out' };

  return (
    <div className="min-vh-100 d-flex align-items-center justify-content-center bg-light" style={pageBackgroundStyle}>
      <div className="container py-5">
        <div className="row justify-content-center">
          <div className="col-md-7">
            <div className="card shadow-lg rounded-3">
              <div className="card-body p-4">
                <h2 className="card-title text-center mb-4 fw-bold text-success">Register Now!</h2>
                <form onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="nameInput" className="form-label text-muted"><i className="bi bi-person-fill me-2"></i> Full Name</label>
                    <input type="text" className="form-control" id="nameInput" placeholder="Your Full Name" value={name} onChange={(e) => setName(e.target.value)} required style={inputStyle} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="emailInput" className="form-label text-muted"><i className="bi bi-envelope-fill me-2"></i> Email address</label>
                    <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} required style={inputStyle} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="passwordInput" className="form-label text-muted"><i className="bi bi-lock-fill me-2"></i> Password</label>
                    <input type="password" className="form-control" id="passwordInput" placeholder="Choose a strong password" value={password} onChange={(e) => setPassword(e.target.value)} required style={inputStyle} />
                  </div>
                  <div className="mb-3">
                    <label htmlFor="confirmPasswordInput" className="form-label text-muted"><i className="bi bi-check-circle-fill me-2"></i> Confirm Password</label>
                    <input type="password" className="form-control" id="confirmPasswordInput" placeholder="Re-enter your password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required style={inputStyle} />
                  </div>
                  {message && <div className="alert alert-info mt-3 rounded-3" role="alert">{message}</div>}
                  <div className="d-grid gap-2 mt-4">
                    <button type="submit" className="btn btn-success btn-lg" style={buttonStyle}
                      onMouseOver={(e) => {
                        e.currentTarget.style.backgroundColor = '#198754';
                        e.currentTarget.style.transform = 'translateY(-2px)';
                        e.currentTarget.style.boxShadow = '0 8px 16px rgba(0,0,0,0.2)';
                      }}
                      onMouseOut={(e) => {
                        e.currentTarget.style.backgroundColor = '#28a745';
                        e.currentTarget.style.transform = 'translateY(0)';
                        e.currentTarget.style.boxShadow = 'none';
                      }}>Register</button>
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


export default RegisterPage;