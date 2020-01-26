import styled from 'styled-components';

const Button = styled.button`
  display: flex;
  align-items: center;
  padding: 10px 25px;
  margin: 25px auto 0;
  border: 1px solid ${props => props.theme.color.brand};
  background: transparent;
  font-family: 'rasa', serif;
  color: ${props => props.theme.color.brand};
  transition: .3s;
  cursor: pointer;

  &:hover {
    background: ${props => props.theme.color.brand};
    color: #fff;
  }
`;

export default Button;