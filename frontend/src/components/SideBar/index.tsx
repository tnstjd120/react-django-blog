/** @jsxImportSource @emotion/react */

import React from 'react';
import { MenuListType } from '@/utils/models/SideBar';
import { sideBarStyle } from '../../styles/components/SideBar';
import { Link, useLocation } from 'react-router-dom';

const menuList: MenuListType[] = [
  {
    id: 1,
    title: 'Home',
    path: '/',
  },
  {
    id: 2,
    title: 'Page A',
    path: '/a',
  },
  {
    id: 3,
    title: 'Page B',
    path: '/b',
  },
  {
    id: 4,
    title: 'Page C',
    path: '/c',
  },
];

const SideBar: React.FC = () => {
  const location = useLocation();

  return (
    <article css={sideBarStyle}>
      <ul>
        {menuList.map((menu) => (
          <li
            key={menu.id}
            className={location.pathname === menu.path ? 'active' : ''}
          >
            <Link to={menu.path}>{menu.title}</Link>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default SideBar;
