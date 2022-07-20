import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import Sidebar from '../Sidebar/Sidebar';
import './Navbar.css';
import NavUserInfo from '../NavUserInfo/NavUserInfo';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar);

    return (
       <>
            <div className='navbar'>
                <Link to="#" className='hamburger-link'>
                    <FaIcons.FaBars onClick={toggleSidebar}/>
                </Link>
                <NavUserInfo />
            </div>
            <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}/>
       </>
    )
}

export default Navbar;
