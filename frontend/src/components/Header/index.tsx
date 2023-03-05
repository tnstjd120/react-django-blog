/** @jsxImportSource @emotion/react */

import React from 'react';
import { headerStyle, logoStyle } from '../../styles/components/Header';

const Header: React.FC = () => {
  return (
    <header css={headerStyle}>
      <h1 css={logoStyle}>React - Django Blog</h1>
    </header>
  );
};

export default Header;
