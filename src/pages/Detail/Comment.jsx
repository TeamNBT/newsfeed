import { Button } from '@/components/Button';
import supabase from '@/supabase/supabaseClient';
import { useEffect, useState } from 'react';
import styled from 'styled-components';

const userComment = {
  img: 'src/assets/images/common/user.png',
  name: 'mari'
};

const Comment = () => {
  const [content, setContent] = useState('');
  const [comment, setComment] = useState([]);

  const onContent = (e) => {
    setContent(e.target.value);
  };
  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase.from('comments').select('*');
      if (error) {
        console.log('error', error);
      } else {
        setComment(data);
        console.log(data);
      }
    };
    fetchData();
  }, []);

  const onClick = async () => {
    const { data, error } = await supabase.from('comments').insert({
      content
    });
    if (error) {
      console.log('error', error);
    } else {
      alert('댓글입력이 완료되었습니다.');
      console.log('data 저장해', data);
    }
  };

  const handleDelete = async (userId) => {
    const { error } = await supabase.from('comments').delete().eq('auther', userId);
  };
  return (
    <>
      <StComment>
        <StCommentTextBox placeholder="댓글을 입력해주세요" value={content} onChange={onContent} />
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
                  <StRetouch>수정</StRetouch>
                  <StDelete onClick={() => handleDelete(user.auther)}>삭제</StDelete>
                </StBtn>
              </StUser>
            </StCommentWindow>
          );
        })}
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
  border: solid 1px var(--color-border);
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
  border-radius: 50%;
  overflow: hidden;
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
