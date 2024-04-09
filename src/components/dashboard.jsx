import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

const Dashboard = () => {

  const worldwideSalesRef = useRef(null);
    const salesRevenueRef = useRef(null);

    useEffect(() => {
        // ทำลาย Chart ที่มีอยู่
        Chart.getChart(worldwideSalesRef.current)?.destroy();
        Chart.getChart(salesRevenueRef.current)?.destroy();

        // กราฟยอดขายในแต่ละปี
        new Chart(worldwideSalesRef.current.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['2016', '2017', '2018', '2019', '2020', '2021', '2022'],
                datasets: [{
                    label: 'USA',
                    data: [15, 30, 55, 65, 60, 80, 95],
                    backgroundColor: 'rgba(235, 22, 22, .7)'
                },
                {
                    label: 'UK',
                    data: [8, 35, 40, 60, 70, 55, 75],
                    backgroundColor: 'rgba(235, 22, 22, .5)'
                },
                {
                    label: 'AU',
                    data: [12, 25, 45, 55, 65, 70, 60],
                    backgroundColor: 'rgba(235, 22, 22, .3)'
                }]
            },
            options: {
                responsive: true
            }
        });

        // กราฟยอดขาย & รายได้
        new Chart(salesRevenueRef.current.getContext('2d'), {
            type: 'line',
            data: {
                labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                datasets: [{
                    label: 'ยอดขาย',
                    data: [1000, 1200, 900, 1500, 1000, 1400, 1100],
                    borderColor: 'rgba(75, 192, 192, 1)',
                    backgroundColor: 'rgba(75, 192, 192, 0.2)',
                    tension: 0.3
                },
                {
                    label: 'รายได้',
                    data: [800, 1000, 750, 1200, 800, 1100, 850],
                    borderColor: 'rgba(255, 99, 132, 1)',
                    backgroundColor: 'rgba(255, 99, 132, 0.2)',
                    tension: 0.3
                }]
            },
            options: {
                responsive: true
            }
        });
    }, []);
  
  return (
    <div className="container-fluid position-relative d-flex p-0">

        {/* Sidebar Start */}
        <div className="sidebar pe-4 pb-3">
            <div className="navbar bg-secondary navbar-dark">
                <div className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary" style={{fontSize: "large"}} ><img src="./img/logo.png" alt="" style={{width: "80px" , height: "80%" , borderRadius: "50%"}} /> <span style={{fontSize: "15px"}}> Storage Corporation</span></h3>
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
                    <Link to="/dashboard" className="nav-item nav-link active"><i className="fa fa-tachometer-alt me-2"></i>Dashboard</Link>
                    <Link to="/dataemployees" className="nav-item nav-link"><i className="fa fa-user me-2"></i>Data Employees</Link>
                    <div className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle" data-bs-toggle="dropdown"><i className="fa fa-chart-bar me-2"></i>Worldwide Sales</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/sales" className="dropdown-item">Sales</Link>
                            <Link to="/detailpr" className="dropdown-item">Detail Ranking</Link>
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
            <Link to="/" className="nav-item nav-link mt-lg-5"><i className="fa fa-sign-out-alt"></i> Log Out</Link>
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
                            <Link to="/adminProfile" className="fa fa-user dropdown-item"> My Profile</Link>
                            <Link to="" className="dropdown-item"><i className="fas fa-cog"></i> Settings</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-sign-out-alt"></i> Log Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}


            {/* Sale & Revenue Start */}
            <div className="container-fluid pt-4 px-4">
                <div className="row g-4">
                    <div className="col-sm-6 col-xl-3">
                        <div className="rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                            <i className="fa fa-chart-line fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2 text-white">ยอดขายวันนี้</p>
                                <h6 className="mb-0 text-end">558,689&#3647;</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                            <Link to="" className="fa fa-chart-bar fa-3x text-primary"></Link>
                            <div className="ms-3">
                                <p className="mb-2 text-white">ยอดขายรายเดือน</p>
                                <h6 className="mb-0 text-end">18,578,458&#3647;</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                            <i className="fa fa-chart-area fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2 text-white">รายได้วันนี้</p>
                                <h6 className="mb-0 text-end">450,000&#3647;</h6>
                            </div>
                        </div>
                    </div>
                    <div className="col-sm-6 col-xl-3">
                        <div className="rounded d-flex align-items-center justify-content-between p-4" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                            <i className="fa fa-chart-pie fa-3x text-primary"></i>
                            <div className="ms-3">
                                <p className="mb-2 text-white">รายได้รวมเดือนนี้</p>
                                <h6 className="mb-0 text-end">15,785,986&#3647;</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* Sale & Revenue End */}


            {/* Sales Chart Start */}
            <div className="container-fluid pt-4 px-4">
            <div className="row g-4">
                <div className="col-sm-12 col-xl-6">
                    <div className="text-center rounded p-4" style={{ backgroundColor: "rgb(0, 174, 255)" }}>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">ยอดขายในแต่ละปี</h6>
                            <Link to="/worldwidesales" style={{ color: "white" }}>แสดงเพิ่มเติม</Link>
                        </div>
                        <canvas ref={worldwideSalesRef} id="worldwide-sales"></canvas>
                    </div>
                </div>
                <div className="col-sm-12 col-xl-6">
                    <div className="text-center rounded p-4" style={{ backgroundColor: "rgb(0, 174, 255)" }}>
                        <div className="d-flex align-items-center justify-content-between mb-4">
                            <h6 className="mb-0">ยอดขาย & รายได้</h6>
                            <Link to="" style={{ color: "white" }}>แสดงเพิ่มเติม</Link>
                        </div>
                        <canvas ref={salesRevenueRef} id="sales-revenue"></canvas>
                    </div>
                </div>
            </div>
        </div>
            {/* Sales Chart End */}


            {/* Recent Sales Start */}
            <div className="container-fluid pt-4 px-4">
                <div className="text-center rounded p-4" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0">การขายล่าสุด & อันดับสินค้าขายดี</h6>
                        <Link to="/sales" style={{color: "white"}}>แสดงเพิ่มเติม</Link>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">-</th>
                                    <th scope="col">วันที่</th>
                                    <th scope="col">รหัสใบเสร็จ</th>
                                    <th scope="col">รหัสสินค้า</th>
                                    <th scope="col">รหัสลูกค้า</th>
                                    <th scope="col">ลูกค้า</th>
                                    <th scope="col">จำนวน</th>
                                    <th scope="col">สถานะ</th>
                                    <th scope="col">รายละเอียดการขนส่ง</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-white">
                                    <td><input className="form-check-input" type="checkbox" defaultChecked /></td>
                                    <td>27 november 2023</td>
                                    <td>SH-0123</td>
                                    <td>SH101</td>
                                    <td>bernard785</td>
                                    <td>Bernard Arnault</td>
                                    <td>1,690</td>
                                    <td>รับสินค้าแล้ว</td>
                                    <td><Link to="/trackingdetail"><img src="img/QrCode.jpg" alt="QR Code" className="mb-4" style={{width: "100px", height: "100px"}} /></Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>28 november 2023</td>
                                    <td>SH-0124</td>
                                    <td>SH111</td>
                                    <td>elon425</td>
                                    <td>Elon Musk</td>
                                    <td>4,790</td>
                                    <td>อยู่ระหว่างการขนส่ง</td>
                                    <td><Link to=""><img src="img/QrCode.jpg" alt="QR Code" className="mb-4" style={{width: "100px", height: "100px"}} /></Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>28 november 2023</td>
                                    <td>SH-0125</td>
                                    <td>SH121</td>
                                    <td>jeffA693</td>
                                    <td>Jeff Bezos</td>
                                    <td>3,720</td>
                                    <td>อยู่ระหว่างการขนส่ง</td>
                                    <td><Link to=""><img src="img/QrCode.jpg" alt="QR Code" className="mb-4" style={{width: "100px", height: "100px"}} /></Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>29 november 2023</td>
                                    <td>SH-0126</td>
                                    <td>SH131</td>
                                    <td>larryA978</td>
                                    <td>Larry Ellison</td>
                                    <td>2,390</td>
                                    <td>Packing</td>
                                    <td><Link to=""><img src="img/QrCode.jpg" alt="QR Code" className="mb-4" style={{width: "100px", height: "100px"}} /></Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><input className="form-check-input" type="checkbox" /></td>
                                    <td>29 november 2023</td>
                                    <td>SH-0127</td>
                                    <td>SH141</td>
                                    <td>warrenA159</td>
                                    <td>Warren Buffett</td>
                                    <td>18,298</td>
                                    <td>Packing</td>
                                    <td><Link to=""><img src="img/QrCode.jpg" alt="QR Code" className="mb-4" style={{width: "100px", height: "100px"}} /></Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* Recent Sales End */}
        </div>
        {/* Content End */}

        {/* Back to Top */}
        <Link to="" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
    </div>
  )
}

export default Dashboard