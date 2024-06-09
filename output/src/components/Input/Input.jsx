import styled from 'styled-components';

const Input = (props) => {
  return <StInput {...props} />;
};

const StInput = styled.input`
  padding: 0 24px;
  font-size: 15px;
  height: 48px;
  width: 360px;
  border-radius: 8px;
`;

export default Input;
