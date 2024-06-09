import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import useIsLoginUser from '@/hooks/useIsLoginUser';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import { Button } from '@/components/Button';
import Typography from '@/components/Typography';
import DEFAULT_AVATAR from '@/assets/images/common/user.png';
import {
  createCommentThunk,
  deleteCommentThunk,
  getCommentsThunk
} from '@/redux/comments/commentThunk';
import Retouch from './Retouch';

const Comment = () => {
  const isLoginUser = useIsLoginUser();
  const { id: feedId } = useParams();
  const [modal, setModal] = useState(false);
  const [selectedCommentId, setSelectedCommentId] = useState(null);
  const dispatch = useDispatch();
  const comments = useSelector(({ comments }) => comments.data);
  const { userId, author, thumbnail } = useShallowEqualSelector(({ auth }) => ({
    userId: auth.data?.userId,
    author: auth.data.userInfo?.displayName,
    thumbnail: auth.data.userInfo?.thumbnail
  }));

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { content } = Object.fromEntries(formData.entries());

    if (!content) {
      alert('댓글을 입력하세요');
      return;
    }

    const result = await dispatch(
      createCommentThunk({
        content,
        feed_id: feedId,
        user_id: userId,
        thumbnail,
        author
      })
    );

    if (result.error) {
      alert(result.error.message);
      return;
    }
    await dispatch(getCommentsThunk(feedId));

    alert('댓글을 작성했어요');
    event.target.reset();
  };

  const onClickRetouch = (commentId) => {
    setModal(true);
    setSelectedCommentId(commentId);
  };

  const handleDelete = async (commentId) => {
    const result = await dispatch(deleteCommentThunk(commentId));
    if (result.error) {
      alert(result.error.message);
      return;
    }
    alert('댓글이 삭제되었어요');

    await dispatch(getCommentsThunk(feedId));
  };

  return (
    <StCommentTextBox>
      {isLoginUser && (
        <StForm onSubmit={onSubmit}>
          <StCommentTextarea name="content" placeholder="댓글을 입력해주세요" required />
          <Button type="submit" rounded variant="secondary">
            입력
          </Button>
        </StForm>
      )}
      {comments &&
        comments.map((comment) => {
          const isMyComment = userId === comment.user_id;

          return (
            <StCommentWindow key={comment.id}>
              <StUserImg src={comment.thumbnail || DEFAULT_AVATAR} />
              <StUser>
                <Typography variant="typography3" color="#ffffff">
                  {comment.author}
                </Typography>
                <Typography variant="typography3">{comment.content}</Typography>
                {isMyComment && (
                  <StBtn>
                    <StRetouch onClick={() => onClickRetouch(comment.id)}>수정</StRetouch>
                    <StDelete onClick={() => handleDelete(comment.id)}>삭제</StDelete>
                  </StBtn>
                )}
              </StUser>
            </StCommentWindow>
          );
        })}
      {modal && <Retouch commentId={selectedCommentId} setModal={setModal} />}
    </StCommentTextBox>
  );
};

const StForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 15px;
`;

const StCommentTextarea = styled.textarea`
  background-color: var(--color-base-background);
  color: var(--color-white);
  width: 100%;
  height: 100px;
  padding: 16px 21px;
  border-radius: 12px;
  border: solid 1px var(--color-border);
  resize: none;
  font-family: inherit;
  font-size: 15px;
`;

const StCommentTextBox = styled.div`
  padding: 6px 0px 35px;
`;

const StCommentWindow = styled.div`
  width: 100%;
  display: flex;
  gap: 24px;
  margin-top: 40px;
`;

const StUserImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
  flex-shrink: 0;
`;

const StUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
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
  color: var(--color-foreground);
`;
const StRetouch = styled.button`
  font-size: 14px;
  line-height: 1.4;
  color: var(--color-foreground);
`;

export default Comment;
