import { Button } from '@/components/Button';
import { Editor } from '@toast-ui/react-editor';
import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { styled } from 'styled-components';
import supabase, { VITE_SUPABASE_URL } from '@/supabase/supabaseClient';
import { addNewFeed, initFeed, updateExistingFeed } from '../../redux/slices/feedsSlices';
import '@toast-ui/editor/dist/i18n/ko-kr';

const toolbar = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote', 'ul', 'ol'],
  ['image', 'link']
];

// 이미지 추출
const getThumbnailFromContents = (contents) => {
  const imgRegex = /<img.*?src="(.*?)".*?>/g;
  const match = imgRegex.exec(contents);
  if (match && match.length > 1) {
    return match[1]; // 첫 번째 매치된 이미지 URL 반환
  } else {
    return null; // 이미지 URL을 찾을 수 없을 경우 null 반환
  }
};

const EditorPage = () => {
  const editorRef = useRef('');
  const titleRef = useRef('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const editingFeed = useSelector((state) => state.feeds.editingFeed);
  const isEditorLoading = useSelector((state) => state.feeds.isEditorLoading);

  console.log('EditorPage', editingFeed);

  const handleSave = () => {
    const title = titleRef.current.value;
    const contents = editorRef.current.getInstance().getHTML(); // 값 가져오기
    const thumbnail = getThumbnailFromContents(contents);

    if (title.trim() === '') {
      return alert('제목을 입력해주세요');
    }
    if (!contents || contents.trim() === '<p><br></p>') {
      return alert('내용을 입력해주세요');
    }

    if (!thumbnail) {
      return alert('이미지는 필수로 넣어야해요');
    }

    editingFeed
      ? dispatch(
          updateExistingFeed({ id: editingFeed.id, updates: { title, contents, thumbnail } })
        )
      : dispatch(addNewFeed({ title, contents, thumbnail }));
  };

  const uploadImage = async (blob) => {
    const { data, error } = await supabase.storage
      .from('images')
      .upload(`public/${Date.now()}-${blob.name}`, blob);

    if (error) {
      console.error('이미지 업로드 에러 :', error);
      return;
    }

    const imageUrl = `${VITE_SUPABASE_URL}/storage/v1/object/public/images/${data.path}`;
    console.log('이미지 URL:', imageUrl);
    return imageUrl;
  };

  // 이미지 base64인코딩 변환
  const onUploadImage = async (blob, callback) => {
    const imageUrl = await uploadImage(blob);
    if (imageUrl) {
      callback(imageUrl, 'image');
    }
  };

  useEffect(() => {
    if (editingFeed) {
      titleRef.current.value = editingFeed.title || ''; // 제목 초기화
      // dispatch(setEditingFeed('')); // 글작성 폼 초기화
      // editorRef.current.getInstance().getHTML('');
    }
  }, [editingFeed]);

  useEffect(() => {
    if (!isEditorLoading) return;
    navigate('/feeds');
  }, [isEditorLoading, navigate]);

  useEffect(() => {
    return () => {
      dispatch(initFeed());
    };
  }, [dispatch]);

  return (
    <StEditor>
      <StHeaderBar>
        <Button onClick={() => navigate(-1)} rounded size="default" type="" variant="secondary">
          뒤로가기
        </Button>
        <Button onClick={handleSave} rounded size="default" type="" variant="secondary">
          {editingFeed ? '수정완료' : '저장'}
        </Button>
        {/* <StHeaderBtn onClick={handleSave}>{editingFeed ? '수정 완료' : '저장'}</StHeaderBtn> */}
      </StHeaderBar>
      <StTitleDiv>
        <StTitleInput type="text" ref={titleRef} placeholder="제목을 입력해주세요!" />
      </StTitleDiv>
      <Editor
        ref={editorRef}
        initialValue={editingFeed ? editingFeed.contents || ' ' : ' '}
        placeholder="여기에 내용을 작성하세요."
        hideModeSwitch
        height="550px"
        initialEditType="wysiwyg"
        toolbarItems={toolbar}
        plugins={[colorSyntax]}
        language="ko-KR"
        theme={'dark'}
        hooks={{
          addImageBlobHook: onUploadImage
        }}
      />
    </StEditor>
  );
};

const StEditor = styled.div`
  width: 700px;
  margin: 0 auto;
`;
const StHeaderBar = styled.div`
  padding: 20px 0;
  display: flex;
  justify-content: space-between;
`;
const StTitleDiv = styled.div`
  padding-bottom: 20px;
  display: flex;
  color: white;
`;
const StTitleInput = styled.input`
  flex: 1;
  margin-left: 8px;
  font-weight: bold;
  font-size: 24px;
  color: white;
  background-color: transparent;
  padding: 2px 4px;
  &:focus {
    outline: none;
  }
  &::placeholder {
    font-size: 24px;
    font-weight: bold;
    opacity: 0.5;
    color: white;
  }
`;

export default EditorPage;
