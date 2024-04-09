import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';

function Index() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const signinmember = () => {
    if (email.trim() === '' || password.trim() === '') {
      alert('กรุณากรอกข้อมูล');
    } else if (email === 'member' && password === '0000') {
      sessionStorage.setItem('stdNo', '65072713');
      localStorage.setItem('stdName', 'Nawarat Patnantaporn');
      navigate('/member');
    } else {
      alert('กรุณากรอกข้อมูลให้ถูกต้อง');
    }
  };

  return (
    <div className="container-fluid position-relative d-flex p-0">
       {/* Spinner Start 
      <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
        <div className="spinner-border text-primary" style={{ width: "3rem", height: "3rem" }} role="status">
          <span className="sr-only">Loading...</span>
        </div>
      </div>
       Spinner End  */}

      {/* Sign In Start */}
      <div className="container-fluid">
        <div className="row h-100 align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
          <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
            <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
              <div className="d-flex align-items-center justify-content-between mb-3">
                <nav>
                  <h3 className="text-primary" style={{ fontSize: "20px" }}><img src="./img/logo.png" style={{ width: "80px", height: "80px", borderRadius: "50%" }} alt="logo" />&nbsp;&nbsp;Storage Corporation</h3>
                </nav>
                <h3>Log In</h3>
              </div>
              <div className="form-floating mb-3">
                <input type="email" className="form-control" id="txtEmail" placeholder="name@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                <label htmlFor="txtEmail">Email address or username</label>
              </div>
              <div className="form-floating mb-4">
                <input type="password" className="form-control" id="txtPassword" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
                <label htmlFor="txtPassword">Password</label>
              </div>
              <div className="d-flex align-items-center justify-content-between mb-4">
                <div className="form-check">
                  <input type="checkbox" className="form-check-input" id="exampleCheck1" />
                  <label className="form-check-label" htmlFor="exampleCheck1">Check me out</label>
                </div>
                <Link to="/forgotpass">Forgot Password</Link>
              </div>
              <div className="row">
                <div className="col-md-6">
                  <button type="button" className="btn btn-primary py-3 w-100 mb-4" onClick={signinmember}>Sign In</button>
                </div>
                <div className="col-md-6">
                  <Link to="/admin" className="btn btn-primary py-3 w-100 mb-4">Admin</Link>
                </div>
              </div>
              <p className="text-center mb-0">Don't have an Account? <Link to="/signup">Sign Up</Link></p>
            </div>
          </div>
        </div>
      </div>
      {/* Sign In End */}
    </div>
  );
}

export default Index;
