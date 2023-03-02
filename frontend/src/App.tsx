/** @jsxImportSource @emotion/react */
import React from 'react';

import { css } from '@emotion/react';
import { Route, Routes } from 'react-router-dom';
import { GlobalStyles } from './styles/GlobalStyles';
import Header from './components/Header';
import SideBar from './components/SideBar';
import Home from './pages/Home';
import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageC from './pages/PageC';
import PostDetail from './pages/PostDetail';

const mainStyles = css`
  display: flex;
  padding-top: 50px;
  height: 100vh;
`;

const contentStyles = css`
  flex: auto;
  height: 100%;
  padding: 20px;
`;

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />

      <main css={mainStyles}>
        <SideBar />

        <div css={contentStyles}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/post/:id" element={<PostDetail />} />
            <Route path="/a" element={<PageA />} />
            <Route path="/b" element={<PageB />} />
            <Route path="/c" element={<PageC />} />
          </Routes>
        </div>
      </main>
    </>
  );
}

export default App;
