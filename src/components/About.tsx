import React from 'react';
import styled from 'styled-components';
import { useStaticQuery, graphql } from 'gatsby';

import { bio } from '../data/about';

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

  @media (max-width: 609px) {
    float: none;
    margin: 10px auto 15px;
  }
`;

const Bio = styled.div`
  @media (max-width: 609px) {
    text-align: center;
  }
`;

const BioTitle = styled(Title)`
  &:after {
    width: calc(100% - 250px);

    @media (max-width: 609px) {
      width: 100%;
    }
  }
`;

const BioText = styled.div``;

const About = () => {

  const { carys } = useStaticQuery(graphql`
    query {
      carys: file(relativePath: { eq: "general/carys-spud.jpg" }) {
        childImageSharp {
          fixed(width: 200) {
            srcSet
          }
        }
      }
    }
  `);

  return(
    <StyAbout>
      <ProfilePicture>
        <img 
          srcSet={carys.childImageSharp.fixed.srcSet}
          alt="Carys Fletcher with Spud the dog"
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