import styled from 'styled-components';
import Typography from '@/components/Typography';

const SectionHeaderHook = () => {
  return (
    <StHeader>
      <StSectionHeader>
        <Typography as="strong" color="#ffffff" variant="typography5" weight="semibold">
          탐색하기
        </Typography>
        <StDivideBar />
        <Typography as="div" variant="typography4">
          다양한 작품을 만나봐요
        </Typography>
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
