import React from 'react'
import { useNavigate } from "react-router-dom";

function Forgotpass() {

  const navigate = useNavigate();

  const backtoSignin = () => {
    navigate('/');
  };

  return (
    <div class="container-fluid position-relative d-flex p-0">
         {/* Spinner Start 
        <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
         Spinner End  */}


        {/* Sign In Start */}
        <div className="container-fluid">
            <div className="row h-100 align-items-center justify-content-center" style={{minHeight: "100vh"}}>
                <div className="col-12 col-sm-8 col-md-6 col-lg-5 col-xl-4">
                    <div className="bg-secondary rounded p-4 p-sm-5 my-4 mx-3">
                        <div>
                            <h3>Find Your Account</h3>
                        </div>
                        <hr />
                        <div className="form-floating mb-3">
                            <input type="email" className="form-control" id="floatingInput" placeholder="name@example.com" />
                            <label htmlFor="floatingInput">Email address</label>
                            <p>Please enter your email address</p>
                        </div>
                        <hr/>
                        <button type="submit" className="btn btn-primary py-3 w-30 mb-6">Search</button>
                        <button type="submit" className="btn btn-dark py-3 w-30 mb-6" onClick={backtoSignin}>cancel</button>
                    </div>
                </div>
            </div>
        </div>
        {/* Sign In End */}
    </div>
  )
}

export default Forgotpass
