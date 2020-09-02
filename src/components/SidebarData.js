import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';
import * as VscIcons from "react-icons/vsc";
import * as ImIcons from "react-icons/im";
import * as FiIcons from "react-icons/fi";


export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <FaIcons.FaTachometerAlt />,
    cName: 'nav-text'
  },
  {
    title: 'Reports',
    path: '/reports',
    icon: <VscIcons.VscFiles />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <AiIcons.AiOutlineUser />,
    cName: 'nav-text'
  },
  {
    title: 'Team',
    path: '/team',
    icon: <ImIcons.ImProfile />,
    cName: 'nav-text'
  },
  {
    title: 'Messages',
    path: '/messages',
    icon: <FiIcons.FiSettings />,
    cName: 'nav-text'
  },
  {
    title: 'Support',
    path: '/support',
    icon: <RiIcons.RiShutDownLine />,
    cName: 'nav-text'
  }
];
