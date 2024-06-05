import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { Button } from '@/components/Button';
import Header from '@/components/Header';
import supabase from '@/supabase/supabaseClient';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const GoJoin = () => {
    navigate('/Join');
  };

  const emailCheck = (email) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleLogin = async () => {
    setLoading(true);
    setError(''); // Clear any previous errors

    if (!emailCheck(email)) {
      alert('이메일 형식으로 입력해주세요 (ex: sample@email.com)');
      setLoading(false);
      return;
    }

    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      console.log('로그인 성공:', data.user);
      // Save login info to localStorage
      localStorage.setItem('supabase.auth.token', data.session.access_token);
      localStorage.setItem('supabase.auth.user', JSON.stringify(data.user));
      navigate('/'); // Navigate to the main page upon successful login
    }
  };

  return (
    <>
      <Header />
      <StLayout>
        <StJoinArea>
          <StJoinTitle>
            <StHeading>
              {' '}
              ✍🏻 <StStrong>Blood</StStrong>folio
            </StHeading>
            <div style={{ paddingTop: '20px' }}>
              나의 작품을 공유하고, 다른사람 작품을 보며 영감도 얻어요
            </div>
          </StJoinTitle>

          <StJoinInputarea>
            <StJoinFormInputBox>
              <StInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={handleEmailChange}
              />
            </StJoinFormInputBox>
            <StJoinFormInputBox>
              <StInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="비밀번호를 입력해주세요 (6자 이상)"
              />
            </StJoinFormInputBox>
            <StJoinFormInputBox>
              <Button
                style={{ fontSize: '15px', fontWeight: '700', width: '360px', height: '48px' }}
                onClick={handleLogin}
                disabled={loading}
              >
                {loading ? '로그인 중...' : '로그인하기'}
              </Button>
              {error && <div style={{ color: '#845BFB', paddingTop: '10px' }}>{error}</div>}
            </StJoinFormInputBox>
          </StJoinInputarea>
          <StJoinFooter>
            <StFooterText>아직 Bloodfolio의 회원이 아니신가요?</StFooterText>
            <StJoinButton onClick={GoJoin}>회원가입하기</StJoinButton>
          </StJoinFooter>
        </StJoinArea>
      </StLayout>
    </>
  );
};

const StHeading = styled.h1`
  font-size: 20px;
  font-weight: 300;
  color: #ffff;
`;
const StLayout = styled.main`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const StJoinArea = styled.div`
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

const StInput = styled.input`
  padding-left: 20px;
  font-size: 1rem;
  height: 48px;
  width: 100%;
  max-width: 360px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const StJoinButton = styled.button`
  background: none;
  border: none;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

export default Login;
