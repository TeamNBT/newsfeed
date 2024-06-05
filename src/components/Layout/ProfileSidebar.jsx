import { useNavigate, useLocation } from 'react-router-dom';
import styled from 'styled-components';
import { e11yHidden, ellipsisStyle } from '@/styles/utils';
import { Button } from '../Button';

const user = {
  name: 'm a r i',
  avatar: 'src/assets/images/common/user.png',
  job: '프론트엔드 @스파르타코딩클럽',
  introduction: '파이팅 파이팅!'
};

const ProfileSidebar = () => {
  const navigate = useNavigate();
  const location = useLocation(); 

  const GoLogin = () => {
    if (location.pathname !== '/login') {
      navigate('/login');
    }
  };

  return (
    <StAside>
      <StProfile>
        <StRow>
          <StThumbnail>
            <StImageBox>
              <StImage src={user.avatar} alt={user.name} />
            </StImageBox>
            <StButton type="button">
              <StIcon />
              <StHiddenText>프로필 수정하기</StHiddenText>
            </StButton>
          </StThumbnail>
          <StTextContent>
            <StName>{user.name}</StName>
            <StJob>{user.job}</StJob>
          </StTextContent>
        </StRow>
        <StIntroduction>
          <StTitle>소개</StTitle>
          <StContent>{user.introduction}</StContent>
        </StIntroduction>
      </StProfile>
      <Button onClick={GoLogin} type="link" size="medium" fullWidth>
        가입하고 포트폴리오 올리기
      </Button>
    </StAside>
  );
};

const StAside = styled.aside`
  width: 320px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  flex-shrink: 0;
  position: sticky;
  top: 118px;
  z-index: 10;
`;

const StProfile = styled.div`
  background-color: var(--color-white);
  border-radius: 12px;
  padding: 24px 16px;
`;

const StRow = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const StImageBox = styled.div`
  width: 82px;
  height: 82px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const StImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const StThumbnail = styled.div`
  position: relative;
`;

const StButton = styled.button`
  position: absolute;
  bottom: 0;
  right: 1px;
  width: 24px;
  height: 24px;
  background-color: rgba(255, 246, 246, 0.9);
  backdrop-filter: blur(4px);
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StIcon = styled.span`
  display: flex;
  width: 14px;
  height: 20px;
  background: url(src/assets/images/common/pencil.png) no-repeat center center / contain;
`;

const StHiddenText = styled.span`
  ${e11yHidden};
`;

const StTextContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex-grow: 1;
`;

const StName = styled.strong`
  font-size: 15px;
  font-weight: 600;
  color: var(--color-black);
  line-height: 1.4;
  ${ellipsisStyle(1)};
`;

const StJob = styled.span`
  font-size: 13px;
  font-weight: 500;
  color: #777777;
  line-height: 1.4;
  ${ellipsisStyle(1)};
`;

const StIntroduction = styled.div`
  margin-top: 16px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const StTitle = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: var(--color-black);
  line-height: 1.4;
`;

const StContent = styled.div`
  font-size: 13px;
  font-weight: 600;
  color: #777777;
  line-height: 1.4;
  ${ellipsisStyle(1)};
`;

export default ProfileSidebar;
