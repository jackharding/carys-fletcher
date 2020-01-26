import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import theme from '../config/theme';
import { work } from '../data/work.json';

import About from '../components/About';
import Layout from '../components/Layout';
import WorkGrid from '../components/WorkGrid';
import WorkItem from '../components/WorkItem';
import Section from '../components/Section';
// import Image from "../components/image";
// import SEO from "../components/seo";


const IndexPage = () => {
  return(
    <Layout>
      <Section id="work">
        <WorkGrid
          hasMore={true}
        >
          {work.map(p => (
            <WorkItem
              title={p.title}
              cover={p.images[0].src}
              key={p.title}
            />
          ))}
        </WorkGrid>
      </Section>

      <Section id="about">
        <About />
      </Section>
    </Layout>
  );
}

export default IndexPage;