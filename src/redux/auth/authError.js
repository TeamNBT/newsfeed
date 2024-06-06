const signinError = {
  'Invalid login credentials': '아이디나 비밀번호를 찾을 수 없어요',
  'User not found': '사용자를 찾을 수 없어요',
  'Email not confirmed': '이메일이 확인되지 않았어요',
  'Network error': '네트워크 오류가 발생했어요',
  'Request timeout': '요청 시간이 초과됐어요',
  'Invalid input syntax for type': '잘못된 입력 구문이에요',
  'Unique constraint violated': '이미 존재하는 데이터에요',
  'Invalid JWT': '잘못된 인증 정보에요',
  'JWT expired': '인증 정보가 만료됐어요',
  'Invalid API key': '잘못된 API 키에요',
  'Permission denied': '권한이 거부됐어요'
};
const signupError = {
  'User already registered': '이미 등록된 이메일이에요',
  'Password should be at least 6 characters.': '비밀번호는 최소 6자 이상이어야 해요',
  'Password must contain a number': '비밀번호는 숫자를 포함해야 해요',
  'Invalid email format': '유효하지 않은 이메일 형식이에요',
  'Terms must be accepted': '약관에 동의해야 해요'
};

export const translateErrorMessage = (error) => {
  return (
    { ...signinError, ...signupError }[error.message] ||
    '알 수 없는 오류가 발생했어요, 다시 시도해주세요'
  );
};
