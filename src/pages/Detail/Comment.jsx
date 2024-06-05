import { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { Button } from '@/components/Button';
import supabase from '@/supabase/supabaseClient';

const userComment = {
  img: 'src/assets/images/common/user.png',
  name: 'mari'
};

const Comment = () => {
  const contentRef = useRef('');
  const [comment, setComment] = useState([]);

  const fetchData = async () => {
    const { data, error } = await supabase.from('comments').select('*');
    if (error) {
      alert('시스템 오류로 댓글을 작성하지 못했어요, 다시 작성해주세요');
    }

    setComment(data);
  };

  const onClick = async () => {
    const content = contentRef.current.value;
    const { error } = await supabase
      .from('comments')
      .insert({
        content
      })
      .select();
    if (error) {
      alert('시스템 오류로 댓글을 가져오지 못했어요, 다시 불러오려면 새로고침해주세요');
    } else if (!content) {
      alert('댓글을 입력하세요');
    } else {
      alert('댓글입력이 완료 되었어요');
    }
    await fetchData();
    contentRef.current.value = '';
  };

  const onClickRetouch = () => {
    if (comment === comment.id) {
      console.log('수정가능');
    } else {
      alert('아이디를 확인해주세요');
    }
  };

  const handleDelete = async (userId) => {
    const { error } = await supabase.from('comments').delete().eq('author', userId);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <StCommentTextarea>
      <StCommentTextBox placeholder="댓글을 입력해주세요" ref={contentRef} />
      <Button rounded variant="secondary" onClick={onClick}>
        입력
      </Button>
      {comment.map((user) => {
        return (
          <StCommentWindow key={user.id}>
            <StUserImg src={userComment.img} />
            <StUser>
              <StUserName>{userComment.name}</StUserName>
              <StCommentText>{user.content}</StCommentText>
              <StBtn>
                <StRetouch onClick={onClickRetouch}>수정</StRetouch>
                <StDelete onClick={() => handleDelete(user.author)}>삭제</StDelete>
              </StBtn>
            </StUser>
          </StCommentWindow>
        );
      })}
    </StCommentTextarea>
  );
};

const StCommentTextBox = styled.textarea`
  background-color: var(--color-base-background);
  color: var(--color-white);
  width: 100%;
  height: 100px;
  padding: 16px 21px;
  border-radius: 12px;
  border: solid 1px var(--color-border);
  resize: none;
`;

const StCommentTextarea = styled.div`
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
  gap: 24px;
  margin-top: 40px;
`;

const StUserImg = styled.img`
  width: 62px;
  height: 62px;
  border-radius: 50%;
  overflow: hidden;
  object-fit: cover;
`;

const StUser = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StUserName = styled.h4`
  width: 42px;
  height: 21px;
  font-size: 15px;
  line-height: 1.4;
  text-align: left;
  color: var(--color-white);
`;

const StCommentText = styled.p`
  font-size: 15px;
  line-height: 1.4;
  text-align: left;
  color: var(--color-foreground);
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
