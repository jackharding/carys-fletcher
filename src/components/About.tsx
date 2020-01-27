import React from 'react';
import styled from 'styled-components';

import { picture, bio } from '../data/about';

import Title from './Title';

const StyAbout = styled.div``;

const ProfilePicture = styled.div`
  width: 150px;
  height: 150px;
  margin: 10px 35px 15px 0;
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

const Bio = styled.div``;

const BioTitle = styled(Title)`
  &:after {
    width: calc(100% - 250px);
  }
`;

const BioText = styled.div``;

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

        <BioText>
          <p>{bio}</p>
        </BioText>
      </Bio>
    </StyAbout>
  );
}

export default About;