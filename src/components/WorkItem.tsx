import React from 'react';
import styled from 'styled-components';

import SR from './SR';

const StyWorkItem = styled.button`
	border: 0;
  cursor: pointer;
  height: 0;
  padding-top: 100%;
  position: relative;

  img {
    height: 100%;
    left: 0;
    object-fit: cover;
    position: absolute;
    top: 0;
    width: 100%;
  }

  p {
    align-items: center;
    background: rgba(255, 255, 255, 0.8);
    display: flex;
    font-family: 'rasa', serif;
    font-size: 22px;
    height: 100%;
    justify-content: center;
    left: 0;
    margin: 0;
    opacity: 0;
    padding: 0 15px;
    position: absolute;
    top: 0;
    transition: .3s;
    width: 100%;
    z-index: 2;
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
	onClick: () => void;;
}

const WorkItem = ({ title, slug, cover, onClick }: IWorkItemProps) => {
	return (
		<StyWorkItem onClick={onClick} aria-labelledby={`work-${slug}`}>
			<SR id={`work-${slug}`}>{title}</SR>
			<p aria-hidden="true">{title}</p>
			<img src={`/work/${slug}/${cover}`} alt={''} />
		</StyWorkItem>
	);
};

export default WorkItem;
