import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';

const StyHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 15px;
  margin-bottom: 50px;
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
    transition: .3s;

    &:hover {
      color: ${({ theme }) => theme.color.brand};
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

      {/* <StyNav>
        <ul>
          {menuItems.map(({ link, label }) => (
            <li>
              <a href={link}>{label}</a>
            </li>
          ))}
        </ul>
      </StyNav> */}
    </StyHeader>
  );
}

export default Header;
