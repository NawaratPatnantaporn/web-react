import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import Chart from 'chart.js/auto';

function WorldwideSales() {

  const worldwideSalesRef = useRef(null);

  useEffect(() => {
    // ทำลาย Chart ที่มีอยู่
    Chart.getChart(worldwideSalesRef.current)?.destroy();

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
}, []);

useEffect(() => {
  calculateProfitRate();
}, []);

const [results, setResults] = useState({
    ty2: '',
    ty3: '',
    ty4: '',
    ty5: '',
    ty6: '',
    ty7: '',
    ty8: '',
    ty9: ''
  });

const calculateProfitRate = () => {
    // ดึงค่าจาก id ly และ id ly2
    var lyValue = parseFloat(document.getElementById('ly').innerText.replace(',', '').replace(' &#3647;', ''));
    var ly2Value = parseFloat(document.getElementById('ly2').innerText.replace(',', '').replace(' &#3647;', ''));
    var ly3Value = parseFloat(document.getElementById('ly3').innerText.replace(',', '').replace(' &#3647;', ''));
    var ly4Value = parseFloat(document.getElementById('ly4').innerText.replace(',', '').replace(' &#3647;', ''));
    var ly5Value = parseFloat(document.getElementById('ly5').innerText.replace(',', '').replace(' &#3647;', ''));
    var ly6Value = parseFloat(document.getElementById('ly6').innerText.replace(',', '').replace(' &#3647;', ''));
    var ly7Value = parseFloat(document.getElementById('ly7').innerText.replace(',', '').replace(' &#3647;', ''));
    var ly8Value = parseFloat(document.getElementById('ly8').innerText.replace(',', '').replace(' &#3647;', ''));
  
    // คำนวณอัตรากำไรเป็นเปอร์เซ็นต์
    var profitRate = ((ly2Value - lyValue) / lyValue) * 100;
    var profitRate2 = ((ly3Value - ly2Value) / ly2Value) * 100;
    var profitRate3 = ((ly4Value - ly3Value) / ly3Value) * 100;
    var profitRate4 = ((ly5Value - ly4Value) / ly4Value) * 100;
    var profitRate5 = ((ly6Value - ly5Value) / ly5Value) * 100;
    var profitRate6 = ((ly7Value - ly6Value) / ly6Value) * 100;
    var profitRate7 = ((ly8Value - ly7Value) / ly7Value) * 100;
  
    var lyValueText = document.getElementById('ly').innerText;
    var lyValueCleaned = parseFloat(lyValueText.replace(/,/g, '').replace(/ &#3647;/g, ''));
  
    if (!isNaN(lyValueCleaned)) {
        var profitRate8 = ((lyValueCleaned - 5000000) / 5000000) * 100;
    } else {
        console.error("Error: Invalid value for 'ly'");
    }
  
    // แสดงผลที่ id ty
    setResults({
        ty2: profitRate.toFixed(2) + '%',
        ty3: profitRate2.toFixed(2) + '%',
        ty4: profitRate3.toFixed(2) + '%',
        ty5: profitRate4.toFixed(2) + '%',
        ty6: profitRate5.toFixed(2) + '%',
        ty7: profitRate6.toFixed(2) + '% (ปัจจุบัน)',
        ty8: profitRate7.toFixed(2) + '%',
        ty9: profitRate8.toFixed(2) + '%'
    });
  };

  return (
    <div className="container-fluid position-relative d-flex p-0">
        {/* Spinner Start
        <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
        Spinner End */}

        {/* Sidebar Start */}
        <div className="sidebar pe-4 pb-3">
            <nav className="navbar bg-secondary navbar-dark">
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
                    <div class="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i className="fa fa-chart-bar me-2"></i>Worldwide Sales</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/sales" className="dropdown-item">Sales</Link>
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
            </nav>
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
                            <Link to="/adminProfile" className="fa fa-user dropdown-item"> My Profile</Link>
                            <Link to="" className="dropdown-item"><i className="fas fa-cog"></i> Settings</Link>
                            <Link to="/" className="dropdown-item"><i className="fa fa-sign-out-alt"></i> Log Out</Link>
                        </div>
                    </div>
                </div>
            </nav>
            {/* Navbar End */}

            {/* Blank Start */}
            <div className="container-fluid pt-4 px-4">
                <div className="row vh-100 rounded align-items-center justify-content-center mx-0" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                    <div className="row g-sm-1 w-100 mx-auto">
                        <div className="h-100">
                            <h6 className="mb-4">ยอดขายในแต่ละปี</h6>
                            <canvas ref={worldwideSalesRef} id="worldwide-sales"></canvas>
                        </div>
                    </div>
                </div>
                <div className="rounded h-100 p-4" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                    <h6 className="mb-4">เปรียบเทียบยอดขาย</h6>
                    <div className="table-responsive">
                        <table className="table text-white">
                            <thead>
                                <tr>
                                    <th scope="col">ปี</th>
                                    <th scope="col">ยอดขายเฉลี่ยต่อวัน</th>
                                    <th scope="col">ยอดขายเฉลี่ยต่อเดือน</th>
                                    <th scope="col">รายได้รวมเฉลี่ยต่อวัน</th>
                                    <th scope="col">รายได้รวมเฉลี่ยต่อเดือน</th>
                                    <th scope="col">กำไรเฉลี่ยต่อปี</th>
                                    <th scope="col">อัตรากำไรจากแต่ละปี(%)</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">2016</th>
                                    <td><span>50,000 &#3647;</span></td>
                                    <td><span>1,700,000 &#3647;</span></td>
                                    <td><span>40,000 &#3647;</span></td>
                                    <td><span>1,500,000 &#3647;</span></td>
                                    <td><span id="ly">18,000,000 &#3647;</span></td>
                                    <td><span id="ty9" >{results.ty2}</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">2017</th>
                                    <td><span>100,000 &#3647;</span></td>
                                    <td><span>3,200,000 &#3647;</span></td>
                                    <td><span>90,000 &#3647;</span></td>
                                    <td><span>3,000,000 &#3647;</span></td>
                                    <td><span id="ly2">36,000,000 &#3647;</span></td>
                                    <td><span id="ty2">{results.ty3}</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">2018</th>
                                    <td><span>150,000 &#3647;</span></td>
                                    <td><span>4,750,000 &#3647;</span></td>
                                    <td><span>140,000 &#3647;</span></td>
                                    <td><span>4,550,000 &#3647;</span></td>
                                    <td><span id="ly3">54,600,000 &#3647;</span></td>
                                    <td><span id="ty3">{results.ty4}</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">2019</th>
                                    <td><span>200,000 &#3647;</span></td>
                                    <td><span>6,250,000 &#3647;</span></td>
                                    <td><span>190,000 &#3647;</span></td>
                                    <td><span>6,000,000 &#3647;</span></td>
                                    <td><span id="ly4">72,000,000 &#3647;</span></td>
                                    <td><span id="ty4">{results.ty5}</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">2020</th>
                                    <td><span>250,000 &#3647;</span></td>
                                    <td><span>7,830,000 &#3647;</span></td>
                                    <td><span>240,000 &#3647;</span></td>
                                    <td><span>7,630,000 &#3647;</span></td>
                                    <td><span id="ly5">91,560,000 &#3647;</span></td>
                                    <td><span id="ty5">{results.ty6}</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">2021</th>
                                    <td><span>300,000 &#3647;</span></td>
                                    <td><span>9,362,000 &#3647;</span></td>
                                    <td><span>290,000 &#3647;</span></td>
                                    <td><span>9,100,000 &#3647;</span></td>
                                    <td><span id="ly6">109,200,000 &#3647;</span></td>
                                    <td><span id="ty6">{results.ty7}</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">2022</th>
                                    <td><span>350,000 &#3647;</span></td>
                                    <td><span>11,250,000 &#3647;</span></td>
                                    <td><span>340,000 &#3647;</span></td>
                                    <td><span>10,000,000 &#3647;</span></td>
                                    <td><span id="ly7">120,000,000 &#3647;</span></td>
                                    <td><span id="ty7">{results.ty8}</span></td>
                                </tr>
                                <tr>
                                    <th scope="row">2023</th>
                                    <td><span>500,000 &#3647; (ปัจจุบัน)</span></td>
                                    <td><span>18,950,000 &#3647; (ปัจจุบัน)</span></td>
                                    <td><span>490,000 &#3647; (ปัจจุบัน)</span></td>
                                    <td><span>16,000,000 &#3647; (ปัจจุบัน)</span></td>
                                    <td><span id="ly8">192,000,000 &#3647; (ปัจจับัน)</span></td>
                                    <td><span id="ty8">{results.ty9}</span></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                    {/* <button className="btn btn-primary text-end" onClick={calculateProfitRate}> คำนวณ</button> */}
                </div>
            </div>
        </div>
        {/* Content End */}

        {/* Back to Top */}
        <Link to="" className="btn btn-lg btn-primary btn-lg-square back-to-top"><i className="bi bi-arrow-up"></i></Link>
    </div>
  )
}

export default WorldwideSales