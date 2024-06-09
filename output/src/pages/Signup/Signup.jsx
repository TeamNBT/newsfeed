import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import { Button } from '@/components/Button';
import { AuthHeader } from '@/components/Header';
import { Input, PasswordInput } from '@/components/Input';
import { registerUserThunk } from '@/redux/auth/authThunk';

const inputFields = [
  { type: 'email', name: 'email', placeholder: '이메일', required: true },
  { type: 'text', name: 'displayName', placeholder: '이름', required: true },
  {
    type: 'password',
    name: 'password',
    placeholder: '비밀번호를 입력해주세요 (6자 이상)',
    maxLength: 18,
    required: true
  },
  {
    type: 'password',
    name: 'confirmPassword',
    placeholder: '비밀번호를 한번 더 입력해주세요 (6자 이상)',
    maxLength: 18,
    required: true
  }
];

const Signup = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, loading } = useShallowEqualSelector((state) => ({
    error: state.auth.error,
    loading: state.auth.loading
  }));

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password, confirmPassword, displayName } = Object.fromEntries(
      formData.entries()
    );

    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않아요, 다시 입력해주세요');
      return;
    }

    const result = await dispatch(registerUserThunk({ email, password, displayName }));

    if (result.error) return;

    alert('회원가입이 완료되었어요, 이메일 인증을 완료해주세요');
    navigate('/');
  };

  return (
    <>
      <AuthHeader />
      <StLayout>
        <StJoinArea onSubmit={onSubmit}>
          <StJoinTitle>
            <StHeading>
              ✍🏻 <StStrong>Blood</StStrong>folio
            </StHeading>
            <StSubTitle>쾌적한 사용을 위해 회원가입을 해주세요</StSubTitle>
          </StJoinTitle>
          <StJoinInputArea>
            {inputFields.map((field) => (
              <StJoinFormInputBox key={field.name}>
                {field.type === 'password' ? <PasswordInput {...field} /> : <Input {...field} />}
              </StJoinFormInputBox>
            ))}
            {error && <StErrorMessage>{error}</StErrorMessage>}
            <StJoinFormInputBox>
              <Button
                type="submit"
                style={{ fontSize: '15px', fontWeight: '700', width: '360px', height: '48px' }}
                disabled={loading}
              >
                {loading ? '가입 중...' : '가입하기'}
              </Button>
              <StFooterText>
                이 프로젝트는 상업적인 용도로 사용되지 않으며,
                <br />
                가입을 계속 진행할 경우 개인정보 수집에 동의한 것으로 간주됩니다
              </StFooterText>
            </StJoinFormInputBox>
          </StJoinInputArea>
        </StJoinArea>
      </StLayout>
    </>
  );
};

const StLayout = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const StHeading = styled.h1`
  font-size: 22px;
  font-weight: 300;
  color: #ffff;
`;

const StJoinArea = styled.form`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px 0;
`;

const StJoinTitle = styled.div`
  width: 100%;
  margin-bottom: 30px;
  text-align: center;
`;

const StSubTitle = styled.div`
  padding-top: 20px;
`;

const StJoinInputArea = styled.div`
  width: 100%;
  text-align: center;
`;

const StJoinFormInputBox = styled.div`
  margin-top: 16px;
`;

const StStrong = styled.strong`
  font-weight: 600;
`;

const StErrorMessage = styled.div`
  color: var(--color-primary);
  padding-top: 10px;
`;

const StFooterText = styled.div`
  padding-top: 50px;
  font-size: 14px;
  line-height: 140%;
`;

export default Signup;
