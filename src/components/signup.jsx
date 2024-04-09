import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Signup() {

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signup = () => {
    if (username.trim() === '' || email.trim() === '' || password.trim() === '') {
      alert('กรุณากรอกข้อมูล');
    } else if (username === 'member' && email === 'member@gmail.com' && password === '0000') {
      localStorage.setItem('stdName', 'member');
      localStorage.setItem('stdEmail', 'member@gmail.com');
      localStorage.setItem('stdNo', '65072713');
      navigate('/');
    } else {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
    }
  }

  return (
    <div className="container-fluid position-relative d-flex p-0">
      {/* Sign Up Start */}
      <div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <nav>
                  <h3 className="text-primary" style={{ fontSize: "20px" }}>
                    <img src="./img/logo.png" style={{ width: "80px", height: "80px", borderRadius: "50%" }} alt="logo" />&nbsp;&nbsp; Storage Corporation
                  </h3>
                </nav>
                <h3>Sign Up</h3>
              </div>
              <div className="form-floating mb-3">
                <input type="text" className="form-control" id="txtUsername" placeholder="jhondoe" value={username} onChange={(e) => setUsername(e.target.value)} />
                <label htmlFor="txtUsername">Username</label>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="txtEmail" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="txtEmail">Email address</label>
              </div>
              <div className="form-floating mb-4">
                <input type="password" className="form-control" id="txtPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="txtPassword">Password</label>
              </div>
              <button type="submit" className="btn btn-primary py-3 w-100 mb-4" onClick={signup}>Sign Up</button>
              <p className="text-center mb-0">Already have an Account? <Link to="/">Sign In</Link></p>
            </div>
          </div>
        </div>
      </div>
      {/* Sign Up End */}
    </div>
  )
}

export default Signup;
