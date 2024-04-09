import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Dataemployees() {

  const [data, setData] = useState([]);

    const deleteRow = (rowId) => {
        var row = document.getElementById(rowId);
        if (row) {
            row.parentNode.removeChild(row);
        }
    };

    const addEmployee = () => {
      // สร้างแถวใหม่
      var table = document.getElementById("employeeTable");
      var newRow = table.insertRow(table.rows.length);

      // สร้างตารางในแถวใหม่
      var cells = [];
      for (var i = 0; i < 7; i++) {
          cells[i] = newRow.insertCell(i);
          cells[i].style.color = 'white';
      }

      // กำหนดข้อมูลในตาราง
      cells[0].innerHTML = '<button class="btn btn-sm btn-primary">จัดการ</button>';
      cells[1].innerHTML = '65045285';
      cells[2].innerHTML = 'ชินวัตร บุญสมยา';
      cells[3].innerHTML = 'หัวหน้าคลัง';
      cells[4].innerHTML = 'สรุปจำนวนสินค้าภายในคลัง';
      cells[5].innerHTML = '085-xxx-xx38';
      cells[6].innerHTML = '<button class="btn btn-sm btn-primary">Detail</button>';

      // กำหนด id ให้แถวใหม่
      newRow.id = `row${table.rows.length - 1}`;
  };

  // กำหนดค่า initialData
  const initialData = [
    { id: 1, name: 'ชินวัตร บุญสมยา' },
    // เพิ่มข้อมูลเพิ่มเติมตรงนี้
];

  useState(() => {
    setData(initialData);
}, []);

  return (
    <div className="container-fluid position-relative d-flex p-0">
         {/* Spinner Start 
        <div id="spinner" class="show bg-dark position-fixed translate-middle w-100 vh-100 top-50 start-50 d-flex align-items-center justify-content-center">
            <div class="spinner-border text-primary" style="width: 3rem; height: 3rem;" role="status">
                <span class="sr-only">Loading...</span>
            </div>
        </div>
         Spinner End  */}

        <div className="sidebar pe-4 pb-3">
            <div className="navbar bg-secondary navbar-dark">
                <div className="navbar-brand mx-4 mb-3">
                    <h3 className="text-primary" style={{fontSize: "large"}}><img src="./img/logo.png" alt="" style={{width: "80px", height: "80%", borderRadius: "50%"}} /> <span style={{fontSize: "15px"}}> Storage Corporation</span></h3>
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
                    <Link to="/dataemployees" className="nav-item nav-link active"><i className="fa fa-user me-2"></i>Data Employees</Link>
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
                <div className="text-center rounded p-4" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0 me-auto">ข้อมูลพนักงานคลังที่1</h6>
                        <button className="btn btn-primary"> เพิ่มพนักงาน</button>
                        <form className="d-none d-md-flex ms-4" style={{width: "20%", padding: "10px"}}>
                            <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                        </form>
                    </div>
                    <div className="table-responsive">
                        <table className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">จัดการสมาชิก</th>
                                    <th scope="col">รหัสสมาชิก</th>
                                    <th scope="col">ชื่อ</th>
                                    <th scope="col">ตำแหน่ง</th>
                                    <th scope="col">หน้าที่</th>
                                    <th scope="col">เบอร์โทรติดต่อ</th>
                                    <th scope="col">ข้อมูลส่วนตัว</th>
                                </tr>
                            </thead>
                            <tbody>
                              {data.map((row, index) => (
                                <tr key={row.id} id={row.id} className="text-white">
                                <td><button className="btn btn-sm btn-primary" onClick={() => deleteRow(row.id)}>จัดการ</button></td>
                                <td>65045285</td>
                                <td>{row.name}</td>
                                <td>หัวหน้าคลัง</td>
                                <td>สรุปจำนวนสินค้าภายในคลัง</td>
                                <td>085-xxx-xx38</td>
                                <td><Link to="/detailpr" className="btn btn-sm btn-primary">Detail</Link></td>
                            </tr>
                              ))}
                                <tr className="text-white">
                                    <td><Link to="" className="btn btn-sm btn-primary">จัดการ</Link></td>
                                    <td>65045901</td>
                                    <td>อัครนาจ ตุลาธาร</td>
                                    <td>หัวหน้าขนส่ง</td>
                                    <td>ดูแลและควบคุมการทำงานสมาชิกทีมขนส่ง</td>
                                    <td>082-xxx-xx69</td>
                                    <td><Link to="" className="btn btn-sm btn-primary">Detail</Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><Link to="" className="btn btn-sm btn-primary">จัดการ</Link></td>
                                    <td>65057556</td>
                                    <td>ณภัทร ใจตั้งมั่น</td>
                                    <td>ผู้จัดการคลัง</td>
                                    <td>สรุปรายงานคลังสินค้า</td>
                                    <td>095-xxx-xx45</td>
                                    <td><Link to="" className="btn btn-sm btn-primary">Detail</Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><Link to="" className="btn btn-sm btn-primary">จัดการ</Link></td>
                                    <td>65072528</td>
                                    <td>ปฐมพร โตกล่ำ</td>
                                    <td>หัวหน้าการบัญชี</td>
                                    <td>สรุปยอดต้นทุนและกำไร</td>
                                    <td>062-xxx-xx49</td>
                                    <td><Link to="" className="btn btn-sm btn-primary">Detail</Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><Link to="" className="btn btn-sm btn-primary">จัดการ</Link></td>
                                    <td>65072713</td>
                                    <td>นวรัตน์ พัชร์นันทพร</td>
                                    <td>ผู้ดูแลระบบการทำงาน</td>
                                    <td>ดูแลระบบงานภายในคลัง</td>
                                    <td>093-xxx-xx56</td>
                                    <td><Link to="" className="btn btn-sm btn-primary">Detail</Link></td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
            {/* คลังที่ 2 */}
            <div className="container-fluid pt-4 px-4">
                <div className="text-center rounded p-4" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                    <div className="d-flex align-items-center justify-content-between mb-4">
                        <h6 className="mb-0 me-auto">ข้อมูลพนักงานคลังที่2</h6>
                        <button className="btn btn-primary" onClick={addEmployee}> เพิ่มพนักงาน</button>
                        <form className="d-none d-md-flex ms-4" style={{width: "20%", padding: "10px"}}>
                            <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                        </form>
                    </div>
                    <div className="table-responsive">
                        <table id="employeeTable" className="table text-start align-middle table-bordered table-hover mb-0">
                            <thead>
                                <tr className="text-white">
                                    <th scope="col">จัดการสมาชิก</th>
                                    <th scope="col">รหัสสมาชิก</th>
                                    <th scope="col">ชื่อ</th>
                                    <th scope="col">ตำแหน่ง</th>
                                    <th scope="col">หน้าที่</th>
                                    <th scope="col">เบอร์โทรติดต่อ</th>
                                    <th scope="col">ข้อมูลส่วนตัว</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="text-white">
                                    <td><Link to="" className="btn btn-sm btn-primary">จัดการ</Link></td>
                                    <td>65045901</td>
                                    <td>อัครนาจ ตุลาธาร</td>
                                    <td>หัวหน้าขนส่ง</td>
                                    <td>ดูแลและควบคุมการทำงานสมาชิกทีมขนส่ง</td>
                                    <td>082-xxx-xx69</td>
                                    <td><Link to="" className="btn btn-sm btn-primary">Detail</Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><Link to="" className="btn btn-sm btn-primary">จัดการ</Link></td>
                                    <td>65057556</td>
                                    <td>ณภัทร ใจตั้งมั่น</td>
                                    <td>ผู้จัดการคลัง</td>
                                    <td>สรุปรายงานคลังสินค้า</td>
                                    <td>095-xxx-xx45</td>
                                    <td><Link to="" className="btn btn-sm btn-primary">Detail</Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><Link to="" className="btn btn-sm btn-primary">จัดการ</Link></td>
                                    <td>65072528</td>
                                    <td>ปฐมพร โตกล่ำ</td>
                                    <td>หัวหน้าการบัญชี</td>
                                    <td>สรุปยอดต้นทุนและกำไร</td>
                                    <td>062-xxx-xx49</td>
                                    <td><Link to="" className="btn btn-sm btn-primary">Detail</Link></td>
                                </tr>
                                <tr className="text-white">
                                    <td><Link to="" className="btn btn-sm btn-primary">จัดการ</Link></td>
                                    <td>65072713</td>
                                    <td>นวรัตน์ พัชร์นันทพร</td>
                                    <td>ผู้ดูแลระบบการทำงาน</td>
                                    <td>ดูแลระบบงานภายในคลัง</td>
                                    <td>093-xxx-xx56</td>
                                    <td><Link to="" className="btn btn-sm btn-primary">Detail</Link></td>
                                </tr>
                            </tbody>
                        </table>
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

export default Dataemployees