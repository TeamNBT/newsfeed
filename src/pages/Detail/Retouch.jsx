import { useRef } from 'react';
import styled from 'styled-components';
import supabase from '@/supabase/supabaseClient';

const Retouch = ({ userId, setModal }) => {
  const ChangeRef = useRef('');

  const handleUpdate = async () => {
    const changeValue = ChangeRef.current.value;
    const result = await supabase
      .from('comments')
      .update({ content: changeValue })
      .eq('author', userId);
    setModal(false);
  };

  return (
    <StRetouch>
      <StForm>
        <h4>댓글을 수정해주세요</h4>
        <StRetouchText ref={ChangeRef} />
        <StRetouchBtn onClick={handleUpdate}>수 정 하 기</StRetouchBtn>
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

const StForm = styled.div`
  width: 400px;
  background-color: var(--color-white);
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
