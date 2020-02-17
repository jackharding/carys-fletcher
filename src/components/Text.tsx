import styled from 'styled-components';

const Text = styled.div`
	font-size: 1.125rem;

	a {
		text-decoration: none;
		transition: 0.3s;
		color: ${({ theme }) => theme.color.brandDarker};

		&:focus {
			outline: 0;
			text-decoration: underline;
		}

		&:active {
			transform: translateY(1px);
		}

		&:hover {
			color: ${({ theme }) => theme.color.brand};
		}
	}

	li + li {
		margin-top: 5px;
	}

	> * {
		+ * {
			margin-top: 24px;
		}
	}
`;

export default Text;
