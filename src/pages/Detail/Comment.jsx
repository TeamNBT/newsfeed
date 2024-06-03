import { Button } from '@/components/Button';
import styled from 'styled-components';

const userComment = {
  img: 'src/assets/images/common/user.png',
  name: 'mari',
  comment: '댓글입니다.'
};

const Comment = () => {
  return (
    <>
      <StComment>
        <StCommentTextBox placeholder="댓글을 입력해주세요" />
        <Button rounded variant="secondary">
          버튼
        </Button>
        <StCommentWindow>
          <StUserImg src={userComment.img} />
          <StUser>
            <StUserName>{userComment.name}</StUserName>
            <StCommentText>{userComment.comment}</StCommentText>
            <StBtn>
              <StRetouch>수정</StRetouch>
              <StDelete>삭제</StDelete>
            </StBtn>
          </StUser>
        </StCommentWindow>
      </StComment>
    </>
  );
};

const StCommentTextBox = styled.textarea`
  background-color: var(--color-base-background);
  color: var(--color-white);
  width: 100%;
  height: 100px;
  padding: 16px 21px;
  border-radius: 12px;
  border: solid 1px #383838;
  resize: none;
`;

const StComment = styled.div`
  align-self: stretch;
  flex-grow: 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  padding: 6px 16px;
  gap: 15px;
`;

const StCommentWindow = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-start;
  gap: 24px;
  margin-top: 40px;
`;

const StUserImg = styled.img`
  width: 62px;
  height: 62px;
`;
const StUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding: 0;
`;

const StUserName = styled.h4`
  width: 42px;
  height: 21px;
  font-size: 15px;
  line-height: 1.4;
  text-align: left;
  color: #fff;
`;

const StCommentText = styled.p`
  font-size: 15px;
  line-height: 1.4;
  text-align: left;
  color: #999;
`;

const StBtn = styled.div`
  height: 28px;
  display: flex;
  gap: 12px;
  padding: 8px 0 0;
`;
const StDelete = styled.button`
  font-size: 14px;
  line-height: 1.4;
  color: #999;
`;
const StRetouch = styled.button`
  font-size: 14px;
  line-height: 1.4;
  color: #999;
`;

export default Comment;
