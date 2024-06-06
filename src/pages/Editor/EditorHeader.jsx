import { useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from '@/components/Button';

const EditorHeader = () => {
  const { id } = useParams();
  const isNewPage = !id;

  const navigate = useNavigate();
  return (
    <StHeaderBar>
      <Button onClick={() => navigate(-1)} rounded size="default" variant="secondary">
        뒤로가기
      </Button>
      <Button type="submit" rounded size="default" variant="secondary">
        {isNewPage ? '저장' : '수정완료'}
      </Button>
    </StHeaderBar>
  );
};

const StHeaderBar = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
  height: 118px;
  align-items: center;
`;

export default EditorHeader;
