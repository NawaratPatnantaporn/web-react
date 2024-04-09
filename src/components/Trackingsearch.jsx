import React from 'react'
import { Link } from 'react-router-dom';

function Trackingsearch() {

  function showHiddenBox() {
    let hiddenBox = document.getElementById('hiddenBox');
    let Pass = document.getElementById("txtPass").value;

    if (Pass.trim() === ''){
        alert('โปรดกรอกรหัสพัสดุ');
        hiddenBox.style.display = 'none'; // ซ่อน hiddenBox ถ้าไม่มีรหัส
    } else if (Pass === 'SH-0123' || Pass === 'sh-0123'){
        hiddenBox.style.display = 'block';
    } else {
        alert('โปรดกรอกรหัสพัสดุให้ถูกต้อง');
        hiddenBox.style.display = 'none'; // ซ่อน hiddenBox ถ้ารหัสไม่ถูกต้อง
    }
}

  return (
    <div class="container-fluid position-relative d-flex p-0">

        {/* Sidebar Start */}
        <div className="sidebar pe-4 pb-3">
            <div className="navbar bg-secondary navbar-dark">
                <div href="dashboard.html" className="navbar-brand mx-4 mb-3">
                    <Link to="/dashboard"><h3 className="text-primary" style={{fontSize: "large"}} ><img src="./img/logo.png" alt="" style={{width: "80px", height: "80%", borderRadius: "50%"}} /> <span style={{fontSize: "15px"}}> Storage Corporation</span></h3></Link>
                </div>
                <div className="d-flex align-items-center ms-4 mb-4">
                    <div className="position-relative">
                        <img className="rounded-circle" src="img/meow.jpg" alt="" style={{width: "40px", height: "40px"}} />
                        <div className="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div className="ms-3">
                        <h6 className="mb-0">แมว เมี๊ยว</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div className="navbar-nav w-100">
                    <Link to="/dashboard" className="nav-item nav-link"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                    <Link to="/dataemployees" className="nav-item nav-link"><i className="fa fa-user me-2"></i>Data Employees</Link>
                    <div className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-chart-bar me-2"></i>Worldwide Sales</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/sales" className="dropdown-item">Sales</Link>
                            <Link to="/detailpr" className="dropdown-item active">Detail Ranking</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-cubes me-2"></i>Stock</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/stock" className="dropdown-item">warehouse-1</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="bi bi-mouse me-2"></i>Mouse</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/mouse" className="dropdown-item active">Mouse Gaming Logitech</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" className="nav-item nav-link mt-lg-5" >Log Out</Link>
        </div>
        {/* Sidebar End */}

        {/* Content Start */}
        <div className="content">
            {/* Navbar Start */}
            <nav className="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <Link to="/dashboard" className="navbar-brand d-flex d-lg-none me-4">
                    <h2 className="text-primary mb-0"><img src="./img/logo.png" alt="" style={{width: "80px", height: "80%", borderRadius: "50%"}} /></h2>
                </Link>
                <Link to="" className="sidebar-toggler flex-shrink-0">
                    <i className="fa fa-bars"></i>
                </Link>
                <form className="d-none d-md-flex ms-4">
                    <input 
                    className="form-control bg-dark border-0" 
                    type="search" 
                    placeholder="Search"
                    />
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    <Link to="/trackingsearch"><button class="btn btn-primary"> ติดตามพัสดุ</button></Link>
                    <div className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-envelope me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">ข้อความ</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <Link to="" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/meow1.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">ข้อใหม่จาก แมว หง่าว</h6>
                                        <small>2 ชม. ที่ผ่านมา</small>
                                    </div>
                                </div>
                            </Link>
                            <hr className="dropdown-divider" />
                            <Link to="" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/meow2.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">ข้อใหม่จาก แมว เหว๋อ</h6>
                                        <small>3 ชม. ที่ผ่านมา</small>
                                    </div>
                                </div>
                            </Link>
                            <hr className="dropdown-divider" />
                            <Link to="" className="dropdown-item">
                                <div className="d-flex align-items-center">
                                    <img className="rounded-circle" src="img/meow3.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                    <div className="ms-2">
                                        <h6 className="fw-normal mb-0">ข้อใหม่จาก แมว หลับ</h6>
                                        <small>5 ชม. ที่ผ่านมา</small>
                                    </div>
                                </div>
                            </Link>
                            <hr className="dropdown-divider" />
                            <Link to="" className="dropdown-item text-center">See all message</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i className="fa fa-bell me-lg-2"></i>
                            <span className="d-none d-lg-inline-flex">การแจ้งเตือน</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <Link to="" className="dropdown-item">
                                <h6 className="fw-normal mb-0">ต้องการเพิ่ม...ลงสต็อก</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr className="dropdown-divider" />
                            <Link to="" className="dropdown-item">
                                <h6 className="fw-normal mb-0">สินค้า...ขายดีมาก</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr className="dropdown-divider" />
                            <Link to="" className="dropdown-item">
                                <h6 className="fw-normal mb-0">SH-563 จัดส่งสำเร็จ</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr className="dropdown-divider" />
                            <Link to="" className="dropdown-item text-center">See all notifications</Link>
                        </div>
                    </div>
                    <div className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img className="rounded-circle me-lg-2" src="img/meow.jpg" alt="" style={{width: "40px", height: "40px"}} />
                            <span className="d-none d-lg-inline-flex">แมว เมี๊ยว</span>
                        </Link>
                        <div className="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <Link to="/adminProfile" className="dropdown-item">My Profile</Link>
                            <Link to="" className="dropdown-item">Settings</Link>
                            <Link to="/" className="dropdown-item">Log Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}

            {/* trabkingsearch Start */}
            <div className="container pt-4 px-4">
                <div className="row rounded align-items-center justify-content-center mx-auto" style={{width: "70vw", backgroundColor: "rgb(0, 174, 255)"}}>
                    {/* search start */}
                    <div className="col-md-6 text-center border flex-column mt-4 mb-4" style={{boxShadow: "0 0 10px rgb(0, 123, 255, 0.5)", width: "70%"}}>
                        <h3 className="mt-4" style={{textAlign: "left"}}>กรอกรหัสพัสดุ</h3>
                        <br />
                        <input type="text" id="txtPass" className="d-flex form-control" style={{justifyContent: "left", borderRadius: "30px", width: "100%"}} />
                        <br />
                        <button className="btn btn-primary mb-4" style={{fontSize: "1rem"}} onClick={showHiddenBox}> ตรวจสอบ</button>
                    </div>
                    {/* search end */}
                    <div id="hiddenBox" className="col-md-6 flex-column mt-4 mb-4 hidden text-white">
                        <div className="d-flex align-items-center border-bottom py-3">
                            <img className="flex-shrink-0" src="img/Logi-b.jpg" alt="" style={{width: "40px", height: "40px"}} />
                            <div className="w-100 ms-3">
                                <div className="w-100 justify-content-between">
                                    <span className="text-primary">รับสินค้าวันที่</span> <span>Mon,27 Nov 2023 </span>
                                </div>
                                <span>ผู้จัดส่ง:แมว หง่าว</span>
                                <br /><span>จำนวน: x1,690</span>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-3">
                            <div className="w-100 ms-3">
                                <div className="w-100 justify-content-between align-items-center">
                                    <h6 className="mb-0 col-auto">รหัสการติดตาม &nbsp;<span className="text-primary">SH-0123</span></h6> 
                                </div>
                            </div>
                        </div>
                        <div className="d-flex align-items-center border-bottom py-3">
                            <div className="w-100 ms-3">
                                <div className="d-flex w-100 justify-content-between">
                                    <h6 className="mb-0">รับที่</h6>
                                </div>
                                <span>สบายแมนชั่น, ซอยน้ำเงี้ยว99, แยก15, แขวงอนุสาวรีย์, เขตบางเขน กทม.10220, กรุงเทพมหานคร</span>
                            </div>
                        </div>
                        <div className="progress h-50" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                            <ul className="progress-list" style={{listStyle: "none"}}>
                                <li className="step-progress-item">
                                    <span className="progress-count">&#10003;</span>
                                    <span className="step-label text-primary"> &nbsp;  รับพัสดุแล้ว</span>
                                    <span> 27 Nov 12:58 น.</span>
                                </li>
                                <li className="step-progress-item">
                                    <span className="progress-count">&#10003;</span>
                                    <span className="step-label text-primary"> &nbsp; มาถึงศูนย์สาขาบางเขน</span>
                                    <span> 26 Nov 15:52 น.</span>
                                </li>
                                <li className="step-progress-item">
                                    <span className="progress-count">&#10003;</span>
                                    <span className="step-label text-primary"> &nbsp; ออกจากศูนย์คัดแยก</span>
                                    <span> 26 Nov 10:25 น.</span>
                                </li>
                                <li className="step-progress-item">
                                    <span className="progress-count">&#10003;</span>
                                    <span className="step-label text-primary"> &nbsp; กำลังเตรียมจัดส่ง</span>
                                    <span> 25 Nov 11:03 น.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            {/* trackingsearch End */}
        </div>
        {/* Content End */}
    </div>
  )
}

export default Trackingsearch
