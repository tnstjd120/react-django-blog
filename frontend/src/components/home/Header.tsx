/** @jsxImportSource @emotion/react */

import React from 'react';
import { css } from '@emotion/react';

type HeaderProps = {
  logoName: string;
};

const headerStyle = css`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 50px;
  background-color: #ddd;
`;

const logoStyle = css`
  font-size: 32px;
  font-weight: bold;
`;

const Header: React.FC<HeaderProps> = ({ logoName }) => {
  return (
    <header css={headerStyle}>
      <h1 css={logoStyle}>{logoName}</h1>

      <nav></nav>
    </header>
  );
};

export default Header;
