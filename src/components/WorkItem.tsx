import React from 'react';
import styled from 'styled-components';

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

  &:hover {
    p {
      opacity: 1;
    }
  }
`;

interface IWorkItemProps {
  title: string;
  cover: string;
  onClick: () => void
}

const WorkItem = ({ title, cover, onClick }: IWorkItemProps): React.ReactNode => {
  return(
    <StyWorkItem
      aria-label={`View more information`}
      onClick={onClick}
    >
      <p>{title}</p>
      <img 
        src={cover} 
        alt={title}
      />
    </StyWorkItem>
  );
}

export default WorkItem;