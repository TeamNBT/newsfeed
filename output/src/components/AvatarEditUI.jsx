import styled from 'styled-components';
import { e11yHidden } from '@/styles/utils';
import pencil from '@/assets/images/common/pencil.png';

const AvatarEditUI = () => {
  return (
    <StDiv>
      <StIcon />
      <StHiddenText>프로필 수정하기</StHiddenText>
    </StDiv>
  );
};

const StIcon = styled.span`
  display: flex;
  width: 14px;
  height: 20px;
  background: url(${pencil}) no-repeat center center / contain;
`;

const StHiddenText = styled.span`
  ${e11yHidden};
`;

const StDiv = styled.div`
  position: absolute;
  bottom: 0;
  right: 1px;
  width: 24px;
  height: 24px;
  background-color: rgba(255, 246, 246, 0.9);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default AvatarEditUI;
