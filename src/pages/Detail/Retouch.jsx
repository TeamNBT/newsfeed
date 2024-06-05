import styled from 'styled-components';

const Retouch = () => {
  return (
    <StRetouch>
      <StForm>
        <h4>댓글을 수정해주세요</h4>
        <StRetouchText />
        <StRetouchBtn>수 정 하 기</StRetouchBtn>
      </StForm>
    </StRetouch>
  );
};

const StRetouch = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StForm = styled.form`
  width: 400px;
  height: 400px;
  background-color: white;
  border-radius: 12px;
  padding: 36px 22px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StRetouchText = styled.textarea`
  padding: 20px;
  border-radius: 4px;
  position: relative;
  border: 1px solid var(--color-border);
  display: flex;
  resize: none;
  margin: 10px 0px;
`;

const StRetouchBtn = styled.button`
  background: purple;
  width: 100%;
  color: var(--color-white);
  height: 46px;
  font-size: 15px;
  border-radius: 4px;
  margin-top: 10px;
  display: block;
  font-weight: 500;
`;

export default Retouch;
