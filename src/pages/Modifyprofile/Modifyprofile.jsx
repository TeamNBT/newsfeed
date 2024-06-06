import { useState, useEffect } from 'react';
import { styled } from 'styled-components';
import { Button } from '@/components/Button';
import Header from '@/components/Header';
import ProfileSidebar from '@/components/ProfileSideBar/ProfileSideBar';
import supabase from '@/supabase/supabaseClient';


const Modifyprofile = () => {
  const [user, setUser] = useState(null);
  const [name, setName] = useState('');
  const [job, setJob] = useState('');
  const [introduction, setIntroduction] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  useEffect(() => {
    const fetchUserData = async () => {
      const session = supabase.auth.session();
      if (session) {
        const { data: userData } = await supabase
          .from('profiles')
          .select('*')
          .eq('id', session.user.id)
          .single();
        setUser(userData);
        setName(userData.name);
        setJob(userData.job);
        setIntroduction(userData.introduction);
        setEmail(session.user.email);
      }
    };
    fetchUserData();
  }, []);

  const handleProfileUpdate = async () => {
    if (password !== confirmPassword) {
      alert('비밀번호가 일치하지 않습니다.');
      return;
    }

    const updates = {
      id: user.id,
      name,
      job,
      introduction,
      updated_at: new Date(),
    };

    if (password) {
      const { error: passwordError } = await supabase.auth.update({ password });
      if (passwordError) {
        alert('비밀번호 업데이트 실패: ' + passwordError.message);
        return;
      }
    }

    const { error } = await supabase.from('profiles').upsert(updates);

    if (error) {
      alert('프로필 업데이트 실패: ' + error.message);
    } else {
      alert('프로필이 성공적으로 업데이트되었습니다.');
    }
  };

  if (!user) return <div>Loading...</div>;

  return (
    <>
      <Header />
      <StLayout>
        <ProfileSidebar />
        <StSection>
          <StProfileSection>
            <h2>내 프로필</h2>
            <div>내 프로필을 확인하고 수정할 수 있어요</div>
            <StLine />
            <div>프로필 사진
              <StImageBox>
                <StImage src={user.avatar || 'src/assets/images/common/user.png'} alt={user.name} />
              </StImageBox>
            </div>
            <StJoinFormInputBox>
              이름
              <StInput
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </StJoinFormInputBox>
            <StJoinFormInputBox>
              직업
              <StInput
                type="text"
                value={job}
                onChange={(e) => setJob(e.target.value)}
              />
            </StJoinFormInputBox>
            <StJoinFormInputBox>
              소개
              <StInput
                type="text"
                value={introduction}
                onChange={(e) => setIntroduction(e.target.value)}
              />
            </StJoinFormInputBox>
            <StLine />
            <StJoinFormInputBox>
              이메일
              <StInput
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled
              />
            </StJoinFormInputBox>
            <StJoinFormInputBox>
              비밀번호
              <StInput
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </StJoinFormInputBox>
            <StJoinFormInputBox>
              비밀번호 확인
              <StInput
                type="password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </StJoinFormInputBox>
            <Button onClick={handleProfileUpdate} type="link" size="medium" Width="500px">
              프로필 수정
            </Button>
          </StProfileSection>
        </StSection>
      </StLayout>
    </>
  );
};

const StLayout = styled.main`
  width: 1400px;
  margin: 0 auto;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  flex: 1;
`;
const StImageBox = styled.div`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  overflow: hidden;
  flex-shrink: 0;
`;

const StImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const StProfileSection = styled.div`
  width: 1064px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 60px 60px 6px;
  margin-bottom: 32px;
  background-color: #fff;
  height: 1000px;
  border-radius: 16px;
`;

const StSection = styled.section`
  flex: 1;
`;

const StLine = styled.div`
  width: 100%;
  height: 1px;
  border-top: 1px solid hsl(0, 0%, 94.11764705882352%);
  margin: 20px 0;
`;

//input
const StJoinFormInputBox = styled.div`
  margin-top: 8px;
`;

const StInput = styled.input`
  padding-left: 20px;
  font-size: 16px;
  height: 48px;
  width: 100%;
  max-width: 600px;
  border-radius: 8px;
  border: 1px solid #ddd;
`;

export default Modifyprofile;
