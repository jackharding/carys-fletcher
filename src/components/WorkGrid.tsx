import React from 'react';
import styled from 'styled-components';

import Button from './Button';

interface IWorkGridProps {
  children: any;
  hasMore: boolean;
  onLoadMore: () => void;
}

const StyWorkGrid = styled.div``;

const WorkGrid = ({ children, hasMore, onLoadMore }: IWorkGridProps) => {
  <>
    <StyWorkGrid>
      { children }
    </StyWorkGrid>

    { hasMore ? (
      <Button
        onClick={onLoadMore}
      >More</Button>
    ) : null }
  </>
}

export default WorkGrid;