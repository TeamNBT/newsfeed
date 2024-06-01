module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'plugin:react/jsx-runtime', 'plugin:react-hooks/recommended', 'plugin:import/recommended', 'plugin:storybook/recommended'],
  ignorePatterns: ['dist', '.eslintrc.cjs'],
  parserOptions: { ecmaVersion: 'latest', sourceType: 'module' },
  settings: {
    react: { version: '18.2' },
    'import/resolver': {
      node: {
        paths: ['src'],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      },
      alias: {
        map: [['@', './src']],
        extensions: ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  plugins: ['react-refresh', 'import', 'unused-imports'],
  rules: {
    'react/jsx-no-target-blank': 'off',
    'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
    // prop-types 미사용
    'react/prop-types': 'off',
    // 함수 컴포넌트를 화살표 함수 형태로 정의하도록 규칙 설정
    'react/function-component-definition': [
      'error',
      {
        namedComponents: 'arrow-function',
        unnamedComponents: 'arrow-function'
      }
    ],
    //안 쓰는 import 에러 처리
    'unused-imports/no-unused-imports': 'error',
    // eslint-plugin-import 사용으로 인한 styled-components 불러오기시 에러 발생
    'import/no-named-as-default': 'off',
    // jsx는 원래 import React를 해줬어야하나, 이젠 React17에서 자동으로 import되므로 필요하지 않음.
    'react/react-in-jsx-scope': 'off',
    // 기본 export를 선호하는 규칙 비활성화
    'import/prefer-default-export': 'off',
    'import/order': [
      'error',
      {
        groups: [
          // 내장 모듈
          'builtin',
          // npm을 통해 설치된 외부 모듈
          'external',
          // 프로젝트 내부에서 설정한 경로 별칭을 사용하는 모듈
          'internal',
          // 상위 디렉토리에 있는 모듈
          'parent',
          // 같은 디렉토리에 있는 모듈
          'sibling',
          // 같은 디렉토리의 index 파일
          'index'
        ],
        pathGroups: [
          {
            pattern: 'react*',
            group: 'external',
            position: 'before'
          },
          {
            pattern: '@/hooks{,/**}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/schemas{,/**}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/utils{,/**}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/constants{,/**}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/pages{,/**}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/components{,/**}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/styles{,/**}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/svg{,/**}',
            group: 'internal',
            position: 'after'
          },
          {
            pattern: '@/**',
            group: 'internal',
            position: 'after'
          }
        ],
        // pathGroups 규칙을 적용하지 않을 import 타입을 설정
        pathGroupsExcludedImportTypes: [],
        // 임포트 그룹 사이 개행 여부
        'newlines-between': 'never',
        alphabetize: {
          // 알파벳 순서대로 정렬
          order: 'asc',
          // 대소문자 구분 없이 정렬
          caseInsensitive: true
        }
      }
    ]
  }
};
