import { useState } from 'react';
import { styled } from 'styled-components';
import { Button } from '@/components/Button';
import Header from '@/components/Header';
import supabase from '@/supabase/supabaseClient';

const JoinLayout = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailCheck = (email) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return emailRegex.test(email);
  };

  const handleEmailChange = (e) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSignUp = async () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    if (!emailCheck(email)) {
      alert('이메일 형식으로 입력해주세요 (ex: sample@email.com)');
      return;
    }

    setLoading(true);

    const { user, error } = await supabase.auth.signUp({
      email,
      password
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      // 회원가입 성공 로직
      console.log('회원가입 성공:', user);
    }
  };

  return (
    <>
      <Header />
      <StyledLayout>
        <JoinArea>
          <JoinTitle>
            <StyledHeading>
              ✍🏻 <StyleStrong>Blood</StyleStrong>folio
            </StyledHeading>
            <div style={{ paddingTop: '20px' }}>쾌적한 사용을 위해 회원가입을 해주세요</div>
          </JoinTitle>

          <JoinInputarea>
            <JoinFormInputBox>
              <StyleInput
                type="email"
                placeholder="이메일"
                value={email}
                onChange={handleEmailChange}
              />
            </JoinFormInputBox>
            <JoinFormInputBox>
              <StyleInput
                type="password"
                placeholder="비밀번호를 입력해주세요 (6자 이상)"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </JoinFormInputBox>
            <JoinFormInputBox>
              <StyleInput
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요 (6자 이상)"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </JoinFormInputBox>
            {error && <div style={{ color: 'red', paddingTop: '10px' }}>{error}</div>}
            <JoinFormInputBox>
              <Button
                style={{ fontSize: '15px', fontWeight: '700', width: '360px', height: '48px' }}
                onClick={handleSignUp}
                disabled={loading}
              >
                {loading ? '가입 중...' : '가입하기'}
              </Button>
              <div style={{ paddingTop: '50px', fontSize: '14px', lineHeight: '140%' }}>
                이 프로젝트는 상업적인 용도로 사용되지 않으며, 가입을 계속 진행할 경우
                <br />
                개인정보 수집에 동의한 것으로 간주됩니다
              </div>
            </JoinFormInputBox>
          </JoinInputarea>
        </JoinArea>
      </StyledLayout>
    </>
  );
};

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

const StyledHeading = styled.h1`
  font-size: 20px;
  font-weight: 300;
  color: #ffff;
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
  margin-bottom: 30px;
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

export default JoinLayout;
