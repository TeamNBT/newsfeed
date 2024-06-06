import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import { Button } from '@/components/Button';
import { AuthHeader } from '@/components/Header';
import { Input, PasswordInput } from '@/components/Input';
import { loginUserThunk } from '@/redux/auth/authThunk';

const inputFields = [
  { type: 'email', name: 'email', placeholder: '이메일', required: true },
  {
    type: 'password',
    name: 'password',
    placeholder: '비밀번호를 입력해주세요 (6자 이상)',
    maxLength: 18,
    required: true
  }
];

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { error, loading } = useShallowEqualSelector((state) => ({
    error: state.auth.error,
    loading: state.auth.loading
  }));

  const onSubmit = async (event) => {
    event.preventDefault();

    const formData = new FormData(event.target);
    const { email, password } = Object.fromEntries(formData.entries());

    const result = await dispatch(loginUserThunk({ email, password }));

    if (result.error) return;

    alert('로그인이 완료되었어요');
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
            <div style={{ paddingTop: '20px' }}>
              나의 작품을 공유하고, 다른사람 작품을 보며 영감도 얻어요
            </div>
          </StJoinTitle>

          <StJoinInputarea>
            {inputFields.map((field) => (
              <StJoinFormInputBox key={field.name}>
                {field.type === 'password' ? <PasswordInput {...field} /> : <Input {...field} />}
              </StJoinFormInputBox>
            ))}
            <StJoinFormInputBox>
              <Button
                type="submit"
                style={{ fontSize: '15px', fontWeight: '700', width: '360px', height: '48px' }}
                disabled={loading}
              >
                {loading ? '로그인 중...' : '로그인하기'}
              </Button>
              {error && <div style={{ color: '#845BFB', paddingTop: '10px' }}>{error}</div>}
            </StJoinFormInputBox>
          </StJoinInputarea>
          <StJoinFooter>
            <StFooterText>
              아직 <strong>Blood</strong>folio의 회원이 아니신가요?
            </StFooterText>
            <StJoinButton to="/signup">회원가입하기</StJoinButton>
          </StJoinFooter>
        </StJoinArea>
      </StLayout>
    </>
  );
};

const StHeading = styled.h1`
  font-size: 22px;
  font-weight: 300;
  color: #ffff;
`;
const StLayout = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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

const StFooterText = styled.div`
  font-size: 14px;
`;

const StJoinFooter = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const StJoinTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;
`;

const StJoinInputarea = styled.div`
  width: 100%;
  text-align: center;
`;

const StJoinFormInputBox = styled.div`
  margin-top: 16px;
`;

const StStrong = styled.strong`
  font-weight: 600;
`;

const StJoinButton = styled(Link)`
  background: none;
  border: none;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

export default Login;
