import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Work from '../components/Work';
import Section from '../components/Section';
import SEO from '../components/SEO';
import SR from '../components/SR';

const IndexPage = () => {
	const {
		allMarkdownRemark: { edges: work },
	} = useStaticQuery(graphql`
		{
			allMarkdownRemark {
				edges {
					node {
						frontmatter {
							title
							slug
							cover
							images {
								src
								alt
							}
						}
						html
					}
				}
			}
		}
	`);

	return (
		<Layout>
			<SEO />

			<Section id="work" aria-labelledby="work-title">
				<SR id="work-title" as="h2">
					My work
				</SR>
				<Work work={work} />
			</Section>

			<Section id="about" aria-labelledby="about-title">
				<About />
			</Section>

			<Section id="contact" aria-labelledby="contact-title">
				<Contact />
			</Section>
		</Layout>
	);
};

export default IndexPage;
