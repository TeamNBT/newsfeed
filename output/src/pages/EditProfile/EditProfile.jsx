import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import AvatarEditUI from '@/components/AvatarEditUI';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import Typography from '@/components/Typography';
import DEFAULT_AVATAR from '@/assets/images/common/user.png';
import { uploadAvatarImage } from '@/redux/auth/authServices';
import { updateUserThunk } from '@/redux/auth/authThunk';

const EditProfile = () => {
  const dispatch = useDispatch();
  const { displayName, introduction, job, email, thumbnail } = useSelector(
    ({ auth }) => auth.data?.userInfo
  );

  const [imageSrc, setImageSrc] = useState();

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { displayName, job, introduction, password, confirmPassword, thumbnailFile } =
      Object.fromEntries(formData.entries());

    if (password && password !== confirmPassword) {
      alert('비밀번호가 일치하지 않아요');
      return;
    }

    const result = await dispatch(
      updateUserThunk({
        data: {
          displayName,
          job,
          introduction,
          ...(thumbnailFile && { thumbnail: imageSrc })
        },
        ...(password && { password })
      })
    );

    if (result.error) {
      alert(result.error.message);
      return;
    }

    alert('프로필이 변경되었어요');
  };

  const handleImageClick = () => {
    document.getElementById('fileInput').click();
  };

  const handleFileChange = async (event) => {
    const file = event.target.files[0];

    if (file) {
      const uploadResult = await uploadAvatarImage(file);

      if (uploadResult.error) {
        alert('이미지 업로드에 실패했어요');
        return;
      }

      setImageSrc(uploadResult.imageUrl);
    }
  };

  return (
    <StProfileForm onSubmit={onSubmit}>
      <StDiv>
        <Typography as="strong" variant="typography5" weight="semibold" color="#121212">
          내 프로필
        </Typography>
        <StDivideBar />
        <Typography as="p" variant="typography4">
          내 프로필을 확인하고 수정할 수 있어요
        </Typography>
      </StDiv>
      <StLine />
      <StImageBox>
        <StImage src={imageSrc || thumbnail || DEFAULT_AVATAR} />
        <button type="button" onClick={handleImageClick}>
          <AvatarEditUI />
        </button>
      </StImageBox>
      <input
        type="file"
        id="fileInput"
        name="thumbnailFile"
        style={{ display: 'none' }}
        onChange={handleFileChange}
      />
      <StJoinFormInputBox>
        <StLabel htmlFor="displayName">이름</StLabel>
        <StInput
          type="text"
          name="displayName"
          id="displayName"
          defaultValue={displayName}
          required
        />
      </StJoinFormInputBox>
      <StJoinFormInputBox>
        <StLabel htmlFor="job">직업</StLabel>
        <StInput type="text" name="job" defaultValue={job} />
      </StJoinFormInputBox>
      <StJoinFormInputBox>
        <StLabel htmlFor="introduction">소개</StLabel>
        <StInput type="text" name="introduction" defaultValue={introduction} />
      </StJoinFormInputBox>
      <StLine />
      <StJoinFormInputBox>
        <StLabel htmlFor="email">이메일</StLabel>
        <StInput type="email" name="email" disabled defaultValue={email} />
      </StJoinFormInputBox>
      <StJoinFormInputBox>
        <StLabel htmlFor="password">비밀번호 변경</StLabel>
        <StInput type="password" name="password" />
      </StJoinFormInputBox>
      <StJoinFormInputBox>
        <StLabel htmlFor="confirmPassword">비밀번호 변경 확인</StLabel>
        <StInput type="password" name="confirmPassword" />
      </StJoinFormInputBox>
      <StButton type="submit" size="medium">
        프로필 수정
      </StButton>
    </StProfileForm>
  );
};

const StDivideBar = styled.div`
  width: 1px;
  height: 16px;
  background-color: rgba(217, 217, 217, 0.8);
`;

const StDiv = styled.div`
  display: flex;
  align-items: center;
  gap: 9px;
`;

const StButton = styled(Button)`
  margin-top: 50px;
`;

const StImageBox = styled.div`
  width: 80px;
  height: 80px;
  flex-shrink: 0;
  position: relative;
`;

const StInput = styled(Input)`
  width: 100%;
  border: 1px solid #e8e8e8;
`;

const StLabel = styled.label`
  width: 140px;
  display: block;
  font-size: 15px;
`;

const StImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 50%;
  overflow: hidden;
`;

const StProfileForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 60px 60px 80px;
  margin-bottom: 32px;
  background-color: #ffffff;
  border-radius: 16px;
`;

const StLine = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid #e8e8e8;
  margin: 12px 0;
`;

const StJoinFormInputBox = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default EditProfile;
