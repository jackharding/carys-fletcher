import styled from 'styled-components';

const Title = styled.div`
	margin-bottom: 15px;
	position: relative;

	> * {
		background: #fff;
		display: inline-block;
		font-size: 36px;
		padding-right: 20px;
		position: relative;
		z-index: 10;
	}

	&:after {
		background: ${({ theme }) => theme.color.brandDarker};
		content: '';
		display: block;
		height: 1px;
		position: absolute;
		right: 0;
		top: 50%;
		transform: translateY(-50%);
		width: 100%;
	}

	@media (max-width: 609px) {
		text-align: center;

		> * {
			padding-left: 20px;
		}
	}
`;

export default Title;
