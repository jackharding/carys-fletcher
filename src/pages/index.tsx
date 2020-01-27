import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import theme from '../config/theme';
import { work } from '../data/work.json';

import About from '../components/About';
import Contact from '../components/Contact';
import Layout from '../components/Layout';
import Work from '../components/Work';
import Section from '../components/Section';
import SEO from '../components/SEO';

const IndexPage = () => {
  return(
    <Layout>
      <SEO />
      
      <Section id="work">
        <Work />
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