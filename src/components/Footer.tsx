import React from 'react';
import styled from 'styled-components';

const StyFooter = styled.footer`
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    background: ${({ theme }) => theme.color.brandDarker};

    p {
        margin: 0;
        font-size: 15px;
        color: #fff;
        font-family: 'Open Sans', sans-serif;
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
    display: flex;
    justify-content: space-between;
    width: 730px;
    max-width: 100%;
    margin: 0 auto;
    padding: 22px 15px;
    /* border-top: 1px solid ${({ theme }) => theme.color.brand}; */
`;

const Footer: React.FC = () => {
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