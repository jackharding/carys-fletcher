import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer``;

const Footer = () => {
  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} Carys Fletcher</p>
      <p>Website by <a href="https://jackharding.dev" target="_blank">Jack Harding</a></p>
    </StyledFooter>
  );
}

export default Footer;
