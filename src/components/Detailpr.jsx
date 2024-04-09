import React from 'react'
import { Link } from 'react-router-dom'

function Detailpr() {
  return (
    <div className="container-fluid position-relative d-flex p-0">
        {/* Spinner Start 
        <div id="spinner" className="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div className="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
        Spinner End  */}

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
                        <Link to="" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i className="fa fa-chart-bar me-2"></i>Worldwide Sales</Link>
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
                            <Link to="/mouse" className="dropdown-item">Mouse Gaming Logitech</Link>
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
                    <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                </form>
                <div className="navbar-nav align-items-center ms-auto">
                    <Link to="/trackingsearch"><button className="btn btn-primary"> ติดตามพัสดุ</button></Link>
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


            {/* Blank Start */}
            <div className="container-fluid pt-4 px-4">
                <div className="row vh-100 rounded align-items-center justify-content-center mx-0" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                    <div className="col-md-6 d-flex flex-column align-items-center text-center">
                        <h3 className="text-center mb-4">รายงาน</h3>
                        <div className="d-flex justify-content-end">
                            <img src="img/Logi-b.jpg" alt='' className="mb-4 me-2" />
                            <div className="text-start">
                                <h4>อันดับ : 1</h4>
                                <h4>ชื่อสินค้า : Mouse Gaming Logitech</h4>
                                <h4>รหัสสินค้า : SH-100</h4>
                                <h4>จำนวนที่ขายได้ : 891 ชิ้น</h4>
                                <h4>ประเถท : Gaming Gear</h4>
                                <h4>จาก: Logitech</h4>
                                <h4>ผลิตที่ : Switzerland</h4>
                                <h4>กำไรที่ได้รับ : 891,000&#3647;</h4>
                            </div>
                        </div>
                        <h5 className="text-start">เมื่อเทียบกับปีก่อนหน้าแล้วชินค้าชิ้นนี้ขายได้ดีมากกว่าจากปีก่อนหน้าถึง 20% และเมื่อเทียบกับสิ้นค้าประเภทเดียวกันอย่าง <span className="text-primary">LOGITECH WIRELESS LIGHTSPEED GAMING HEADSET</span> ที่ขายดีเป็นอันดับ 4 แล้วนั้นยอดขายสินค้าชินนี้ขายได้ดีมากกว่าถึง 144%</h5>
                        <h5 className="text-start"><span className="text-primary">(ข้อมูลจากรีวิวของผู้ซื้อ)</span> ที่สินค้าชิ้นนี้ขายดีเป็นอันดับ 1 พบว่าผู้ที่ซื้อส่วนใหญ่มีอายุตั้งแค่ 17 - 25 ปี และสินค้าชิ้นนี้ยังมีราคาที่สามารถผู้ซื้อสามารถจับต้องได้ไม่มีราคาที่แพงเกินไป ส่วนใหญ่แล้วผู้ซื้อนำไปใช้ในการเล่นเกมและมีบางส่วนนำไปใช้ในการทำงาน</h5>
                        <h5 className="text-end">โดย <span className="text-primary">แมว หลับ</span></h5>
                    </div>
                </div>
            </div>
            {/* Blank End */}
        </div>
        {/* Content End */}


        {/* Back to Top */}
        <Link to="" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
    </div>
  )
}

export default Detailpr
