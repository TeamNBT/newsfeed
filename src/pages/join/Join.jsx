import { useState, useRef } from 'react';
import { styled } from 'styled-components';
import { Button } from '@/components/Button';
import Header from '@/components/Header';
import supabase from '@/supabase/supabaseClient';

const Join = () => {
  const emailRef = useRef('');
  const passwordRef = useRef('');
  const confirmPasswordRef = useRef('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const emailCheck = (email) => {
    const emailRegex = /^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/;
    return emailRegex.test(email);
  };

  const handleSignUp = async () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const confirmPassword = confirmPasswordRef.current.value;

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
      password,
    });

    setLoading(false);

    if (error) {
      setError(error.message);
    } else {
      console.log('회원가입 성공:', user);
    }
  };

  return (
    <>
      <Header />
      <StLayout>
        <StJoinArea>
          <StJoinTitle>
            <StHeading>
              ✍🏻 <StStrong>Blood</StStrong>folio
            </StHeading>
            <StSubTitle>쾌적한 사용을 위해 회원가입을 해주세요</StSubTitle>
          </StJoinTitle>

          <StJoinInputArea>
            <StJoinFormInputBox>
              <StInput
                type="email"
                placeholder="이메일"
                ref={emailRef}
              />
            </StJoinFormInputBox>
            <StJoinFormInputBox>
              <StInput
                type="password"
                placeholder="비밀번호를 입력해주세요 (6자 이상)"
                ref={passwordRef}
              />
            </StJoinFormInputBox>
            <StJoinFormInputBox>
              <StInput
                type="password"
                placeholder="비밀번호를 한번 더 입력해주세요 (6자 이상)"
                ref={confirmPasswordRef}
              />
            </StJoinFormInputBox>
            {error && <StErrorMessage>{error}</StErrorMessage>}
            <StJoinFormInputBox>
              <Button
                style={{ fontSize: '15px', fontWeight: '700', width: '360px', height: '48px' }}
                onClick={handleSignUp}
                disabled={loading}
              >
                {loading ? '가입 중...' : '가입하기'}
              </Button>
              <StFooterText>
                이 프로젝트는 상업적인 용도로 사용되지 않으며, 가입을 계속 진행할 경우
                개인정보 수집에 동의한 것으로 간주됩니다
              </StFooterText>
            </StJoinFormInputBox>
          </StJoinInputArea>
        </StJoinArea>
      </StLayout>
    </>
  );
};

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

const StHeading = styled.h1`
  font-size: 20px;
  font-weight: 300;
  color: #ffff;
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

const StInput = styled.input`
  padding-left: 20px;
  font-size: 16px;
  height: 48px;
  width: 100%;
  max-width: 360px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

const StErrorMessage = styled.div`
  color: red;
  padding-top: 10px;
`;

const StFooterText = styled.div`
  padding-top: 50px;
  font-size: 14px;
  line-height: 140%;
`;

export default Join;
