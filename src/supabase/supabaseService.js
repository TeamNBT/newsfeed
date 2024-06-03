import supabase from './supabaseClient';

export const fetchFeeds = async () => {
  const { data, error } = await supabase.from('feeds').select('*').order(
    'id', // id 컬럼 기준으로 데이터 정렬하기
    {
      ascending: false // 내림차순 설정
    }
  );

  if (error) {
    console.error('게시물 가져오기 에러: ', error.message);
    throw error;
  }
  return data;
};

export const createFeed = async (feed) => {
  // 요청 데이터 확인
  console.log('게시물 생성 데이터:', feed);

  const { data, error } = await supabase.from('feeds').insert(feed).single();

  if (error) {
    console.error('게시물 생성 에러: ', error.message);
    throw error;
  }
  console.log('DB저장 게시물 데이터:', data);

  return data;
};

// Supabase의 "feeds" 데이터베이스에 "thumbnail" 컬럼에 이미지 URL을 저장하는 함수
export const updateThumbnailInDatabase = async (imageUrl) => {
  const { data, error } = await supabase
    .from('feeds')
    .select('thumbnail')
    .insert(imageUrl)
    .single();

  if (error) {
    console.error('썸네일 에러:', error);
    return;
  }

  console.log('썸네일에러:', data);
  return data;
};

export const updateFeed = async (id, updates) => {
  // 요청 데이터 확인
  console.log('업데이트 id: ', id, '업데이트 data:', updates);

  const { data, error } = await supabase.from('feeds').update(updates).eq('id', id).select();

  if (error) {
    console.error('게시물 업데이트 에러: ', error.message);
    throw error;
  }
  console.log(data[0]);
  return data;
};

export const deleteFeed = async (id) => {
  // 요청 데이터 확인
  console.log('게시물 삭제 ID:', id);

  const { data, error } = await supabase.from('feeds').delete().eq('id', id);

  if (error) {
    console.error('게시물 삭제 에러: ', error.message);
    throw error;
  }
  return data;
};
