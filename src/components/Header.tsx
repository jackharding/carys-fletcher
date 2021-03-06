import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

import FadeIn from './FadeIn';
import SR from './SR';

const menuItems = [
	{
		label: 'Work',
		link: '#work',
	},
	{
		label: 'About',
		link: '#about',
	},
	{
		label: 'Contact',
		link: '#contact',
	},
];

const Outer = styled.div`
	align-items: center;
	display: flex;
	flex-direction: column;
	margin-bottom: 35px;
	padding-top: 35px;
`;

const StyNav = styled.nav`
	width: 100%;
	padding: 0 15px;
	margin-top: 15px;

	ul {
		display: flex;
		justify-content: space-between;
		list-style: none;
		margin: 0 auto;
		max-width: 100%;
		padding: 0;
		width: 320px;
		max-width: 100%;
	}

	a {
		font-family: 'rasa', serif;
		font-size: 26px;
		text-decoration: none;
		transition: color box-shadow 0.3s;

		&:hover {
			color: ${({ theme }) => theme.color.brandDarker};
		}

		&:focus {
			box-shadow: 0px 2px 0px ${({ theme }) => theme.color.brandDarker};
			outline: 2px solid transparent;
		}
	}
`;

const Header: React.FC = () => {
	const { logo } = useStaticQuery(graphql`
		query {
			logo: file(relativePath: { eq: "general/logo.png" }) {
				childImageSharp {
					fixed(width: 200) {
						srcSet
					}
				}
			}
		}
	`);

	return (

		<Outer>
			<img srcSet={logo.childImageSharp.fixed.srcSet} alt="Carys Fletcher Illustration logo" height={202} />

			<SR as="h1">Carys Fletcher Illustration</SR>

			<StyNav>
				<ul>
					{menuItems.map(({ link, label }) => (
						<li key={`link-${link}`}>
							<a href={link}>{label}</a>
						</li>
					))}
				</ul>
			</StyNav>
		</Outer>

	);
};

export default Header;
