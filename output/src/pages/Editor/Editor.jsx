import { useRef } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import { styled, createGlobalStyle } from 'styled-components';
import useShallowEqualSelector from '@/hooks/useShallowEqualSelector';
import { uploadImage } from '@/redux/feeds/feedsServices';
import { addNewFeedThunk, updateExistingFeedThunk } from '@/redux/feeds/feedsThunk';
import EditorHeader from './EditorHeader';
import './toastUiImports';

const TOOLBAR = [
  ['heading', 'bold', 'italic', 'strike'],
  ['hr', 'quote', 'ul', 'ol'],
  ['image', 'link']
];

const handleFeedAction = ({ isNewPage, props, id }) => {
  return isNewPage ? addNewFeedThunk(props) : updateExistingFeedThunk({ id, updates: props });
};

const Editor = () => {
  const { id } = useParams();
  const editorRef = useRef('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { displayName, feed, userId } = useShallowEqualSelector(({ auth, feeds }) => ({
    displayName: auth.data.userInfo.displayName,
    userId: auth.data.userId,
    feed: feeds.feed
  }));

  const isNewPage = !id;
  const editor = isNewPage ? {} : feed;

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const { title } = Object.fromEntries(formData.entries());

    const contents = editorRef.current.getInstance().getHTML();
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

    const props = { title, contents, thumbnail, author: displayName, user_id: userId };

    const result = await dispatch(handleFeedAction({ isNewPage, props, id }));

    if (result.error) {
      alert(result.error.message);
      return;
    }

    alert('작성이 완료되었어요');
    navigate(-1);
  };

  return (
    <StEditor onSubmit={onSubmit}>
      <GlobalStyles />
      <EditorHeader />
      <StTitleDiv>
        <SInput
          type="text"
          name="title"
          placeholder="제목을 입력해주세요"
          defaultValue={editor.title || ''}
        />
      </StTitleDiv>
      <ToastEditor
        initialValue={editor.contents || ' '}
        placeholder="여기에 내용을 작성하세요"
        hideModeSwitch
        height="550px"
        initialEditType="wysiwyg"
        toolbarItems={TOOLBAR}
        plugins={[colorSyntax]}
        usageStatistics={false}
        ref={editorRef}
        language="ko-KR"
        theme={'dark'}
        hooks={{
          addImageBlobHook: onUploadImage
        }}
      />
    </StEditor>
  );
};

const getThumbnailFromContents = (contents) => {
  const imgRegex = /<img.*?src="(.*?)".*?>/g;
  const match = imgRegex.exec(contents);
  if (match && match.length > 1) {
    return match[1];
  } else {
    return null;
  }
};

const onUploadImage = async (blob, callback) => {
  const imageUrl = await uploadImage(blob);
  if (imageUrl) {
    callback(imageUrl, 'image');
  }
};

const GlobalStyles = createGlobalStyle`
  .toastui-editor-contents p {
    font-size: 16px;
  }
`;

const StEditor = styled.form`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
`;

const StTitleDiv = styled.div`
  padding-bottom: 20px;
  display: flex;
  color: white;
`;

const SInput = styled.input`
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

export default Editor;
