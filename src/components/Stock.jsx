import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'


function Stock() {

  
  const [blackStock, setBlackStock] = useState();
  const [whiteStock, setWhiteStock] = useState();
  const [note, setNote] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentStock, setCurrentStock] = useState({
      SH100: 40,
      SH101: 15,
      SH102: 25
  });

  //reset ค่าที่ใส่ในinput
  const resetInputs = () => {
    setBlackStock('');
    setWhiteStock('');
    setNote('');
}

 // เรียก popup เพิ่มสต๊อก
  const openEditModal = () => {
      setIsModalOpen(true);
      resetInputs();
  }

  const closeEditModal = () => {
      setIsModalOpen(false);
      resetInputs();
  }
  // เรียก popup ลบสต๊อก
  const openDeleteModal = () => {
    setIsDeleteModalOpen(true)
    resetInputs();
  }

  const closeDeleteModal = () => {
    setIsDeleteModalOpen(false);
    resetInputs();
}

  //ฟังชันเพิ่มสต็อก
  const confirmEdit = () => {
      // ดึงข้อมูลที่แก้ไขจาก Popup
      let updatedStockValue1 = parseInt(blackStock) || 0;
      let updatedStockValue2 = parseInt(whiteStock) || 0;

      // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
      let currentStockValueTD = currentStock.SH100;
      let currentBRValue1 = currentStock.SH101;
      let currentBRValue2 = currentStock.SH102;

      // บวกกับจำนวนที่แก้ไขแล้ว
      let newStockValueTD = currentStockValueTD + updatedStockValue1 + updatedStockValue2;
      let newBRValue1 = currentBRValue1 + updatedStockValue1;
      let newBRValue2 = currentBRValue2 + updatedStockValue2;

      // อัปเดตข้อมูลที่ถูกแก้ไข
      setCurrentStock({
          SH100: newStockValueTD,
          SH101: newBRValue1,
          SH102: newBRValue2
      });

      // ปิด Popup
      closeEditModal();

      console.log("การแก้ไขสต็อก");
      console.log("updatedStockValue1:", updatedStockValue1);
      console.log("updatedStockValue2:", updatedStockValue2);
      console.log("newStockValueTD:", newStockValueTD);
      console.log("newBRValue1:", newBRValue1);
      console.log("newBRValue2:", newBRValue2);
  }

  //ฟังชันลบสต็อก
  const confirmDelete = () => {
      // ดึงข้อมูลที่แก้ไขจาก Popup
      let deletedStockValue1 = parseInt(blackStock) || 0;
      let deletedStockValue2 = parseInt(whiteStock) || 0;

      // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
      let currentStockValueTD = currentStock.SH100;
      let currentBRValue1 = currentStock.SH101;
      let currentBRValue2 = currentStock.SH102;

      // บวกกับจำนวนที่แก้ไขแล้ว
      let newStockValueTD = currentStockValueTD - deletedStockValue1 - deletedStockValue2;
      let newBRValue1 = currentBRValue1 - deletedStockValue1;
      let newBRValue2 = currentBRValue2 - deletedStockValue2;

      // อัปเดตข้อมูลที่ถูกแก้ไข
      setCurrentStock({
      SH100: newStockValueTD,
      SH101: newBRValue1,
      SH102: newBRValue2
  });

      //ปิด popup
      closeDeleteModal();
      console.log("การแก้ไขสต็อก");
      console.log("deletedStockValue1:", deletedStockValue1);
      console.log("deletedStockValue2:", deletedStockValue2);
      console.log("newStockValueTD:", newStockValueTD);
      console.log("newBRValue1:", newBRValue1);
      console.log("newBRValue2:", newBRValue2);
  }

  return (
    <div className="container-fluid position-relative d-flex p-0">
          {/* Sidebar Start */}
          <div className="sidebar pe-4 pb-3">
             <div className="navbar bg-secondary navbar-dark">
                <div className="navbar-brand mx-4 mb-3">
                  <Link to="/dashboard">
                    <h3 className="text-primary" style={{fontSize: "large"}}>
                      <img src="./img/logo.png" alt="" style={{width: "80px", height: "80%", borderRadius: "50%"}} /> 
                        <span style={{fontSize: "15px"}}> Storage Corporation</span>
                    </h3>
                  </Link>
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
                              <Link to="/detailpr" className="dropdown-item">Detail Ranking</Link>
                         </div>
                     </div>
                      <div className="nav-item dropdown">
                        <Link to="" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i className="fa fa-cubes me-2"></i>Stock</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/stock" className="dropdown-item active">warehouse-1</Link>
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
                                     <div div className="ms-2">
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

              {/* <!-- Stock Start --> */}
              <div className="container-fluid pt-4 px-4">
                <div className="row vh-100 rounded align-items-center justify-content-center mx-0" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                      <form className="d-none d-md-flex ms-4 me-auto align-items-center" style={{width: "20%", padding: "10px"}}>
                          <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                      </form>
                      <nav className="mb-0">
                        <span className="text-primary">Stock</span> 
                        <span className="text-muted">โกดัง 1</span>
                      </nav>
                      <div className="col-md-8 text-center">
                          <h3>จัดการสต๊อก</h3>
                          {/* Container Table star */}
                            <div className="table-responsive">
                            {/* Table Start */}
                              <table className="table text-white">
                                  <thead>
                                      <tr className="text-center">
                                        <th rowSpan="2">สินค้า</th>
                                        <th rowSpan="2">รหัสสินค้า &nbsp;</th>
                                        <th rowSpan="2" className="center-text">ชื่อสินค้า &nbsp;</th>
                                        <th rowSpan="2" className="center-text">ราคา &nbsp;</th>
                                        <th rowSpan="2">สต็อก &nbsp;</th>
                                        <th rowSpan="2">จอง &nbsp;</th>
                                        <th rowSpan="2">คงเหลือ &nbsp;</th>
                                        <th rowSpan="2">เพิ่ม/ลด สต็อก &nbsp;</th>
                                      </tr>
                                  </thead>
                                  <tbody>
                                      <tr>
                                        <td><img src="./img/Logi.jpg" alt='' style={{ width: "50px" }} /></td>
                                        <td>SH100
                                          <br />SH101
                                          <br />SH102
                                        </td>
                                        <td className="text-start">
                                          <Link to="/mouse" style={{ fontSize: "13px" }}>Mouse Gaming Logitech</Link>
                                          <br />ดำ
                                          <br />ขาว
                                        </td>
                                        <td><p className="text-primary">1,690&#3647;</p></td>
                                        <td><span className="text-primary">100</span>
                                            <br /><span>40</span>
                                            <br /><span>60</span>
                                        </td>
                                        <td><span className="text-primary">60</span>
                                            <br />25
                                            <br />35
                                        </td>
                                        <td><span className="text-primary" id="span_SH100">{currentStock.SH100}</span>
                                            <br /><span id="span_SH101">{currentStock.SH101}</span>
                                            <br /><span id="span_SH102">{currentStock.SH102}</span>
                                        </td>
                                        <td>
                                          <button className="btn btn-primary btn-sm" onClick={openEditModal}><i className="fas fa-edit"></i></button>
                                          <button className="btn btn-danger btn-sm" onClick={openDeleteModal}><i className="fas fa-trash"></i></button>
                                        </td>
                                        <Modal show={isModalOpen} onHide={closeEditModal}>
                                            <Modal.Header closeButton>
                                              <Modal.Title className="text-primary">เพิ่มสต็อก</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                              <span><b>เพิ่มสต๊อกสีดำ</b></span>
                                              <br />
                                              <input type="number" value={blackStock} onChange={(e) => setBlackStock(e.target.value)} />
                                              <br />
                                              <span><b>เพิ่มสต๊อกสีขาว</b></span>
                                              <br />
                                              <input type="number" value={whiteStock} onChange={(e) => setWhiteStock(e.target.value)} />
                                              <br />
                                              <span><b>หมายเหตุ (เช่น เลขที่เอกสาร)</b></span>
                                              <br />
                                              <input type="text" style={{ width: "100%" }} value={note} onChange={(e) => setNote(e.target.value)} />
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button variant="secondary" onClick={closeEditModal}>ปิด</Button>
                                              <Button variant="primary" onClick={confirmEdit}>ตกลง</Button>
                                            </Modal.Footer>
                                        </Modal>
                                        <Modal show={isDeleteModalOpen} onHide={closeEditModal}>
                                            <Modal.Header closeButton>
                                              <Modal.Title className="text-primary">ลบสต็อก</Modal.Title>
                                            </Modal.Header>
                                            <Modal.Body>
                                              <span><b>ลบสต๊อกสีดำ</b></span>
                                              <br />
                                              <input type="number" value={blackStock} onChange={(e) => setBlackStock(e.target.value)} />
                                              <br />
                                              <span><b>ลบสต๊อกสีขาว</b></span>
                                              <br />
                                              <input type="number" value={whiteStock} onChange={(e) => setWhiteStock(e.target.value)} />
                                              <br />
                                              <span><b>หมายเหตุ (เช่น เลขที่เอกสาร)</b></span>
                                              <br />
                                              <input type="text" style={{ width: "100%" }} value={note} onChange={(e) => setNote(e.target.value)} />
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button variant="secondary" onClick={closeDeleteModal}>ปิด</Button>
                                              <Button variant="primary" onClick={confirmDelete}>ตกลง</Button>
                                            </Modal.Footer>
                                        </Modal>
                                      </tr>
                                      <tr>
                                        <td><img src="./img/Logi-WH.png" alt='' style={{width: "50px"}} /></td>
                                        <td>SH110
                                          <br />SH111
                                          <br />SH112
                                        </td>
                                        <td className="text-start">
                                          <Link to="" style={{fontSize: "13px"}}>LOGITECH WIRELESS LIGHTSPEED GAMING HEADSET</Link>
                                          <br />ดำ
                                          <br />ขาว
                                        </td>
                                        <td><p className="text-primary">4,790&#3647;</p></td>
                                          <td><span className="text-primary">80</span>
                                          <br />35
                                          <br />45
                                        </td>
                                        <td><span className="text-primary">50</span>
                                          <br />25
                                          <br />25
                                        </td>
                                        <td><span className="text-primary" id="span_SH110">30</span>
                                          <br /><span id="span_SH111">10</span>
                                          <br /><span id="span_SH112">20</span>
                                        </td>
                                        <td>
                                          <button className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></button>
                                          <button className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td><img src="./img/F.O.G.png" alt='' style={{width: "50px"}} /></td>
                                        <td>SH120
                                          <br />SH121
                                          <br />SH122
                                          <br />SH123
                                          <br />SH124
                                        </td>
                                        <td className="text-start">
                                          <Link to="" style={{fontSize: "13px"}}>Fear of God - Hoodie</Link>
                                          <br />S
                                          <br />M
                                          <br />L
                                          <br />XL
                                        </td>
                                        <td><p className="text-primary">3,720&#3647;</p></td>
                                        <td><span className="text-primary">385</span>
                                          <br />87
                                          <br />83
                                          <br />123
                                          <br />92
                                        </td>
                                        <td><span className="text-primary">171</span>
                                          <br />32
                                          <br />35
                                          <br />55
                                          <br />49
                                        </td>
                                        <td><span className="text-primary" id="span_SH120">214</span>
                                          <br /><span id="span_SH121">55</span>
                                          <br /><span id="span_SH122">48</span>
                                          <br /><span id="span_SH123">68</span>
                                          <br /><span id="span_SH124">43</span>
                                        </td>
                                        <td>
                                          <button className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></button>
                                          <button className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td><img src="./img/joy.png" alt='' style={{width: "50px"}} /></td>
                                        <td>SH130
                                          <br />SH131
                                          <br />SH132
                                          <br />SH133
                                          <br />SH134
                                          <br />SH135
                                          <br />SH136
                                        </td>
                                        <td className="text-start">
                                          <Link to="" style={{fontSize: "13px"}}>Joy Ps-5</Link>
                                          <br />ดำ
                                          <br />ขาว
                                          <br />ม่วง
                                          <br />ฟ้า
                                          <br />แดง
                                          <br />ชมพู
                                        </td>
                                        <td><p className="text-primary">2,390&#3647;</p></td>
                                        <td><span className="text-primary">148</span>
                                          <br />25
                                          <br />15
                                          <br />35
                                          <br />15
                                          <br />28
                                          <br />30
                                        </td>
                                        <td><span className="text-primary">100</span>
                                          <br />25
                                          <br />15
                                          <br />25
                                          <br />10
                                          <br />12
                                          <br />13 
                                        </td>
                                        <td><span className="text-primary" id="span_SH130">48</span>
                                          <br /><span id="span_SH131">0</span>
                                          <br /><span id="span_SH132">0</span>
                                          <br /><span id="span_SH133">10</span>
                                          <br /><span id="span_SH134">5</span>
                                          <br /><span id="span_SH135">16</span>
                                          <br /><span id="span_SH136">17</span>
                                        </td>
                                        <td>
                                          <button className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></button>
                                          <button className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                                        </td>
                                      </tr>
                                      <tr>
                                        <td><img src="./img/palm-angle.png" alt='' style={{width: "50px"}} /></td>
                                        <td>SH140
                                          <br />SH141
                                        </td>
                                        <td className="text-start">
                                          <Link to="" style={{fontSize: "13px"}}>PALM ANGELS T-Shirt</Link>
                                          <br />ดำ
                                        </td>
                                        <td><p className="text-primary">18,298&#3647;</p></td>
                                        <td><span className="text-primary">15</span>
                                          <br />15
                                        </td>
                                        <td><span className="text-primary">10</span>
                                          <br />10
                                        </td>
                                        <td><span className="text-primary" id="span_SH140">5</span>
                                          <br /><span id="span_SH141">5</span>
                                        </td>
                                        <td>
                                          <button className="btn btn-primary btn-sm"><i className="fas fa-edit"></i></button>
                                          <button className="btn btn-danger btn-sm"><i className="fas fa-trash"></i></button>
                                        </td>
                                      </tr>
                                  </tbody>
                              </table>
                            {/* Table End */}
                            </div>
                          {/* Container Table end */}
                      </div>
                </div>
              </div>
              {/* <!-- Stock Start --> */}
          </div>
          {/* Content End */}
    </div>


  )
}

export default Stock
