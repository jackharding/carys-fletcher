import React from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';

import Image from './Image';
import SR from './SR';

const StyWorkItem = styled(motion.button)`
	position: relative;
	height: 0;
	padding-top: 100%;
	border: 0;
	overflow: hidden;
	cursor: pointer;

	.gatsby-image-wrapper {
		position: absolute !important;
		width: 100%;
		height: 100%;
		left: 0;
		top: 0;
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
		transition: 0.3s;
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
	fileName: string;
	onClick: () => void;
}

const WorkItem: React.FC<IWorkItemProps> = ({ title, fileName, onClick }) => {
	return (
		<AnimatePresence>
			<StyWorkItem 
				onClick={onClick} 
				aria-labelledby={`work-${fileName}`}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				exit={{ opacity: 0 }}
			>
				<SR id={`work-${fileName}`}>{title}</SR>
				<p aria-hidden="true">{title}</p>
				<Image fileName={fileName} alt="" />
			</StyWorkItem>
		</AnimatePresence>
	);
};

export default WorkItem;
