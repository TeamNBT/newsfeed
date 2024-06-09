import { useDispatch } from 'react-redux';
import { Link, useNavigate, useParams } from 'react-router-dom';
import styled from 'styled-components';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import { copyURLToClipboard } from '@/utils/copyURLToClipboard';
import Loader from '@/components/Loader';
import Typography from '@/components/Typography';
import {
  GeneralLikeFillIcon,
  GeneralLikeIcon,
  GeneralPencilFIllIcon,
  GeneralShareIcon,
  GeneralTrashCanIcon
} from '@/svg';
import { deleteExistingFeedThunk } from '@/redux/feeds/feedsThunk';
import Comment from './Comment';

const Detail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { feed, userId, isLoading } = useShallowEqualSelector(({ auth, feeds }) => ({
    feed: feeds.feed,
    userId: auth.data?.userId,
    isLoading: feeds.loading
  }));
  const dispatch = useDispatch();
  const isMyPost = userId === feed.user_id;

  const onDelete = async () => {
    const result = await dispatch(deleteExistingFeedThunk(id));

    if (result.error) {
      alert(result.error.message);
      return;
    }

    navigate('/');
  };

  return (
    <StDetailPage>
      <Loader display={isLoading} />
      <StTitleBox>
        <StTitleText>
          <Typography variant="typography5" weight="semibold" color="#ffffff">
            {feed.title}
          </Typography>
          <span>|</span>
          <Typography variant="typography4">{feed.author}</Typography>
        </StTitleText>
        <StBtns>
          <StBtnGroup>
            <StIconBtn onClick={copyURLToClipboard}>
              <GeneralShareIcon />
            </StIconBtn>
            {feed.isLike ? <GeneralLikeFillIcon /> : <GeneralLikeIcon />}
          </StBtnGroup>
          {isMyPost && (
            <StBtnGroup>
              <Link to={`/editor/${feed.id}`}>
                <GeneralPencilFIllIcon />
              </Link>
              <StIconBtn onClick={onDelete}>
                <GeneralTrashCanIcon />
              </StIconBtn>
            </StBtnGroup>
          )}
        </StBtns>
      </StTitleBox>
      <StDiv>
        <div dangerouslySetInnerHTML={{ __html: feed.contents }} />
      </StDiv>
      <Comment />
    </StDetailPage>
  );
};

const StDetailPage = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;
const StTitleBox = styled.div`
  display: flex;
  gap: 22px;
`;

const StTitleText = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const StBtns = styled.div`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
`;

const StBtnGroup = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StDiv = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 32px;
  line-height: 1.5;

  img {
    padding: 5px 0;
  }

  a:hover {
    text-decoration: underline;
  }
  a:before {
    content: '🔗';
    margin-right: 5px;
  }
`;

const StIconBtn = styled.button`
  display: block;

  svg {
    display: block;
  }
`;

export default Detail;
