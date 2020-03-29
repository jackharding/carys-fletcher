import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import Image from './Image';
import FadeIn from './FadeIn';
import WorkItem from './WorkItem';
import WorkGrid from './WorkGrid';
import Slider from './Slider';
import SR from './SR';
import Tabs from './Tabs';

const Slide = styled.div`
	display: grid!important;
	width: 90vw!important;
	height: 90vh;
	margin: 0 auto;
	grid-template-columns: 1fr 1fr;
	grid-gap: 50px;

	> * {
		margin: 0 auto;
	}

	@media (max-width: 919px) {
		width: 82vw!important;
	}

	@media (max-width: 699px) {
		grid-template-columns: 1fr;
		grid-template-rows: 1fr 70px;

		img {
			object-position: 50% 50%!important;
		}
	}
`;

const SlideInfo = styled.div`
	grid-column: 2 / 3;
	width: 100%;
	margin-top: 7vh;
	text-align: left;

	h3 {
		line-height: 1.25;
		font-size: 1.75rem;
	}

	@media (max-width: 699px) {
		grid-column: initial;
		margin-top: 0;
		text-align: center;

		h3 {
			~* {
				display: none;
			}
		}
	}
`;

const CloseModal = styled.button`
	background: none;
	border: 0;
	color: ${({ theme }) => theme.color.brandDarker};
	cursor: pointer;
	padding: 4px;
	position: fixed;
	right: 10px;
	top: 10px;
	z-index: 2;

	svg {
		fill: currentColor;
		height: 25px;
		transition: 0.3s;
		width: 25px;
	}

	&:focus {
		box-shadow: 0px 2px 0px ${({ theme }) => theme.color.brandDarker};
		outline: 2px solid transparent;
	}
`;

const workItemsCommercial = [
	{
		fileName: 'badger.jpg',
		title: 'Badger',
	},
	{
		fileName: 'mole.jpg',
		title: 'Mole',
	},
];

const workItemsPersonal = [
	{
		fileName: 'burt.jpg',
		title: 'Burt',
	},
	{
		fileName: 'he-still-dreams-of-ants.jpg',
		title: 'He still dreams of ants',
	},
	{
		fileName: 'quack.jpg',
		title: 'Quack',
	},
	{
		fileName: 'self-portrait.jpg',
		title: 'Self portrait',
	},
	{
		fileName: 'babirusa.jpg',
		title: 'Babirusa',
	},
	{
		fileName: 'moss-moose.jpg',
		title: 'Moss Moose',
	},
	{
		fileName: 'old-tommy-two-humps.jpg',
		title: 'Old Tommy Two-Humps',
		description: '<p>Old Tommy Two-Humps<br/>Trods on the dunes<br/>Where do he go, say we<br/>Alas<br/>He also not know</p>'
	},
	{
		fileName: 'greyhound.jpg',
		title: 'Greyhound',
	},
	{
		fileName: 'he-has-an-idea.jpg',
		title: 'He has an idea',
	},
	{
		fileName: 'brahman.jpg',
		title: 'Brahman',
	},
	{
		fileName: 'year-of-the-rat.jpg',
		title: 'Year of the Rat',
	},
	{
		fileName: 'sit.jpg',
		title: 'Sit',
	},
	{
		fileName: 'lady-in-blue.jpg',
		title: 'Lady in blue',
	},
	{
		fileName: 'squirrel.jpg',
		title: 'Squirrel',
	},
	{
		fileName: 'three-dancing-monkeys.jpg',
		title: 'Three Dancing Monkeys',
	},
];

const Work: React.FC = () => {
	const [modalIndex, setModalIndex] = useState<undefined | number>(undefined);
	const [activeIndex, setActiveIndex] = useState(0);
	const [limit, setLimit] = useState(6);

	const commercial = useMemo(() => workItemsCommercial.slice(0, limit), [limit]);
	const personal = useMemo(() => workItemsPersonal.slice(0, limit), [limit]);

	const activeWork = activeIndex === 1 ? commercial : personal;
	const activeWorkFull = activeIndex === 1 ? workItemsCommercial : workItemsPersonal;
	const activeTypeTotal = activeIndex === 1? workItemsCommercial.length : workItemsPersonal.length;

	return (
		<>
			<FadeIn 
				delay={.45}
				threshold={0.1}
			>
				<Tabs
					activeIndex={activeIndex}
					onChange={setActiveIndex}
					tabs={[
						{
							text: 'Portfolio',
						},
						{
							text: 'Commercial'
						},
					]}
				/>

				<WorkGrid
					hasMore={limit < activeTypeTotal}
					onLoadMore={() => setLimit(limit + 6)}
				>
					{activeWork.map(({ fileName, title }, i) => {
						return (
							<WorkItem title={title} fileName={fileName} onClick={() => setModalIndex(i)} key={`tile${fileName}`} />
						);
					})}
				</WorkGrid>
			</FadeIn>

			<Modal
				isOpen={typeof modalIndex !== 'undefined'}
				onRequestClose={() => setModalIndex(undefined)}
				style={{
					overlay: {
						display: 'flex',
						justifyContent: 'center',
						zIndex: 10,
						overflowY: 'auto',
						background: 'rgba(255,255,255,1)',
					},
					content: {
						position: 'static',
						padding: '45px 15px',
						border: 0,
						overflow: 'visible',
						width: '100%',
						background: 'none',
					},
				}}
			>
				<CloseModal onClick={() => setModalIndex(undefined)}>
					<SR>Close modal</SR>
					<svg focusable="false"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512">
						<path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z" />
					</svg>
				</CloseModal>

				<Slider
					initialSlide={modalIndex}
				>
					{activeWorkFull.map(({ title, fileName, description, alt }, i) => {
						return (
							<Slide key={`slide${fileName}`}>
								<Image
									fileName={fileName}
									alt={alt || `${title} by Carys Fletcher`}
									objectFit="contain"
									objectPosition="100% 0%"
									style={{ height: '100%', width: '100%' }}
								/>

								<SlideInfo>
									<h3>{title}</h3>
									{description && <div dangerouslySetInnerHTML={{ __html: description }} />}
								</SlideInfo>
							</Slide>
						);
					})}
				</Slider>
			</Modal>
		</>
	);
};

export default Work;
