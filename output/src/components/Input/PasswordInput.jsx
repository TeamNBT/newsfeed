import { useState } from 'react';
import styled from 'styled-components';
import { GeneralEyeIcon, GeneralEyeOffIcon } from '@/svg';
import Input from './Input';

const PasswordInput = (props) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <StInputBox>
      <StInput {...props} type={showPassword ? 'text' : 'password'} autoComplete="off" />
      <StButton type="button" onClick={() => setShowPassword((prev) => !prev)}>
        {showPassword ? <GeneralEyeIcon /> : <GeneralEyeOffIcon />}
      </StButton>
    </StInputBox>
  );
};

const StInput = styled(Input)`
  padding-right: 63px;

  &[type='password']:not(:placeholder-shown) {
    font: small-caption;
    font-size: 34px;
  }
`;

const StInputBox = styled.div`
  position: relative;
  width: 360px;
  margin: 0 auto;
`;

const StButton = styled.button`
  z-index: 1;
  position: absolute;
  top: 50%;
  margin-top: -12px;
  right: 24px;
  cursor: pointer;

  svg {
    display: block;
  }
`;

export default PasswordInput;
