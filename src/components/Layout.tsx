import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';

import theme from '../config/theme';
import Header from './Header';
import Footer from './Footer';

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    color: rgb(68, 68, 68);
  }

  html,body {
    padding: 0;
    margin: 0;
  }

  h1,h2,h3,h4 {
    font-family: 'rasa', serif;
  }
`;

const PageWrap = styled.main`
  width: 730px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

const AppContainer = styled.div`
  position: relative;
  min-height: 100vh;
  padding-bottom: 115px;
`;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />

      <AppContainer>
        <Header />
        <PageWrap>{ children }</PageWrap>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
}

export default Layout;