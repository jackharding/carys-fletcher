import React from 'react';
import styled from 'styled-components';

import Button from './Button';

interface IWorkGridProps {
	children: any;
	hasMore: boolean;
	onLoadMore: () => void;
}

const StyWorkGrid = styled.div`
	display: grid;
	grid-gap: 20px;
	grid-template-columns: 1fr 1fr 1fr;

	@media (max-width: 629px) {
		grid-template-columns: 1fr 1fr;
	}
`;

const WorkGrid = ({ children, hasMore, onLoadMore }: IWorkGridProps) => {
	return (
		<>
			<StyWorkGrid>{children}</StyWorkGrid>

			{hasMore ? <Button onClick={onLoadMore}>More</Button> : null}
		</>
	);
};

export default WorkGrid;
