import React from 'react';
import styled from 'styled-components';

const StyFooter = styled.footer`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 35px 0;
  background: ${({ theme }) => theme.color.dark};

  p {
    margin: 0;
    font-size: 15px;
    color: #fff;
    font-family: 'Open Sans', sans-serif;

    +* {
      margin-top: 5px;
    }
  }
  
  a {
    text-decoration: none;
    color: #fff;
    
    &:hover {
      text-decoration: underline;
    }

    &:focus {
      outline: 0;
      text-decoration: underline;
    }
  }
`;

const StyInner = styled.div`
  width: 730px;
  max-width: 100%;
  margin: 0 auto;
  padding: 0 15px;
`;

const Footer = () => {
  return (
    <StyFooter>
      <StyInner>
        <p>&copy; {new Date().getFullYear()} Carys Fletcher</p>
        <p>Website by <a href="https://jackharding.dev" target="_blank">Jack Harding</a></p>
      </StyInner>
    </StyFooter>
  );
}

export default Footer;
