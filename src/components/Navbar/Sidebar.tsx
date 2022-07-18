import { Link } from 'react-router-dom';
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './SidebarData';

interface Props {
    sidebar: boolean
    toggleSidebar: any
}

function Sidebar(props: Props) {
  return (
    <nav className={props.sidebar ? 'sidebar active' : 'sidebar'}>
        <ul className='sidebar-list' onClick={props.toggleSidebar}>
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
  )
}

export default Sidebar;





