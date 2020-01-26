import React from 'react';
import styled from 'styled-components';

import { picture, bio } from '../data/about';

const StyAbout = styled.div``;
const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  margin: 0 35px 15px 0;
  float: left;
  border-radius: 50%;
  overflow: hidden;
  shape-outside: circle();

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Bio = styled.div`
  color: #050505;

  * {
    color: inherit;
  }
`;

const BioTitle = styled.div`
  position: relative;

  h2 {
    display: inline-block;
    position: relative;
    z-index: 10;
    padding-right: 20px;
    font-size: 36px;
    background: #fff;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: calc(100% - 250px);
    height: 1px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.color.brand};
  }
`;

const BioText = styled.div`
  font-family: 'Open Sans', sans-serif;
`;

const About = () => {
  return(
    <StyAbout>
      <ProfilePicture>
        <img 
          src={picture}
          alt="Carys Fletcher wearing fetching reindeer nose glasses"
        />
      </ProfilePicture>

      <Bio>
        <BioTitle>
          <h2>About Me</h2>
        </BioTitle>

        <BioText>{bio}</BioText>
      </Bio>
    </StyAbout>
  );
}

export default About;