import { useEffect, useState } from 'react';
import styled from 'styled-components';

const Loader = ({ display = true }) => {
  const [isDisplay, setIsDisplay] = useState(display);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsDisplay(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <StRoot $display={isDisplay}>
      <StDiv>
        <StEllipsis>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
        </StEllipsis>
      </StDiv>
    </StRoot>
  );
};

const StRoot = styled.div`
  ${({ $display }) => ($display ? 'display: block' : 'display: none')};
`;

const StEllipsis = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;

  & div {
    position: absolute;
    top: 11.33333px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: currentColor;
    animation-timing-function: cubic-bezier(0, 1, 1, 0);

    &:nth-child(1) {
      left: 6px;
      animation: lds-ellipsis1 0.6s infinite;
    }

    &:nth-child(2) {
      left: 6px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(3) {
      left: 20px;
      animation: lds-ellipsis2 0.6s infinite;
    }

    &:nth-child(4) {
      left: 28px;
      animation: lds-ellipsis3 0.6s infinite;
    }
  }

  @keyframes lds-ellipsis1 {
    0% {
      transform: scale(0);
    }
    100% {
      transform: scale(1);
    }
  }

  @keyframes lds-ellipsis3 {
    0% {
      transform: scale(1);
    }
    100% {
      transform: scale(0);
    }
  }

  @keyframes lds-ellipsis2 {
    0% {
      transform: translate(0, 0);
    }
    100% {
      transform: translate(14px, 0);
    }
  }
`;

const StDiv = styled.div`
  position: fixed;
  top: 0;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background: var(--color-base-background);
  z-index: 100;
  left: 50%;
  width: 100%;
  transform: translateX(-50%);
`;

export default Loader;
