/** @jsxImportSource @emotion/react */

import { Global } from '@emotion/react';
import { css } from '@emotion/react';
import React, { ComponentProps } from 'react';

export const GlobalStyles: React.FC<ComponentProps<any>> = () => (
  <Global
    styles={css`
      /* Reset styles */
      * {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
      }
      html,
      body,
      #root {
        height: 100%;
      }
      body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
      }
      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }
      a {
        color: #333;
        text-decoration: none;
      }
    `}
  />
);
