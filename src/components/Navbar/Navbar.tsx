import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';
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
            <nav className={sidebar ? 'sidebar active' : 'sidebar'}>
                <ul className='sidebar-list' onClick={toggleSidebar}>
                    <li className='sidebar-list-item'>
                        <Link to="#" className='menu-bars close-btn'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {
                        SidebarData.map((item, index) => {
                            return (
                                <li key={index} className='sidebar-list-item'>
                                    <Link to={item.path}>
                                        {item.icon}
                                        <span>{item.title}</span>
                                    </Link>
                                </li>
                            )
                        })
                    }
                </ul>
            </nav>
        </>
    )
}

export default Navbar;
