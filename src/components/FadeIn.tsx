import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface IFadeInProps {
	threshold: number;
	as: string;
	id: string;
	className: string;
	children: any;
}

const FadeIn: React.FC = ({
	threshold, as, className, id, children,
}: IFadeInProps) => {
	const [appeared, setAppeared] = useState(false);
	const [ref, visible] = useInView({
		threshold,
	});

	const Element = motion[as];

	useEffect(() => {
		if (visible && !appeared) {
			setAppeared(true);
		}
	}, [visible]);

	console.log('appea', appeared)

	return (
		<Element
			animate={{
				opacity: appeared ? 1 : 0,
			}}
			initial={{
				opacity: 0,
			}}
			ref={ref}
			className={className}
			id={id}
			transition={{
				duration: 1,
			}}
		>
			{children}
		</Element>
	);
};

FadeIn.defaultProps = {
	className: '',
	id: '',
	as: 'div',
	threshold: 0.25,
};

export default FadeIn;