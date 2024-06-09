import { useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import { e11yHidden } from '@/styles/utils';
import { getCommentsThunk, updateCommentThunk } from '@/redux/comments/commentThunk';

const Retouch = ({ commentId, setModal }) => {
  const { id: feedId } = useParams();
  const dispatch = useDispatch();
  const handleUpdate = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { content } = Object.fromEntries(formData.entries());

    if (!content) {
      alert('댓글을 입력해주세요');
      return;
    }

    const result = await dispatch(updateCommentThunk({ content, id: commentId }));

    if (result.error) {
      alert(result.error.message);
      return;
    }

    await dispatch(getCommentsThunk(feedId));
    setModal(false);
  };

  return (
    <StRetouch>
      <StForm onSubmit={handleUpdate}>
        <StCloseBtn type="button" onClick={() => setModal(false)}>
          <span>닫기</span>
        </StCloseBtn>
        <StStrong>댓글을 수정해주세요</StStrong>
        <StTextareaWrap>
          <StRetouchTextarea name="content" required />
        </StTextareaWrap>
        <StRetouchBtn type="submit">수정하기</StRetouchBtn>
      </StForm>
    </StRetouch>
  );
};

const StStrong = styled.strong`
  display: block;
  margin-bottom: 20px;
  font-size: 17px;
  font-weight: 600;
  color: #2f2f2f;
`;

const StTextareaWrap = styled.div`
  padding: 16px 16px 20px;
  border-radius: 4px;
  position: relative;
  border: 1px solid #e8e8e8;
  display: flex;
`;

const StCloseBtn = styled.button`
  width: 35px;
  height: 35px;
  background: #e8e8e8;
  border-radius: 50%;
  position: absolute;
  top: 12px;
  right: 12px;
  cursor: pointer;

  &:before {
    width: 14px;
    height: 2px;
    background: #999999;
    border-radius: 2px;
    position: absolute;
    content: '';
    top: 50%;
    margin-top: -1px;
    margin-left: -7px;
    transform: rotate(45deg);
  }

  &:after {
    width: 14px;
    height: 2px;
    background: #999999;
    border-radius: 2px;
    position: absolute;
    content: '';
    top: 50%;
    margin-top: -1px;
    margin-left: -7px;
    transform: rotate(-45deg);
  }

  span {
    ${e11yHidden};
  }
`;

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
  background-color: var(--color-white);
  border-radius: 12px;
  padding: 36px 22px 30px;
  position: relative;
  display: flex;
  flex-direction: column;
`;

const StRetouchTextarea = styled.textarea`
  width: 100%;
  resize: none;
  border: none;
  background: none;
  height: 72px;
  font-size: 15px;
  color: #2f2f2f;
  font-weight: 400;
  line-height: 1.4;
  outline: none;
  font-family: inherit;
`;

const StRetouchBtn = styled.button`
  background: #2f2f2f;
  width: 100%;
  color: #ffffff;
  height: 46px;
  font-size: 15px;
  border-radius: 4px;
  margin-top: 10px;
  display: block;
  font-weight: 500;
`;

export default Retouch;
