/** @jsxImportSource @emotion/react */

import { buttonStyles } from '../../styles/components/Button';
import React from 'react';

const Button: React.FC = () => {
  return (
    <>
      <button css={buttonStyles}>Toggle</button>
    </>
  );
};

export default Button;
