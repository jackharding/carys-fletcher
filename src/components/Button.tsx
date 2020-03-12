import styled from 'styled-components';

const Button = styled.button`
	align-items: center;
	background: transparent;
	border: 1px solid ${(props) => props.theme.color.brandDarker};
	color: ${(props) => props.theme.color.brandDarker};
	cursor: pointer;
	display: flex;
	font-family: 'rasa', serif;
	font-size: 1rem;
	margin: 25px auto 0;
	padding: 10px 25px;
	transition: 0.3s;

	&:hover {
		background: ${(props) => props.theme.color.brandDarker};
		color: #fff;
	}
`;

export default Button;
