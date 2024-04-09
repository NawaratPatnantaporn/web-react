import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Admin from './components/admin';
import AdminProfile from './components/AdminProfile';
import Dashboard from './components/dashboard';
import Dataemployees from './components/Dataemployees';
import Detailpr from './components/Detailpr';
import Forgotpass from './components/forgotpass';
import Index from './components/index';
import Member from './components/Member';
import Membermouse from './components/Membermouse';
import Memberstock from './components/Memberstock';
import Morder from './components/Morder';
import Morderdetail from './components/Morderdetail';
import Mouse from './components/Mouse';
import Msales from './components/Msales';
import Mtrackingdetail from './components/Mtrackingdetail';
import Mtrackingsearch from './components/Mtrackingsearch';
import Sales from './components/Sales';
import Signup from './components/signup';
import Stock from './components/Stock';
import Teamdetail from './components/Teamdetail';
import Trackingdetail from './components/Trackingdetail';
import Trackingsearch from './components/Trackingsearch';
import WorldwideSales from './components/WorldwideSales';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/admin' element={<Admin />} />
        <Route path='/adminProfile' element={<AdminProfile />} />
        <Route path='/dashboard' element={<Dashboard />} />
        <Route path='/dataemployees' element={<Dataemployees />} />
        <Route path='/detailpr' element={<Detailpr />} />
        <Route path='/forgotpass' element={<Forgotpass />} />
        <Route path='/' element={<Index />} />
        <Route path='/member' element={<Member />} />
        <Route path='/membermouse' element={<Membermouse />} />
        <Route path='/memberstock' element={<Memberstock />} />
        <Route path='/morder' element={<Morder />} />
        <Route path='/morderdetail' element={<Morderdetail />} />
        <Route path='/mouse' element={<Mouse />} />
        <Route path='/msales' element={<Msales />} />
        <Route path='/mtrackingdetail' element={<Mtrackingdetail />} />
        <Route path='/mtrackingsearch' element={<Mtrackingsearch />} />
        <Route path='/sales' element={<Sales />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/stock' element={<Stock />} />
        <Route path='/teamdetail' element={<Teamdetail />} />
        <Route path='/trackingdetail' element={<Trackingdetail />} />
        <Route path='/trackingsearch' element={<Trackingsearch />} />
        <Route path='/worldwidesales' element={<WorldwideSales />} />
      </Routes>
    </Router>
  );
}

export default App;
