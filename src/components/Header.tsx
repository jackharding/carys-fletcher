import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StyHeader = styled.header``;
const StyNav = styled.nav``;

const menuItems = [
  {
      link: '#work',
      label: 'Work'
  },
  {
      link: '#about',
      label: 'About'
  },
  {
      link: '#contact',
      label: 'Contact'
  },
]; 

const Header = () => {

  const { logo } = useStaticQuery(graphql`
    query {
      logo: file(relativePath: { eq: "logo.png" }) {
        childImageSharp {
          fixed(width: 200) {
            srcSet
          }
        }
      }
    }
  `);

  console.log('qq', logo)

  return (
    <StyHeader>
      <img 
        // srcSet={logo.childImageSharp.fixed.srcSetWebp} 
        srcSet={logo.childImageSharp.fixed.srcSet} 
        alt="Carys Fletcher Illustration logo" 
      />

      <StyNav>
        <ul>
          {menuItems.map(({ link, label }) => (
            <li>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </StyNav>
    </StyHeader>
  );
}

export default Header;
