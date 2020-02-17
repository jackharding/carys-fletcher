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
	margin-bottom: 10px;
	margin-top: 40px;

	h1 {
		background: none;
		padding: 0;
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
		height: 100%;
		margin: 0 auto;
		object-fit: contain;
		width: 100%;
	}
`;

const config = {
	autoplay: false,
	arrows: false,
	infinite: false,
	transitionDuration: 500,
};

const WorkDetail: ReactNode = ({ project }: IWorkDetailProps) => {
	if (!project) return null;

	return (
		<StyWorkDetail>
			<Slider>
				{project.frontmatter.images.map(({ src, alt }) => (
					<Slide key={`img-${src}`}>
						<img src={`/work/${project.frontmatter.slug}/${src}`} alt={alt} />
					</Slide>
				))}
			</Slider>

			<WorkTitle>
				<h1>{project.frontmatter.title}</h1>
			</WorkTitle>

			<Text dangerouslySetInnerHTML={{ __html: project.html }} />
		</StyWorkDetail>
	);
};

export default WorkDetail;
