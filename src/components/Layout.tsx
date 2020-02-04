import React from 'react';
import styled, { ThemeProvider, createGlobalStyle } from 'styled-components';
import Modal from 'react-modal';

import globalStyles from '../styles/global';
import slickStyles from '../styles/slick';
import theme from '../config/theme';
import Header from './Header';
import Footer from './Footer';

Modal.setAppElement('#___gatsby');

interface ILayoutProps {
  children: any;
}

const GlobalStyles = createGlobalStyle`
  ${globalStyles};
  ${slickStyles};
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
        <PageWrap>{children}</PageWrap>
        <Footer />
      </AppContainer>
    </ThemeProvider>
  );
};

export default Layout;
