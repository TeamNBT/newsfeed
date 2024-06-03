import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { deleteExistingFeed, loadFeeds, setEditingFeed } from '../../redux/slices/feedsSlices';

const FeedsPage = () => {
  const feeds = useSelector((state) => state.feeds.feeds);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const deletingFeedId = useSelector((state) => state.feeds.deletingFeedId); // 삭제 중인 포스트 ID
  const isEditingFeedLoading = useSelector((state) => state.feeds.isEditingFeedLoading);

  // 데이터 있는지?
  const isDataLoaded = feeds && feeds.length > 0;

  // 수정
  const handleEdit = (feed) => {
    dispatch(setEditingFeed(feed));
    navigate('/editor/');
  };

  // 삭제
  const handleDelete = (id) => {
    dispatch(deleteExistingFeed(id));
  };

  // 데이터 로드
  useEffect(() => {
    dispatch(loadFeeds());
  }, [dispatch]);

  return (
    <StFeed>
      <Link to="/editor">새 글 작성</Link>
      <h1>피드 목록</h1>
      <>
        {isDataLoaded ? (
          feeds
            .filter((feed) => feed && feed.id)
            .map((feed) => (
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
                <button
                  style={{ color: 'black', background: 'white' }}
                  onClick={() => handleEdit(feed)}
                >
                  수정
                </button>
                <button
                  style={{ color: 'black', background: 'white' }}
                  onClick={() => handleDelete(feed.id)}
                >
                  삭제
                </button>
              </div>
            ))
        ) : (
          <h3>컨텐츠를 등록해주세요!</h3>
        )}
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
