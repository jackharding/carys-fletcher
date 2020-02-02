import React, { useRef, useState } from 'react';
import styled from 'styled-components';

import { WorkNode } from '../types/index';

import Slider from './Slider';
import Text from './Text';
import Title from './Title';

interface IWorkDetailProps {
  project: WorkNode;
}

const WorkTitle = styled(Title)`
  margin-top: 40px;
  margin-bottom: 10px;

  h1 {
    padding: 0;
    background: none;
  }

  &:after {
    display: none;
  }
`;

const StyWorkDetail = styled.div`
  padding-bottom: 50px;
`;

const Slide = styled.div`
  height: 500px;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    margin: 0 auto;
  }
`;

const config = {
  autoplay: false,
  arrows: false,
  infinite: false,
  transitionDuration: 500,
}

const WorkDetail = ({ project }: IWorkDetailProps) => {

  if(!project) return null;

  return (
    <StyWorkDetail>
      <Slider>
        { project.frontmatter.images.map(({ src, alt }) => (
          <Slide key={`img-${src}`}>
            <img src={`/work/${project.frontmatter.slug}/${src}`} alt={alt}/>
          </Slide>
        )) }
      </Slider>

      <WorkTitle>
        <h1>{ project.frontmatter.title }</h1>
      </WorkTitle>

      <Text dangerouslySetInnerHTML={{ __html: project.html }} />
    </StyWorkDetail>
  );
}

export default WorkDetail;