import React from 'react';
import styled from 'styled-components';

import SR from './SR';

const StyWorkItem = styled.button`
  position: relative;
  height: 0;
  padding-top: 100%;
  border: 0;
  cursor: pointer;

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  p {
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0 15px;
    z-index: 2;
    opacity: 0;
    font-size: 22px;
    font-family: 'rasa', serif;
    background: rgba(255, 255, 255, 0.8);
    transition: .3s;
  }

  &:hover,
  &:focus {
    p {
      opacity: 1;
    }
  }

  &:focus {
    outline: 0;
  }
`;

interface IWorkItemProps {
  title: string;
  slug: string;
  cover: string;
  onClick: () => void
}

const WorkItem = ({ title, slug, cover, onClick }: IWorkItemProps) => {
  return(
    <StyWorkItem
      onClick={onClick}
      aria-labelledby={`work-${slug}`}
    >
      <SR id={`work-${slug}`}>{ title }</SR>
      <p aria-hidden="true">{title}</p>
      <img 
        src={`/work/${slug}/${cover}`}
        alt={""}
      />
    </StyWorkItem>
  );
}

export default WorkItem;