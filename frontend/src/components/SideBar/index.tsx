/** @jsxImportSource @emotion/react */

import React from 'react';
import { MenuListType } from '@/utils/models/SideBar';
import { css } from '@emotion/react';
import { Link, useLocation } from 'react-router-dom';

const sideBarStyle = css`
  flex-basis: 300px;
  flex-shrink: 0;
  height: 100%;
  background-color: #fff;
  font-size: 18px;
  border-right: 1px solid #ddd;

  ul {
    display: flex;
    flex-direction: column;

    li {
      border-bottom: 1px solid #ddd;

      &.active a {
        color: royalblue;
      }

      a {
        display: block;
        height: 100%;
        padding: 10px 20px;
        transition: 0.3s;

        &:hover {
          color: royalblue;
        }
      }
    }
  }
`;

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
