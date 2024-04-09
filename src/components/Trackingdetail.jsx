import React from 'react'
import { Link } from 'react-router-dom';

function Trackingdetail() {
  return (
    <div class="container-fluid position-relative d-flex p-0">
        {/* Spinner Start 
        <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        Spinner End  */}

        {/* Sidebar Start */}
        <div class="sidebar pe-4 pb-3">
            <div class="navbar bg-secondary navbar-dark">
                <div href="dashboard.html" class="navbar-brand mx-4 mb-3">
                    <Link to="/dashboard"><h3 class="text-primary" style={{fontSize: "large"}} ><img src="./img/logo.png" alt="" style={{width: "80px", height:"80%", borderRadius:"50%"}} /> <span style={{fontSize: "15px"}}> Storage Corporation</span></h3></Link>
                </div>
                <div class="d-flex align-items-center ms-4 mb-4">
                    <div class="position-relative">
                        <img class="rounded-circle" src="img/meow.jpg" alt="" style={{width: "40px", height: "40px"}} />
                        <div class="bg-success rounded-circle border border-2 border-white position-absolute end-0 bottom-0 p-1"></div>
                    </div>
                    <div class="ms-3">
                        <h6 class="mb-0">แมว เมี๊ยว</h6>
                        <span>Admin</span>
                    </div>
                </div>
                <div class="navbar-nav w-100">
                    <Link to="/dashboard" class="nav-item nav-link"><i class="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                    <Link to="/dataemployees" class="nav-item nav-link"><i class="fa fa-user me-2"></i>Data Employees</Link>
                    <div class="nav-item dropdown">
                        <Link to="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-chart-bar me-2"></i>Worldwide Sales</Link>
                        <div class="dropdown-menu bg-transparent border-0">
                            <Link to="/sales" class="dropdown-item">Sales</Link>
                            <Link to="/detailpr" class="dropdown-item active">Detail Ranking</Link>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="fa fa-cubes me-2"></i>Stock</Link>
                        <div class="dropdown-menu bg-transparent border-0">
                            <Link to="/stock" class="dropdown-item">warehouse-1</Link>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i class="bi bi-mouse me-2"></i>Mouse</Link>
                        <div class="dropdown-menu bg-transparent border-0">
                            <Link to="/mouse" class="dropdown-item active">Mouse Gaming Logitech</Link>
                        </div>
                    </div>
                </div>
            </div>
            <Link to="/" class="nav-item nav-link mt-lg-5" >Log Out</Link>
        </div>
        {/* Sidebar End */}

        {/* Content Start */}
        <div class="content">
            {/* Navbar Start */}
            <nav class="navbar navbar-expand bg-secondary navbar-dark sticky-top px-4 py-0">
                <Link to="/dashboard" class="navbar-brand d-flex d-lg-none me-4">
                    <h2 class="text-primary mb-0"><img src="./img/logo.png" alt="" style={{width: "80px", height: "80%", borderRadius: "50%"}} /></h2>
                </Link>
                <Link to="" class="sidebar-toggler flex-shrink-0">
                    <i class="fa fa-bars"></i>
                </Link>
                <form class="d-none d-md-flex ms-4">
                    <input class="form-control bg-dark border-0" type="search" placeholder="Search" />
                </form>
                <div class="navbar-nav align-items-center ms-auto">
                    <div class="nav-item dropdown">
                        <Link to="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-envelope me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">ข้อความ</span>
                        </Link>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <Link to="" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/meow1.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">ข้อใหม่จาก แมว หง่าว</h6>
                                        <small>2 ชม. ที่ผ่านมา</small>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider" />
                            <Link to="" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/meow2.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">ข้อใหม่จาก แมว เหว๋อ</h6>
                                        <small>3 ชม. ที่ผ่านมา</small>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider" />
                            <Link to="" class="dropdown-item">
                                <div class="d-flex align-items-center">
                                    <img class="rounded-circle" src="img/meow3.jpg" alt="" style={{width: "40px", height: "40px"}} />
                                    <div class="ms-2">
                                        <h6 class="fw-normal mb-0">ข้อใหม่จาก แมว หลับ</h6>
                                        <small>5 ชม. ที่ผ่านมา</small>
                                    </div>
                                </div>
                            </Link>
                            <hr class="dropdown-divider" />
                            <Link to="" class="dropdown-item text-center">See all message</Link>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <i class="fa fa-bell me-lg-2"></i>
                            <span class="d-none d-lg-inline-flex">การแจ้งเตือน</span>
                        </Link>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <Link to="" class="dropdown-item">
                                <h6 class="fw-normal mb-0">ต้องการเพิ่ม...ลงสต็อก</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr class="dropdown-divider" />
                            <Link to="" class="dropdown-item">
                                <h6 class="fw-normal mb-0">สินค้า...ขายดีมาก</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr class="dropdown-divider" />
                            <Link to="" class="dropdown-item">
                                <h6 class="fw-normal mb-0">SH-563 จัดส่งสำเร็จ</h6>
                                <small>15 minutes ago</small>
                            </Link>
                            <hr class="dropdown-divider" />
                            <Link to="" class="dropdown-item text-center">See all notifications</Link>
                        </div>
                    </div>
                    <div class="nav-item dropdown">
                        <Link to="" class="nav-link dropdown-toggle" data-bs-toggle="dropdown">
                            <img class="rounded-circle me-lg-2" src="img/meow.jpg" alt="" style={{width: "40px", height: "40px"}} />
                            <span class="d-none d-lg-inline-flex">แมว เมี๊ยว</span>
                        </Link>
                        <div class="dropdown-menu dropdown-menu-end bg-secondary border-0 rounded-0 rounded-bottom m-0">
                            <Link to="/adminProfile" class="dropdown-item">My Profile</Link>
                            <Link to="" class="dropdown-item">Settings</Link>
                            <Link to="/" class="dropdown-item">Log Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}

            {/* Blank Start */}
            <div class="container pt-4 px-4">
                <div class="row rounded align-items-center justify-content-center mx-auto" style={{width: "70vw", backgroundColor: "rgb(0, 174, 255)"}}>
                    <div class="col-md-6 flex-column mt-4 mb-4">
                        <div class="d-flex align-items-center border-bottom py-3">
                            <img class=" flex-shrink-0" src="img/Logi-b.jpg" alt="" style={{width: "40px", height: "40px"}} />
                            <div class="w-100 ms-3 text-white">
                                <div class="w-100 justify-content-between">
                                    <span class="text-primary">รับสินค้าวันที่</span> <span>Mon,27 Nov 2023 </span>
                                </div>
                                <span>ผู้ขนส่ง:แมว หง่าว</span>
                                <br /><span>จำนวน: x1,690</span>
                                <br /><span>ติดต่อ: 086-xxx-xx56</span>
                            </div>
                        </div>
                        <div class="d-flex align-items-center border-bottom py-3">
                            <div class="w-100 ms-3">
                                <div class="w-100 justify-content-between align-items-center">
                                    <h6 class="mb-0 col-auto">รหัสการติดตาม &nbsp;<span class="text-primary">SH-A123</span></h6> 
                                </div>
                            </div>
                        </div>
                        <div class="d-flex align-items-center border-bottom py-3">
                            <div class="w-100 ms-3 text-white">
                                <div class="d-flex w-100 justify-content-between">
                                    <h6 class="mb-0">รับที่</h6>
                                </div>
                                <span>สบายแมนชั่น, ซอยน้ำเงี้ยว99, แยก15, แขวงอนุสาวรีย์, เขตบางเขน กทม.10220, กรุงเทพมหานคร</span>
                            </div>
                        </div>
                        <div class="progress h-50" >
                          {/* style={{backgroundColor: "rgb(0, 174, 255)"}} */}
                            <ul class="progress-list text-white" style={{listStyle: "none"}}>
                                <li class="step-progress-item">
                                    <span class="progress-count">&#10003;</span>
                                    <span class="step-label text-primary"> &nbsp; รับพัสดุแล้ว</span>
                                    <span style={{color: "black"}}> 27 Nov 12:58 น.</span>
                                </li>
                                <li class="step-progress-item">
                                    <span class="progress-count">&#10003;</span>
                                    <span class="step-label text-primary"> &nbsp; มาถึงศูนย์สาขาบางเขน</span>
                                    <span style={{color: "black"}}> 26 Nov 15:52 น.</span>
                                </li>
                                <li class="step-progress-item">
                                    <span class="progress-count">&#10003;</span>
                                    <span class="step-label text-primary"> &nbsp; ออกจากศูนย์คัดแยก</span>
                                    <span style={{color: "black"}}> 26 Nov 10:25 น.</span>
                                </li>
                                <li class="step-progress-item">
                                    <span class="progress-count">&#10003;</span>
                                    <span class="step-label text-primary"> &nbsp; กำลังเตรียมจัดส่ง</span>
                                    <span style={{color: "black"}}> 25 Nov 11:03 น.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* <div class="d-flex justify-content-end mt-4 mb-4">
                        <a href="sales.html"><button class="btn btn-primary"> ติดตามพัสดุ</button></a>
                    </div> */}
                </div>
            </div>
            {/* Blank End */}
        </div>
        {/* Content End */}

        {/* Back to Top */}
        <Link to="" class="btn btn-lg btn-primary btn-lg-square back-to-top"><i class="bi bi-arrow-up"></i></Link>
    </div>
  )
}

export default Trackingdetail
