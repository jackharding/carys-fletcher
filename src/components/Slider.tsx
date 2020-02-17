import React from 'react'
import SlickSlider from 'react-slick';

interface ISliderProps {
	children: React.ReactNode
}

const settings = {
	arrows: false,
	dots: true,
	fade: true,
	infinite: false,
	speed: 500,
	slidesToShow: 1,
	slidesToScroll: 1,
	autoplay: false,
}

const Slider = ({ children }) => {
	return (
		<SlickSlider {...settings}>
			{children}
		</SlickSlider>
	);
}

export default Slider;