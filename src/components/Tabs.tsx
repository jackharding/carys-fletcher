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

const getPosition = ($container, $element) => {
	const {
		top: containerTop,
		left: containerLeft,
	} = $container.getBoundingClientRect();

	let {
		top,
		left,
		width,
		height,
	} = $element.getBoundingClientRect();

	return {
		top: top -= containerTop,
		left: left -= containerLeft,
		width,
		height,
	}
}

let resizeTimer;

const Tabs: React.FC = ({ tabs, activeIndex, onChange, children }: ITabsProps) => {
	const [sliderDimensions, setSliderDimensions] = useState<IMenuNodeDimensions>({});

	const $nav = useRef<HTMLElement>(null!);

	const handleResize = () => {
		clearTimeout(resizeTimer);

		resizeTimer = setTimeout(() => {
			setSliderDimensions(getPosition($nav.current, $nav.current.querySelector(`li:nth-child(${activeIndex + 1})`)));
		}, 250);
	}

	useEffect(() => {
		window.addEventListener('resize', handleResize);
		
		return () => {
			window.removeEventListener('resize', handleResize);
		}
	}, []);

	useEffect(() => {
		if (!$nav.current) return;

		setSliderDimensions(getPosition($nav.current, $nav.current.querySelector(`li:nth-child(${activeIndex + 1})`)));
	}, [activeIndex]);

	return (
		<>
			<Nav ref={$nav}>
				<SliderBg
					positionTransition={{
						type: 'tween',
						damping: 70,
						duration: .125
					}}
					animate={{
						width: sliderDimensions.width,
						height: sliderDimensions.height,
					}}
					style={{
						left: sliderDimensions.left,
					}}
				/>

				<ul>
					{tabs.map(({ text }, i) => (
						<li key={`tab${i}`}>
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

			{/* {children} */}
		</>
	);
}

export default Tabs;