import { css } from 'styled-components';

export default css`
	html {
		box-sizing: border-box;
		font-size: 16px;
	}
	*,
	*:before,
	*:after {
		box-sizing: inherit;
		color: rgb(68, 68, 68);
	}

	html,
	body {
		padding: 0;
		margin: 0;
		color: #050505;
	}

	body {
		line-height: 1.75;
		font-family: 'Open Sans', sans-serif;
	}

	* {
		color: inherit;
	}

	h1,
	h2,
	h3,
	h4 {
		margin: 0;
		font-family: 'rasa', serif;
	}

	p {
		margin: 0;
	}

	body.ReactModal__Body--open {
		overflow: hidden;
	}

	section {
		margin-bottom: 80px;
	}

	button:focus {
		outline: 1px dashed rgba(0, 0, 0, 0.35);
	}

	body:not(.user-is-tabbing) {
		a,
		button,
		input,
		textarea,
		select {
			outline: none!important;
			box-shadow: none!important;
		}
	}
`;
