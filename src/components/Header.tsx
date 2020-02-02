import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

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
    link: '#contact'
  },
]

const StyHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 35px;
  margin-bottom: 35px;
`;

const StyNav = styled.nav`
  margin-top: 15px;

  ul {
    display: flex;
    justify-content: space-between;
    width: 420px;
    max-width: 100%;
    padding: 0;
    margin: 0;
    list-style: none;
  }

  a {
    font-size: 26px;
    text-decoration: none;
    font-family: 'rasa', serif;
    transition: color box-shadow .3s;

    &:hover {
      color: ${({ theme }) => theme.color.brandDarker};
    }

    &:focus {
      outline: 2px solid transparent;
      box-shadow: 0px 2px 0px ${({ theme }) => theme.color.brandDarker};
    }
  }
`;

const Header = () => {

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
    <StyHeader>
      <img 
        srcSet={logo.childImageSharp.fixed.srcSet}
        alt="Carys Fletcher Illustration logo" 
      />

      <SR as={'h1'}>Carys Fletcher Illustration</SR>

      <StyNav>
        <ul>
          {menuItems.map(({ link, label }) => (
            <li key={`link-${link}`}>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </StyNav>
    </StyHeader>
  );
}

export default Header;
