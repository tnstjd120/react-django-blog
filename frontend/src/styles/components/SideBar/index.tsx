import { css } from '@emotion/react';

export const sideBarStyle = css`
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
