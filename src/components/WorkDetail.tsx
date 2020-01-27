import React, { useRef, useState } from 'react';
import styled from 'styled-components';
import { Fade as Fader } from 'react-slideshow-image';

import Title from './Title';

interface ProjectImageNode {
  src: string;
  alt: string;
}

interface ProjectNode {
    title: string;
    description: string;
    images: ProjectImageNode[];
}

interface IWorkDetailProps {
  project: ProjectNode;
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

const StyWorkDetail = styled.div``;

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
          { project.images.map(({ src, alt }) => (
            <Slide key={`img-${src}`}>
              <img src={src} alt={alt}/>
            </Slide>
          )) }
        </Fader>

        <SliderNav>
          { project.images.map(({ src }, i) => (
            <SliderNavBtn
              ariaLabel={`Go to slide ${i+1}`}
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
        <h1>{ project.title }</h1>
      </WorkTitle>

      <WorkDescription>
        <p>{ project.description }</p>
      </WorkDescription>
    </StyWorkDetail>
  );
}

export default WorkDetail;