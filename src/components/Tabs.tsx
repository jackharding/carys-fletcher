import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

import { TabNode } from '../types/index';

interface ITabsProps {
	tabs: TabNode[];
	activeIndex: number;
	onChange: Function;
	children: any;
}

interface IMenuNodeDimensions {
	width: number;
	height: number;
	top: number;
	left: number;
}

const Nav = styled.nav`
	position: relative;

	+* {
		margin-top: 25px;
	}

	ul {
		position: relative;
		display: flex;
		justify-content: center;
		padding: 0;
		margin: 0;
		list-style: none;
	}

	li {
		+li {
			margin-left: 5px;
		}
	}
`;

const Button = styled.button`
	padding: 10px 15px;
	border: 0;
	background: none;
	color: ${({ active, theme }) => active ? '#fff' : theme.color.text};
	text-transform: uppercase;
	font-size: 14px;
	cursor: pointer;
`;

const SliderBg = styled(motion.div)`
	height: 40px;
	position: absolute;
	border-radius: 18px;
	background: ${({ theme }) => theme.color.brand};
	/* transition: width 5s; */
`;

const Tabs: React.FC = ({ tabs, activeIndex, onChange, children }: ITabsProps) => {
	const [sliderDimensions, setSliderDimensions] = useState<IMenuNodeDimensions>({});

	const $nav = useRef<HTMLElement>(null!);

	useEffect(() => {
		if (!$nav.current) return;

		const {
			top: containerTop,
			left: containerLeft,
		} = $nav.current.getBoundingClientRect();

		let {
			top,
			left,
			width,
			height,
		} = $nav.current.querySelector(`li:nth-child(${activeIndex + 1})`).getBoundingClientRect();

		setSliderDimensions({
			top: top -= containerTop,
			left: left -= containerLeft,
			width,
			height,
		})
	}, [activeIndex]);

	return (
		<>
			<Nav ref={$nav}>
				<SliderBg
					positionTransition
					initial={{
						transitionDelay: 10000
					}}
					animate={{
						width: sliderDimensions.width,
						height: sliderDimensions.height,
						x: sliderDimensions.left,
					}}
				/>

				<ul>
					{tabs.map(({ text }, i) => (
						<li>
							<Button
								active={i === activeIndex}
								onClick={() => {
									onChange(i);
								}}
							>{text}</Button>
						</li>
					))}
				</ul>
			</Nav>

			{children}
		</>
	);
}

export default Tabs;