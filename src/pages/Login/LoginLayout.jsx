import { Outlet, Link, useNavigate, useLocation } from 'react-router-dom';
import { useState } from 'react';
import { styled } from 'styled-components';
import Header from '../../components/Header';
import { Button } from '../../components/Button';
import supabase from '../../supabase/supabaseClient';

const LoginLayout = () => {
  const navigate = useNavigate();  
  const location = useLocation();   //페이지 이동을 위한 navigate
  //useState
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const GoJoin = () => {
    if (location.pathname !== '/Join') { // 현재 경로가 /Join 아닌 경우에만 이동
      navigate("/Join");
    }
  };

  //유효성 검사
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
    if (!emailCheck(email)) {
      alert('이메일 형식으로 입력해주세요 (ex: sample@email.com)');
      setLoading(false);
      return;
    }
    const { user, error } = await supabase.auth.signIn({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      // 로그인 성공 로직
      console.log('로그인 성공:', user);
      navigate('/'); // 로그인 성공 후 이동할 페이지로 네비게이트
    }
  };

  return (
    <>
      <Header />
      <StyledLayout>
        <JoinArea>
          <JoinTitle>
          <StyledHeading> ✍🏻{' '}
              <StyleStrong>Blood</StyleStrong>folio</StyledHeading>
            <div style={{ paddingTop: '20px' }}>나의 작품을 공유하고, 다른사람 작품을 보며 영감도 얻어요</div>
          </JoinTitle>

          <JoinInputarea>
            <JoinFormInputBox>
              <StyleInput
                type="text"
                placeholder="이메일"
                value={email}
                onChange={handleEmailChange}
              />
            </JoinFormInputBox>
            <JoinFormInputBox>
              <StyleInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='비밀번호를 입력해주세요 (6자 이상)'
              />
            </JoinFormInputBox>
            <JoinFormInputBox>
              <Button style={{ fontSize: '15px', fontWeight: '700', width: '360px', height: '48px' }} onClick={handleLogin} disabled={loading}>
                {loading ? '로그인 중...' : '로그인하기'}
              </Button>
              {error && <div style={{ color: '#845BFB', paddingTop: '10px' }}>{error}</div>}
            </JoinFormInputBox>
          </JoinInputarea>
          <JoinFooter>
          <div style={{fontSize:'14px'}}>아직 Bloodfolio의 회원이 아니신가요?</div>
          <JoinButton onClick={GoJoin}>회원가입하기</JoinButton>
        </JoinFooter>
        </JoinArea>
      </StyledLayout>
    </>
  );
};

const StyledHeading = styled.h1`
  font-size: 20px;
  font-weight: 300;
  color: #ffff;
`;
const StyledLayout = styled.main`
  width: 90%;
  max-width: 1400px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

const JoinArea = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
  margin: 20px 0;

  @media (max-width: 768px) {
    padding: 10px;
    margin: 10px 0;
  }
`;

const JoinTitle = styled.div`
  width: 100%;
  margin-bottom: 20px;
  text-align: center;

  @media (max-width: 768px) {
    margin-bottom: 10px;
  }
`;

const JoinInputarea = styled.div`
  width: 100%;
  text-align: center;
`;

const JoinFormInputBox = styled.div`
  margin-top: 16px;

  @media (max-width: 768px) {
    margin-top: 10px;
  }
`;

const StyleStrong = styled.strong`
  font-weight: 600;
`;

const StyleInput = styled.input`
  padding-left: 20px;
  font-size: 1rem;
  height: 48px;
  width: 100%;
  max-width: 360px;
  border-radius: 8px;
  border: 1px solid #ddd;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    height: 40px;
    max-width: 100%;
  }
`;

const JoinFooter = styled.div`
  width: 360px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 50px;
`;

const JoinButton = styled.button`
  background: none;
  border: none;
  font-weight: 500;
  color: #fff;
  cursor: pointer;
  text-decoration: none;
`;

export default LoginLayout;
