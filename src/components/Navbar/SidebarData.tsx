import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'sidebar-text'
    },
    {
        title: 'Assessments',
        path: '/assessments',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'sidebar-text'
    },
    {
        title: 'Monitoring',
        path: '/monitoring',
        icon: <FaIcons.FaArchive/>,
        cName: 'sidebar-text'
    },
    {
        title: 'Reports',
        path: '/reports',
        icon: <AiIcons.AiFillBook/>,
        cName: 'sidebar-text'
    },
];