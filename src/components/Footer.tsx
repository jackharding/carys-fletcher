import React from 'react';
import styled from 'styled-components';

const StyFooter = styled.footer`
    background: ${({ theme }) => theme.color.whiteish};

    p {
        margin: 0;
        font-size: 15px;
        font-family: 'Open Sans', sans-serif;
    }
    
    a {
        text-decoration: none;
        
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

	@media (max-width: 519px) {
		flex-direction: column;
		text-align: center;
	}
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