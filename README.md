# ✍🏻 BloodFolio

리액트 숙련 주차 뉴스피드 팀 프로젝트에서 내 작업물을 올리고 공유하는 사이트를 만들었어요<br />
백엔드는 supabase를 이용했어요<br/><br/>
🔗 Story Book : https://bloodfolio-system.vercel.app
<br/>
🔗 프로젝트 컨벤션 정리 : https://github.com/SpartaNBTTeam/newsfeed/issues/1
<br/>

## 0. 팀원 소개

<table>
   <tr>
    <td align="center"><b>이예린</b></td>
    <td align="center"><b>유태윤</b></td>
    <td align="center"><b>전태영</b></td>
    <td align="center"><b>이승빈</b></td>
    <td align="center"><b>추유선</b></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/1eeyerin"><img src="https://avatars.githubusercontent.com/u/40863185?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/taeyun01"><img src="https://avatars.githubusercontent.com/u/167043856?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/Floweringworld"><img src="https://avatars.githubusercontent.com/u/165015603?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/leesb5510"><img src="https://avatars.githubusercontent.com/u/105426266?v=4" width="100px" /></a></td>
    <td align="center"><a href="https://github.com/jamie240417"><img src="https://avatars.githubusercontent.com/u/167270249?v=4" width="100px" /></a></td>
  </tr>
  <tr>
    <td align="center">디자인<br/>시스템 컴포넌트<br/>Auth 구현 및 총괄</td>
    <td align="center">작성폼 (에디터)<br/>초기 세팅<br/>마이페이지 등</td>
    <td align="center">상세페이지<br/>(댓글 입력,<br/>수정, 삭제)</td>
    <td align="center">메인페이지</td>
    <td align="center">Auth<br/>마이페이지</td>
  </tr>
</table>

- 각자 맡은 역할을 다한 뒤에도, 다른 팀원의 작업을 도와주면서 완성했어요 🌟 <br/><br/>

## 0-1. 프로젝트 진행 기간

- 2024.06.01 ~ 2024.06.07<br/><br/>

## 0-2. 프로젝트 중에는..

- 활발하게 진행 상황을 공유하기 위해 zep과 slack을 사용했어요
- 전체적인 팀 프로젝트의 진행상황을 확인하기 위해 gitgub project를 사용했어요
- backlog를 남기고 수시로 진행상황을 팔로우업해요<br/>
<img width="650" alt="image" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/627d5832-2daf-46b0-87cb-2039db002385"><br/>
- 코드리뷰하는 문화를 지향해요
- pr에 1명 이상의 approve가 있어야 develop에 merge를 할 수 있도록 설정했어요
  <br/><br/>

## 1. 사용한 라이브러리

### @storybook

스토리북을 사용하여 UI 컴포넌트를 문서화하고 빠르고 효율적으로 작업하기 위해 사용했어요<br/><br/>
<img width="640" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/a5078842-e8c4-44f3-9cc4-04237d3902ca"/><br/>

### @reduxjs/toolkit

상태 관리를 위한 Redux Toolkit과 Thunk를 사용했어요

### @supabase/supabase-js

Supabase를 백엔드로 사용하여 실시간 데이터베이스를 사용했어요

### @toast-ui/react-editor

Toast UI Editor를 사용하여 작성폼을 구현했어요

### react-router-dom

React Router를 사용하여 SPA의 라우팅을 관리했어요

### styled-components

CSS-in-JS 라이브러리인 Styled Components를 사용하여 컴포넌트 스타일링을 했어요

### @svgr/rollup

SVG 파일을 React 컴포넌트로 변환하여 사용할 수 있는 SVGR을 사용했어요. 이를 통해 SVG 아이콘을 더 쉽게 관리하고 사용할 수 있어요
<br/><br/>

## 2. 대표기능

- [x] 나의 작업물을 올릴 수 있어요<br />
- [x] 다른 사람의 작업물을 보고 영감을 얻을 수 있어요<br />
- [x] 나의 작업물의 링크를 복사하여 내 이력서에 넣을 수 있어요<br />
- [x] 다른 사람의 작업물이 마음에 든다면 핀을 해서 다시 볼 수 있어요<br />
- [x] 사이트에서 이용할 내 프로필을 변경할 수 있어요<br />
- [x] 회원 가입하고 나의 프로필을 꾸밀 수 있어요<br />

## 3. 상세설명

### 1. 메인페이지 피드 조회 기능
<img width="640" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/20fd263f-f46d-4120-8b37-ba886fcfca45"/><br/>
- 최신 순으로 정렬된 다른 사람의 글을 구경할 수 있어요
- 마음에 드는 글이 있다면 저장할 수 있어요<br/><br/>

### 2. 로그인 / 회원가입 기능
<img width="640" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/9fa290db-4b47-446c-9cf2-df8841640cf2"/><br/>
<img width="640" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/497153bc-f1dc-4e44-a346-4a8589a4429f"/>
- 이메일을 통해 로그인과 회원가입을 할 수 있어요
- 비밀번호 입력 중 까먹으면 언제든지 눈을 켜고 다시 볼 수 있어요
- 서버 통신 중 에러가 발생하면 redux에 상태를 저장하여 오류 메세지를 노출해요<br/><br/>

### 3. 게시글 작성 및 수정 기능
<img width="640" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/8320f682-749a-49a8-94fc-0938cf03ad9d"/><br/>
- `@toast-ui/react-editor` 라이브러리를 이용하여 에디터로 이미지와 글을 자유롭게 작성할 수 있어요<br/><br/>

### 4. 상세페이지 조회 기능
<img width="640" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/9ad01e00-2dd7-44be-afa0-b1d1ce7710fe"/><br/>

![화면 기록 2024-06-09 오전 1 52 22](https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/5dab1503-68c3-465c-bc7a-43d492a4f27a)
<br/>
- 상세페이지 url을 공유할 수 있어요
- 내가 작성한 글에서 게시글을 수정하고 삭제할 수 있어요
- 서버에서 데이터를 불러올 때 자연스럽게 노출되도록 loader를 적용했어요<br/><br/>

### 5. 내 게시물 조회 / 핀 저장 기능
<img width="640" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/0c942db5-cf73-47d0-a2cc-b52a3e83bb96"/><br/>
- 내가 작성한 게시물을 볼 수 있고, 다른 사람의 글을 즐겨찾기 할 수 있어요<br/><br/>

### 6. 내 프로필 수정 기능
<img width="640" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/11f433a2-eacf-4749-a605-068724a168b6"/><br/>
- 내 프로필 이미지와 정보들을 수정할 수 있어요
- supabase를 이용해 storage에 이미지를 저장하고 불러와요<br/><br/>

### 7. 댓글 작성 기능
<img width="640" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/aaf26343-bd31-48a6-a58c-80e9e0ac7c7e"/><br/>
- 댓글을 작성하여 서로 작품에 대한 커뮤니케이션을 할 수 있어요<br/><br/>

### 8. 댓글 수정 기능
<img width="400" src="https://github.com/SpartaNBTTeam/newsfeed/assets/40863185/6ccd0e10-371c-40a2-91d5-2a8ca362b2f0"/><br/>
- 수정 버튼을 눌렀을 때, 모달을 통해 댓글을 수정하고 삭제할 수 있어요<br/><br/>


