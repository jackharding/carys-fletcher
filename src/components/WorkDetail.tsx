import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Fade as Fader } from 'react-slideshow-image';

import { WorkNode } from '../types/index';

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

const WorkDescription = styled.div``;

const StyWorkDetail = styled.div`
  padding-bottom: 50px;
`;

const SliderWrap = styled.div``;

const SliderNav = styled.nav`
  display: flex;
  justify-content: center;
  margin-top: 15px;
`;

const SliderNavBtn = styled.button`
  width: 0;
  height: 0;
  padding: 7px;
  border: 0;
  border-radius: 50%;
  background: ${({ active, theme }) => active ? theme.color.brand : theme.color.disabled};
  cursor: pointer;

  +* {
    margin-left: 7px;
  }
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

  const [slide, setSlide] = useState(0);
  const $slider = useRef(null);

  if(!project) return null;

  return (
    <StyWorkDetail>
      <SliderWrap>
        <Fader
          {...config}
          ref={$slider}
        >
          { project.frontmatter.images.map(({ src, alt }) => (
            <Slide key={`img-${src}`}>
              <img src={`/work/${project.frontmatter.slug}/${src}`} alt={alt}/>
            </Slide>
          )) }
        </Fader>

        <SliderNav>
          { project.frontmatter.images.map(({ src }, i) => (
            <SliderNavBtn
              aria-label={`Go to slide ${i+1}`}
              active={slide === i}
              onClick={() => {
                if(i === slide) return;

                $slider.current.goTo(i);
                setSlide(i);
              }}
            />
          )) }
        </SliderNav>
      </SliderWrap>

      <WorkTitle>
        <h1>{ project.frontmatter.title }</h1>
      </WorkTitle>

      <WorkDescription dangerouslySetInnerHTML={{ __html: project.html }} />
    </StyWorkDetail>
  );
}

export default WorkDetail;