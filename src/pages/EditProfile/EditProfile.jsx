import { useDispatch, useSelector } from 'react-redux';
import { styled } from 'styled-components';
import { Button } from '@/components/Button';
import { Input } from '@/components/Input';
import DEFAULT_AVATAR from '@/assets/images/common/user.png';
import { updateUserThunk } from '@/redux/auth/authThunk';

const EditProfile = () => {
  const dispatch = useDispatch();
  const { displayName, introduction, job, email } = useSelector(({ auth }) => auth.data?.userInfo);

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { displayName, job, introduction, password, confirmPassword } = Object.fromEntries(
      formData.entries()
    );

    if (password && password !== confirmPassword) {
      alert('비밀번호가 일치하지 않아요');
      return;
    }

    const result = await dispatch(
      updateUserThunk({
        data: {
          displayName,
          job,
          introduction
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

  return (
    <StProfileForm onSubmit={onSubmit}>
      <h2>내 프로필</h2>
      <div>내 프로필을 확인하고 수정할 수 있어요</div>
      <StLine />
      <StImageBox>
        <StImage src={DEFAULT_AVATAR} />
      </StImageBox>
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

const StButton = styled(Button)`
  margin-top: 50px;
`;

const StImageBox = styled.div`
  width: 80px;
  height: 80px;
  background-color: #e4e4e4;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const StInput = styled(Input)`
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
  border-top: 1px solid hsl(0, 0%, 94.11764705882352%);
  margin: 20px 0;
`;

const StJoinFormInputBox = styled.div`
  margin-top: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

export default EditProfile;
