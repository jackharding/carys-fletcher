import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import Text from './Text';
import Title from './Title';

const StyAbout = styled.div``;

const ProfilePicture = styled.div`
	border-radius: 50%;
	float: left;
	height: 150px;
	margin: 10px 35px 15px 0;
	overflow: hidden;
	shape-outside: circle();
	width: 150px;

	img {
		height: 100%;
		object-fit: cover;
		width: 100%;
	}

	@media (max-width: 609px) {
		float: none;
		margin: 10px auto 15px;
	}
`;

const Bio = styled.div`
	@media (max-width: 609px) {
		text-align: center;
	}
`;

const BioTitle = styled(Title)`
	&:after {
		width: calc(100% - 250px);

		@media (max-width: 609px) {
			width: 100%;
		}
	}
`;

const About: React.FC = () => {
	const { carys } = useStaticQuery(graphql`
		query {
			carys: file(relativePath: { eq: "general/carys-spud.jpg" }) {
				childImageSharp {
					fixed(width: 200) {
						srcSet
					}
				}
			}
		}
	`);

	return (
		<StyAbout>
			<ProfilePicture>
				<img srcSet={carys.childImageSharp.fixed.srcSet} alt="Carys Fletcher with Spud the dog" />
			</ProfilePicture>

			<Bio>
				<BioTitle>
					<h2 id="about-title">About Me</h2>
				</BioTitle>

				<Text>
					<p>
						Carys Fletcher is a freelance illustrator living in Bridgend, South Wales. Her work is often about ethical,
						environmental and social issues. She tries to inject a little bit of fun in to everyday life!
					</p>
				</Text>
			</Bio>
		</StyAbout>
	);
};

export default About;
