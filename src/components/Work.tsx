import React, { useMemo, useState } from 'react';
import styled from 'styled-components';
import Modal from 'react-modal';

import { WorkEdge, WorkNode } from '../types/index';

import WorkItem from './WorkItem';
import WorkGrid from './WorkGrid';
import WorkDetail from './WorkDetail';

interface IWorkProps {
  work: WorkEdge[];
}

const CloseModal = styled.button`
  position: fixed;
  top: 10px;
  right: 10px;
  padding: 4px;
  border: 0;
  background: none;
  color: ${({ theme }) => theme.color.brand};
  cursor: pointer;
  z-index: 2;

  svg {
    width: 25px;
    height: 25px;
    fill: currentColor;
    transition: .3s;
  }
`;

const Work = (props: IWorkProps) => {

  const [modal, setModal] = useState(null);
  const [limit, setLimit] = useState(6);

  const workItems = useMemo(() => {
    return props.work.slice(0, limit);
  }, [limit]);

  console.log(2, modal)

  return(
    <>
      <WorkGrid
        hasMore={limit < props.work.length}
        onLoadMore={() => setLimit(limit + 6)}
      >
        {workItems.map(({ node }, i) => {
          return(
            <WorkItem
              title={node.frontmatter.title}
              slug={node.frontmatter.slug}
              cover={node.frontmatter.cover}
              onClick={() => setModal(node)}
              key={node.frontmatter.title+i}
            />
          );
        })}
      </WorkGrid>

      <Modal
        isOpen={!!modal}
        onRequestClose={() => setModal(null)}
        style={{
          overlay: {
            display: 'flex',
            justifyContent: 'center',
            zIndex: 10,
            overflowY: 'auto',
            background: 'rgba(255,255,255,0.9)'
          },
          content: {
            position: 'static',
            padding: '45px 15px',
            border: 0,
            overflow: 'visible',
            width: '100%',
            maxWidth: '700px',
            background: 'none',
          }
        }}
      >
        <CloseModal
          onClick={() => setModal(null)}
        ><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M256 8C119 8 8 119 8 256s111 248 248 248 248-111 248-248S393 8 256 8zm0 448c-110.5 0-200-89.5-200-200S145.5 56 256 56s200 89.5 200 200-89.5 200-200 200zm101.8-262.2L295.6 256l62.2 62.2c4.7 4.7 4.7 12.3 0 17l-22.6 22.6c-4.7 4.7-12.3 4.7-17 0L256 295.6l-62.2 62.2c-4.7 4.7-12.3 4.7-17 0l-22.6-22.6c-4.7-4.7-4.7-12.3 0-17l62.2-62.2-62.2-62.2c-4.7-4.7-4.7-12.3 0-17l22.6-22.6c4.7-4.7 12.3-4.7 17 0l62.2 62.2 62.2-62.2c4.7-4.7 12.3-4.7 17 0l22.6 22.6c4.7 4.7 4.7 12.3 0 17z"/></svg></CloseModal>

        <WorkDetail
          project={modal}
        />
      </Modal>
    </>
  );
}

export default Work