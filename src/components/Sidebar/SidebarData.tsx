import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";
import Home from "../../pages/home";
import Assessments from "../../pages/assessments";
import Monitoring from "../../pages/monitoring";
import APITest from "../../pages/apiTest";
import Settings from "../../pages/settings";

interface PageObj {
    title: string;
    path: string;
    icon: JSX.Element;
    cName: string;
    element: JSX.Element;
}

export const SidebarData: PageObj[] = [
    {
        title: 'Home',
        path: '/',
        icon: <AiIcons.AiFillHome/>,
        cName: 'sidebar-text',
        element: <Home/>,
    },
    {
        title: 'Assessments',
        path: '/assessments',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'sidebar-text',
        element: <Assessments/>,
    },
    {
        title: 'Monitoring',
        path: '/monitoring',
        icon: <FaIcons.FaArchive/>,
        cName: 'sidebar-text',
        element: <Monitoring/>,
    },
    {
        title: 'API Test',
        path: '/apiTest',
        icon: <AiIcons.AiFillBook/>,
        cName: 'sidebar-text',
        element: <APITest/>,
    },
    {
        title: 'Settings',
        path: '/settings',
        icon: <AiIcons.AiFillSetting/>,
        cName: 'sidebar-text',
        element: <Settings/>,
    },
];
