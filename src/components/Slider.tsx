import React from 'react';
import SlickSlider from 'react-slick';

interface ISliderProps {
	children: React.ReactNode;
}

const Arrow = ({ className, style, prev, onClick }) => {
	return (
		<button className={className} style={style} onClick={onClick}>
			<svg
				width="267px"
				height="727px"
				viewBox="0 0 267 727"
				version="1.1"
				xmlns="http://www.w3.org/2000/svg"
				xlink="http://www.w3.org/1999/xlink"
				style={
					prev
						? {
							transform: 'scaleX(-1)',
						}
						: {}
				}
			>
				<g id="Page-1" stroke="none" stroke-width="1" fill="none" fillRule="evenodd">
					<g id="chevron" fill="#000000" fillRule="nonzero">
						<path
							d="M263.877202,352.612224 L18.3241762,4.22402776 C14.0533494,-1.5314856 7.32732258,-1.38095898 3.27068767,4.52650107 C-0.679852178,10.4339611 -0.679852178,19.6743079 3.27068767,25.5817679 L241.243921,363.215831 L3.27068767,701.001841 C-1.00013917,706.757354 -1.10623423,716.452121 3.05749664,722.359581 C7.11413155,728.418988 13.9472543,728.569514 18.1109852,722.662054 C18.2180811,722.510107 18.3241762,722.359581 18.3241762,722.359581 L263.877202,373.971384 C268.040933,368.062504 268.040933,358.519684 263.877202,352.612224 Z"
							id="Path"
						/>
					</g>
				</g>
			</svg>
		</button>
	);
};

const settings = {
	arrows: true,
	dots: false,
	fade: true,
	infinite: true,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
	prevArrow: <Arrow prev />,
	nextArrow: <Arrow />,
};

const Slider = React.forwardRef(({ children }, ref) => {
	return (
		<SlickSlider ref={ref}
			{...settings}>
			{children}
		</SlickSlider>
	);
});

export default Slider;
