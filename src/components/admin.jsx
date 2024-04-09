import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Admin() {
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signin = () => {
    if (password.trim() === '') {
      alert('กรุณากรอกข้อมูล');
    } else if (password === '0000') {
      navigate('/dashboard');
    } else {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
    }
  };

  return (
    <div className="container-fluid position-relative d-flex p-0">
      {/* Sign In Start */}
      <div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <nav>
                  <h3 className="text-primary" style={{ fontSize: "20px" }}><img src="./img/meow.jpg" style={{ width: "80px", height: "80px", borderRadius: "50%" }} alt="meow" />&nbsp;&nbsp;แมว เมี๊ยว</h3>
                </nav>
                <h3>admin</h3>
              </div>
              <div className="form-floating mb-4">
                <input type="password" className="form-control" id="txtPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="txtPassword">Password</label>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <Link to="/forgotpass">Forgot Password</Link> 
              </div>
              <button type="button" className="btn btn-primary py-3 w-100 mb-4" onClick={signin}>Sign In</button>
            </div>
          </div>
        </div>
      </div>
      {/* Sign In End */}
    </div>
  );
}

export default Admin;
