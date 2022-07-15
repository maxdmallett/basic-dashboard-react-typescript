import React from 'react';
import {  BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from '../Navbar/Navbar';
import Home from '../../pages/home';
import Assessments from '../../pages/assessments';
import Monitoring from '../../pages/monitoring';
import Reports from '../../pages/reports';
import './App.css';

function App() {
  return (
    <div className="App">
        <BrowserRouter>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}></Route>
                <Route path='/assessments' element={<Assessments/>}></Route>
                <Route path='/monitoring' element={<Monitoring/>}></Route>
                <Route path='/reports' element={<Reports/>}></Route>
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
