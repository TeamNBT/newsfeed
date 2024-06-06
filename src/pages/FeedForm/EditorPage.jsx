import { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import '@toast-ui/editor/dist/toastui-editor.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/theme/toastui-editor-dark.css';
import { Editor } from '@toast-ui/react-editor';
import { styled } from 'styled-components';
import { Button } from '@/components/Button';
import '@toast-ui/editor/dist/i18n/ko-kr';
import { uploadImage } from '@/redux/feeds/feedsService';
import { addNewFeedThunk, updateExistingFeedThunk } from '@/redux/feeds/feedsThunk';

const toolbar = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote', 'ul', 'ol'],
  ['image', 'link']
];

const getThumbnailFromContents = (contents) => {
  const imgRegex = /<img.*?src="(.*?)".*?>/g;
  const match = imgRegex.exec(contents);
  if (match && match.length > 1) {
    return match[1];
  } else {
    return null;
  }
};

const EditorPage = () => {
  const { id } = useParams();
  const editorRef = useRef('');
  const titleRef = useRef('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const feed = useSelector((state) => state.feeds.feed);
  const isEditorLoading = useSelector((state) => state.feeds.isEditorLoading);
  const isNewPage = !id;
  const editor = isNewPage ? {} : feed;

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

    isNewPage
      ? dispatch(addNewFeedThunk({ title, contents, thumbnail }))
      : dispatch(updateExistingFeedThunk({ id, updates: { title, contents, thumbnail } }));
  };

  const onUploadImage = async (blob, callback) => {
    const imageUrl = await uploadImage(blob);
    if (imageUrl) {
      callback(imageUrl, 'image');
    }
  };

  useEffect(() => {
    if (!isEditorLoading) return;
    navigate(-1);
  }, [isEditorLoading, navigate]);

  return (
    <StEditor>
      <StHeaderBar>
        <Button onClick={() => navigate(-1)} rounded size="default" type="" variant="secondary">
          뒤로가기
        </Button>
        <Button onClick={handleSave} rounded size="default" type="" variant="secondary">
          {isNewPage ? '저장' : '수정완료'}
        </Button>
      </StHeaderBar>
      <StTitleDiv>
        <StTitleInput
          type="text"
          ref={titleRef}
          placeholder="제목을 입력해주세요!"
          defaultValue={editor.title || ''}
        />
      </StTitleDiv>
      <Editor
        ref={editorRef}
        initialValue={editor.contents || ' '}
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
