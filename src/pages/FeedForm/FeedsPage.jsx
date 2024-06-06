import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteExistingFeedThunk, loadFeedThunk } from '@/redux/feeds/feedsThunk';

const FeedsPage = () => {
  const feed = useSelector((state) => state.feeds.feed);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deletingFeedId = useSelector((state) => state.feeds.deletingFeedId); // 삭제 중인 포스트 ID

  const handleDelete = (id) => {
    dispatch(deleteExistingFeedThunk(id));
  };

  useEffect(() => {
    dispatch(loadFeedThunk(117));
  }, [dispatch]);

  return (
    <StFeed>
      <Link to="/editor/new">새 글 작성</Link>
      <h1>피드 목록</h1>
      <>
        <div key={feed.id}>
          {deletingFeedId === feed.id ? <p>삭제 중...</p> : null}
          {feed.contents ? (
            <>
              <h1>제목 : {feed.title}</h1>
              <div dangerouslySetInnerHTML={{ __html: feed.contents }} />
            </>
          ) : (
            <p>컨텐츠를 찾을 수 없습니다.</p>
          )}
          <Link to={`/editor/${feed.id}`} style={{ color: 'black', background: 'white' }}>
            수정
          </Link>
          <button
            style={{ color: 'black', background: 'white' }}
            onClick={() => handleDelete(feed.id)}
          >
            삭제
          </button>
        </div>
      </>

      <button onClick={() => navigate('/editor')} style={{ color: 'white', padding: '20px' }}>
        새 글 작성
      </button>
    </StFeed>
  );
};

const StFeed = styled.div`
  color: white;
`;

export default FeedsPage;
