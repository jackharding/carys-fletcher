import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Work from '../components/Work';
import Section from '../components/Section';
import SEO from '../components/SEO';

const IndexPage = () => {

  const { allMarkdownRemark: { edges: work } } = useStaticQuery(graphql`
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

  return(
    <Layout>
      <SEO />
      
      <Section id="work">
        <Work work={work} />
      </Section>

      <Section id="about">
        <About />
      </Section>
      
      <Section id="contact">
        <Contact />
      </Section>
    </Layout>
  );
}

export default IndexPage;