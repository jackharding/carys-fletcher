import React from 'react';
import { Link } from 'gatsby';
import { ThemeProvider } from 'styled-components';

import theme from '../config/theme';

import Layout from '../components/Layout';
// import Image from "../components/image";
// import SEO from "../components/seo";

const Test = (props) => {
  return (
    <div>
      { props.children }
    </div>
  )
}


const IndexPage = () => (
  <Layout>
    <p>fuasdsdck</p>
  </Layout>
)

export default IndexPage;