import styled from 'styled-components';

const SectionHeaderHook = () => {
  return (
    <StHeader>
      <StSectionHeader>
        <StTitle>탐색하기</StTitle>
        <StDivideBar />
        <StDescription>다양한 작품을 만나봐요</StDescription>
      </StSectionHeader>
      <StDivider />
    </StHeader>
  );
};

const StHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 0 6px;
  margin-bottom: 32px;
`;
const StDivideBar = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(217, 217, 217, 0.8);
`;

const StTitle = styled.span`
  font-size: 20px;
  font-weight: 600;
  line-height: 1.4;
  color: #ffffff;
`;

const StDescription = styled.span`
  font-size: 16px;
  line-height: 1.4;
  color: #999999;
`;

const StSectionHeader = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  gap: 9px;
`;

const StDivider = styled.div`
  height: 1px;
  width: 100%;
  background-color: #555555;
`;

export default SectionHeaderHook;
