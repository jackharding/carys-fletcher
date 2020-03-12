import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import About from '../components/About';
import Contact from '../components/Contact';
import FadeIn from '../components/FadeIn';
import Layout from '../components/Layout';
import Work from '../components/Work';
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

			<section
				id="work"
				aria-labelledby="work-title"
			>
				<SR id="work-title" as="h2">
					My work
				</SR>
				<Work work={work} />
			</section>

			<FadeIn
				id="about"
				as="section"
				aria-labelledby="about-title"
			>
				<About />
			</FadeIn>

			<FadeIn
				id="contact"
				as="section"
				aria-labelledby="contact-title"
			>
				<Contact />
			</FadeIn>
		</Layout>
	);
};

export default IndexPage;
