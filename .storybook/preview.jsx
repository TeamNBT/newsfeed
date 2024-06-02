import GlobalStyles from '../src/styles/GlobalStyles';

// 스토리북의 decorators는 .storybook/preview.js 파일에서 정의되고,
// 스토리북 자체에 의해 자동으로 사용됩니다. 사용자가 직접 어디서든 decorators를 import할 필요는 없습니다.
// 스토리북 설정 파일인 preview.js에서 decorators를 정의하면, 스토리북이 이 파일을 읽고 모든 스토리에 적용하는 방식으로 작동합니다.
// 따라서, decorators를 정의한 후에는 스토리북이 자동으로 해당 설정을 인식하고 적용합니다.
// 스토리 파일에서 별도로 설정할 필요 없이 전역 스타일이나 데코레이터를 적용할 수 있습니다.

export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  )
];

/** @type { import('@storybook/react').Preview } */
const preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i
      }
    }
  }
};

export default preview;
