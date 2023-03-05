/** @jsxImportSource @emotion/react */

import { buttonStyles } from '@/styles/components/Button';
import React from 'react';

const Header: React.FC = () => {
  return (
    <>
      <button css={buttonStyles}>Toggle</button>
    </>
  );
};

export default Header;
