import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import Sidebar from './Sidebar';
import './Navbar.css';

function Navbar() {

    const [sidebar, setSidebar] = useState(false);
    const toggleSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className='navbar'>
                <Link to="#" className='hamburger-link'>
                    <FaIcons.FaBars onClick={toggleSidebar}/>
                </Link>
            </div>
            <Sidebar sidebar={sidebar} toggleSidebar={toggleSidebar}/>
        </>
    )
}

export default Navbar;
