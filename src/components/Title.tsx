import styled from 'styled-components';

const Title = styled.div`
  position: relative;
  margin-bottom: 15px;

  >* {
    display: inline-block;
    position: relative;
    z-index: 10;
    padding-right: 20px;
    font-size: 36px;
    background: #fff;
  }

  &:after {
    content: '';
    display: block;
    position: absolute;
    width: 100%;
    height: 1px;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    background: ${({ theme }) => theme.color.brandDarker};
  }

  @media (max-width: 609px) {
    text-align: center;
    
    >* {
      padding-left: 20px;
    }
  }
`;

export default Title;