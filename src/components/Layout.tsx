import React from 'react';
import styled, {ThemeProvider} from 'styled-components';

import theme from '../config/theme';
import Header from './Header';
import Footer from './Footer';

const PageWrap = styled.main``;

const Layout = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      <PageWrap>{ children }</PageWrap>
      <Footer />
    </ThemeProvider>
  );
}

export default Layout
