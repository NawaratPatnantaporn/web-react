import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { Link } from 'react-router-dom'

function Mouse() {

    const [blackStock, setBlackStock] = useState('');
    const [note, setNote] = useState('');
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
    const [currentStock, setCurrentStock] = useState({
      h_SH101: 40,
      SH101: 15,
    });

    //reset ค่าที่ใส่ในinput
    const resetInputs = () => {
      setBlackStock('');
      setNote('');
    }

    //เพิ่มสต็อก
    const openEditModal = () => {
        setIsModalOpen(true);
        resetInputs();
    }

    const closeEditModal = () => {
        setIsModalOpen(false);
        resetInputs();
    }

    //ลบสต็อก
    const openDeleteModal = () => {
      setIsDeleteModalOpen(true);
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

    // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
    let currentStockValueTD = currentStock.h_SH101;
    let currentBRValue1 = currentStock.SH101;

    // บวกกับจำนวนที่แก้ไขแล้ว
    let newStockValueTD = currentStockValueTD + updatedStockValue1;
    let newBRValue1 = currentBRValue1 + updatedStockValue1;

    // อัปเดตข้อมูลที่ถูกแก้ไข
    setCurrentStock({
        h_SH101: newStockValueTD,
        SH101: newBRValue1,
    });

    // ปิด Popup
    closeEditModal();

    console.log("การแก้ไขสต็อก");
    console.log("updatedStockValue1:", updatedStockValue1);
    console.log("newStockValueTD:", newStockValueTD);
    console.log("newBRValue1:", newBRValue1);
    }

    //ฟังชันลบสต็อก
    const confirmDelete = () => {
    // ดึงข้อมูลที่แก้ไขจาก Popup
    let deletedStockValue1 = parseInt(blackStock) || 0;

    // ดึงข้อมูลสต็อกที่มีอยู่แล้ว
    let currentStockValueTD = currentStock.h_SH101;
    let currentBRValue1 = currentStock.SH101;

    // บวกกับจำนวนที่แก้ไขแล้ว
    let newStockValueTD = currentStockValueTD - deletedStockValue1;
    let newBRValue1 = currentBRValue1 - deletedStockValue1;

    // อัปเดตข้อมูลที่ถูกแก้ไข
    setCurrentStock({
    h_SH101: newStockValueTD,
    SH101: newBRValue1,
});

    //ปิด popup
    closeDeleteModal();
    console.log("การแก้ไขสต็อก");
    console.log("deletedStockValue1:", deletedStockValue1);
    console.log("newStockValueTD:", newStockValueTD);
    console.log("newBRValue1:", newBRValue1);
}

  return (
    <div class="container-fluid position-relative d-flex p-0">

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
                        <Link to="" className="nav-link dropdown-toggle active" data-bs-toggle="dropdown"><i className="bi bi-mouse me-2"></i>Mouse</Link>
                        <div className="dropdown-menu bg-transparent border-0">
                            <Link to="/mouse" className="dropdown-item active">Mouse Gaming Logitech</Link>
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
                <div className="row h-100 rounded align-items-center justify-content-center mx-0" style={{backgroundColor: "rgb(0, 174, 255)"}}>
                    <form className="d-none d-md-flex ms-4 me-auto align-items-center" style={{width: "20%", padding: "10px"}}>
                        <input className="form-control bg-dark border-0" type="search" placeholder="Search" />
                    </form>
                    <nav className="mb-3">
                        <Link to="">Stock</Link> 
                        <Link to="/stock">โกดัง 1</Link> 
                        <Link to="">Mouse</Link> 
                        <span className="text-muted">Mouse Gaming Logitech</span>
                    </nav>
                    <div className="container-fluid">
                        <div className="row g-2 mb-2 mb-lg-2">
                            <div className="col-12 col-md-10 col-lg-12 col-xl-10">
                                <div className="d-flex flex-column align-items-center justify-content-center rounded-3 text-center p-5 h-100 mx-auto">
                                    <div className="d-flex flex-row">
                                        <div className="col-md-6 w-75">
                                            <img src="./img/Logi-b.jpg" alt='' />
                                            <div className="mt-2">
                                                <button className="btn btn-primary btn-lg me-2" onClick={openEditModal}><i className="fas fa-edit"></i>เพิ่มสต็อก</button>
                                                <button className="btn btn-danger btn-lg" onClick={openDeleteModal}><i className="fas fa-trash">ลดสต็อก</i></button>
                                            </div>
                                            <Modal show={isModalOpen} onHide={closeEditModal}>
                                              <Modal.Header closeButton>
                                                <Modal.Title className="text-primary">เพิ่มสต็อก</Modal.Title>
                                              </Modal.Header>
                                              <Modal.Body>
                                                <span><b>เพิ่มสต๊อกสีดำ</b></span>
                                                <br />
                                                <input type="number" value={blackStock} onChange={(e) => setBlackStock(e.target.value)} />
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
                                              <span><b>หมายเหตุ (เช่น เลขที่เอกสาร)</b></span>
                                              <br />
                                              <input type="text" style={{ width: "100%" }} value={note} onChange={(e) => setNote(e.target.value)} />
                                            </Modal.Body>
                                            <Modal.Footer>
                                              <Button variant="secondary" onClick={closeDeleteModal}>ปิด</Button>
                                              <Button variant="primary" onClick={confirmDelete}>ตกลง</Button>
                                            </Modal.Footer>
                                            </Modal>
                                        </div>
                                        <div className="col-md-10 text-start">
                                            <h3 className="text-primary mb-3 lh-sm">Mouse Gaming Logitech</h3>
                                            <h4>รหัสสินค้า: SH101</h4>
                                            <h4>สี: ดำ</h4>
                                            <h4>ประเภท: เครื่องใช้ไฟฟ้า</h4>
                                            <h4>สถานที่: โกดัง 1</h4>
                                            <div className="stock-info">
                                                <h4>สต็อก:</h4> &nbsp; <h4 id="h_SH101"> {currentStock.h_SH101}</h4>
                                            </div>
                                                <h4>จอง: 25</h4>
                                            <div className="stock-info">
                                                <h4>คงเหลือ:</h4> &nbsp; <h4 id="SH101">{currentStock.SH101}</h4>
                                            </div>        
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="container-fluid">
                        <div className="row g-2 mb-2 mb-lg-2">
                            <div className="col-12 col-md-10 col-lg-12 col-xl-10">
                                <div className="d-flex flex-column align-items-center justify-content-center rounded-3 text-center p-5 h-100 mx-auto">
                                    <div className="d-flex flex-row">
                                        <div className="col-md-6 w-75">
                                            <img src="./img/Logi-w.jpg" alt='' />
                                            <div className="mt-2">
                                                <button className="btn btn-primary btn-lg me-2"><i className="fas fa-edit" onclick="openEditModal4();"></i>เพิ่มสต็อก</button>
                                                <button className="btn btn-danger btn-lg" ><i className="fas fa-trash" onclick="openDeleteModal4();"></i>ลดสต็อก</button>
                                            </div>
                                        </div>
                                        <div className="col-md-10 text-start">
                                            <h3 className="text-primary mb-3 lh-sm">Mouse Gaming Logitech</h3>
                                            <h4>รหัสสินค้า: SH103</h4>
                                            <h4>สี: ขาว</h4>
                                            <h4>ประเภท: เครื่องใช้ไฟฟ้า</h4>
                                            <h4>สถานที่: โกดัง 1</h4>
                                            <div className="stock-info">
                                                <h4>สต็อก:</h4> &nbsp; <h4 id="h_SH102"> 60</h4>
                                            </div>
                                                <h4>จอง: 35</h4>
                                            <div className="stock-info">
                                                <h4>คงเหลือ:</h4> &nbsp; <h4 id="SH102"> 25</h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
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

export default Mouse
