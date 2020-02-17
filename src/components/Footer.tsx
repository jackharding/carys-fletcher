import React from 'react';
import styled from 'styled-components';

const StyFooter = styled.footer`
	background: ${({ theme }) => theme.color.dark};
	bottom: 0;
	left: 0;
	padding: 35px 0;
	position: absolute;
	width: 100%;

	p {
		color: #fff;
		font-family: 'Open Sans', sans-serif;
		font-size: 15px;
		margin: 0;

		+ * {
			margin-top: 5px;
		}
	}

	a {
		color: #fff;
		text-decoration: none;

		&:hover {
			text-decoration: underline;
		}

		&:focus {
			outline: 0;
			text-decoration: underline;
		}
	}
`;

const StyInner = styled.div`
	margin: 0 auto;
	max-width: 100%;
	padding: 0 15px;
	width: 730px;
`;

const Footer = () => {
	return (
		<StyFooter>
			<StyInner>
				<p>&copy; {new Date().getFullYear()} Carys Fletcher</p>
				<p>
					Website by{' '}
					<a href="https://jackharding.dev" target="_blank">
						Jack Harding
					</a>
				</p>
			</StyInner>
		</StyFooter>
	);
};

export default Footer;
