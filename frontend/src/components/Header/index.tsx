/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

const headerStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #fff;
  border-bottom: 1px solid #ddd;
  display: flex;
  align-items: center;
  padding: 0 20px;
`;

const logoStyle = css`
  font-size: 32px;
  font-weight: bold;
`;

const Header: React.FC = () => {
  return (
    <header css={headerStyle}>
      <h1 css={logoStyle}>React - Django Blog</h1>
    </header>
  );
};

export default Header;
