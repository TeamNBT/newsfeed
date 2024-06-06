import { Button } from '../Button';
import {
  StImage,
  StImageBox,
  StName,
  StProfile,
  StRow,
  StTextContent,
  StThumbnail
} from './styles';
import { DEFAULT_AVATAR } from '.';

const GuestProfile = () => {
  return (
    <>
      <StProfile>
        <StRow>
          <StThumbnail>
            <StImageBox>
              <StImage src={DEFAULT_AVATAR} alt="기본 프로필 이미지" />
            </StImageBox>
          </StThumbnail>
          <StTextContent>
            <StName>로그인이 필요해요 🥲</StName>
          </StTextContent>
        </StRow>
      </StProfile>
      <Button href="/signin" size="medium" fullWidth>
        가입하고 포트폴리오 올리기
      </Button>
    </>
  );
};

export default GuestProfile;
