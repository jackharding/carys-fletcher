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
	margin: 0 auto;
	max-width: 100%;
	padding: 0 15px;
	width: 730px;
`;

const AppContainer = styled.div`
	min-height: 100vh;
	padding-bottom: 115px;
	position: relative;
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
