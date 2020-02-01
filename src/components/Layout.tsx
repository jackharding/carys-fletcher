import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Modal from 'react-modal';

import theme from '../config/theme';
import Header from './Header';
import Footer from './Footer';

Modal.setAppElement('#___gatsby');

interface ILayoutProps {
  children: any;
}

const GlobalStyles = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px;
  }
  *, *:before, *:after {
    box-sizing: inherit;
    color: rgb(68, 68, 68);
  }

  html,body {
    padding: 0;
    margin: 0;
    color: #050505;
  }

  body {
    line-height: 1.5;
    font-family: 'Open Sans', sans-serif;
  }

  * {
    color: inherit;
  }

  h1,h2,h3,h4 {
    margin: 0;
    font-family: 'rasa', serif;
  }

  p {
    margin: 0;
  }

  body.ReactModal__Body--open {
    overflow: hidden;
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

const Layout = ({ children }: ILayoutProps) => {
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