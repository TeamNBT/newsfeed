import styled from 'styled-components';

const SectionHeader = () => {
  return (
    <>
      <Header>
        <div className="-Section-Header">
          <div className="Typo-Group-HStack">
            <span className="prm-text">탐색하기</span>
            <div className="Rectangle-23"></div>
            <span className="scd-text">다양한 작품을 만나봐요</span>
          </div>
        </div>
        <div className="divider"></div>
      </Header>
    </>
  );
};

const Header = styled.div`
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 16px;
  padding: 0 0 6px;
  margin-bottom: 32px;

  .-Section-Header {
    width: 1056px;
    height: 28px;
    flex-grow: 0;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 22px;
    padding: 0;
  }
`;

export default SectionHeader;
