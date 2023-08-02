# 🦁 Like-Lion FE 6th, JS 프로젝트 (4조: Super 4y 😳)

<div align="center">
<img width="329"  alt="image" src="https://productive-printer-b81.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F96ec185b-3b80-4d30-a0c6-32412d3a3be9%2Fstart.png?table=block&id=598d67dd-e9f0-41c4-8185-8fc13c38b073&spaceId=c9a0bb7f-8213-453a-bb37-66cc9a3070de&width=250&userId=&cache=v2">
</div>

## Enter Euid(엔터 이듬) 웹앱 페이지

> **멋쟁이사자처럼 FE 6기 - (4조: Super 4y 😳)** <br/> **개발기간: 2023.07.28 ~ 2023.08.02**

---

# 📜 목차

- [🦁 Like-Lion FE 6th, JS 프로젝트 (4조: Super 4y 😳)](#-like-lion-fe-6th-js-프로젝트-4조-super-4y-)
  - [Enter Euid(엔터 이듬) 웹앱 페이지](#enter-euid엔터-이듬-웹앱-페이지)
- [📜 목차](#-목차)
  - [배포 주소 🏠](#배포-주소-)
  - [프로젝트 소개 🚀](#프로젝트-소개-)
  - [팀원 소개 👨‍👩‍👧‍👦](#팀원-소개-)
  - [기술 스택 🛠️](#기술-스택-️)
    - [Tools 🧰](#tools-)
  - [디렉터리 트리 📂](#디렉터리-트리-)
  - [기능 설명 📢](#기능-설명-)
    - [Markup + CSS 🎨](#markup--css-)
    - [JS 🪩](#js-)
- [기능 설명 ](#기능-설명--1)
  - [프로젝트 회고 👀](#프로젝트-회고-)
  - [실행 방법 ⚙️](#실행-방법-️)
      - [패키지 설치](#패키지-설치)
      - [백엔드 서버 실행](#백엔드-서버-실행)
      - [프론트 서버 실행](#프론트-서버-실행)
      - [동시 실행](#동시-실행)

---

## 배포 주소 🏠

> **개발 버전** : [링크 추후 작성예정](http://voluntain.cs.skku.edu/) <br>

## 프로젝트 소개 🚀

멋쟁이사자처럼 프론트엔드 스쿨 과정 중 JS를 약 4주 간 배우고, 이를 적용한 HTML + CSS + JS 프로젝트입니다.

## 팀원 소개 👨‍👩‍👧‍👦

|          [강수현](https://github.com/createvalue-kangsh)           |             [노치현](https://github.com/JuniorTunarr)              |              [서진만](https://github.com/seojinman)               |            [신명화](https://github.com/MyoungHwaShin)             |
| :----------------------------------------------------------------: | :----------------------------------------------------------------: | :---------------------------------------------------------------: | :---------------------------------------------------------------: |
| <img width="120px" src="client/assets/images/main/qna/new4.png" /> | <img width="120px" src="client/assets/images/main/qna/new5.png" /> | <img width="120px" src="client/assets/images/main/qna/new2.png"/> | <img width="120px" src="client/assets/images/main/qna/new3.png"/> |

## 기술 스택 🛠️

 <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white">
 <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white">
 <img src="https://img.shields.io/badge/Tailwind-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white">
 <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">  
<br/>
### Tools 🧰

<img src="https://img.shields.io/badge/Visual_Studio-5C2D91?style=for-the-badge&logo=visual%20studio&logoColor=white">
  <img src="https://img.shields.io/badge/git-F05032?style=for-the-badge&logo=git&logoColor=white">
<img src="https://img.shields.io/badge/github-181717?style=for-the-badge&logo=github&logoColor=white">
<img src="https://img.shields.io/badge/Figma-F24E1E?style=for-the-badge&logo=figma&logoColor=white">

## 디렉터리 트리 📂

```
js_enterEuid
├── client
│   ├── assets
│   │   ├── icons
│   │   └── images
│   ├── css
│   │   ├── tailwind.css
│   │   └── main.css
│   ├── js
│   │   ├── start
│   │   ├── main
│   │   ├── board
│   │   └── qna
│   ├── lib
│   │   ├── dom
│   │   ├── error
│   │   ├── math
│   │   └── utils
│   ├── views
│   │   ├── start
│   │   ├── main
│   │   ├── board
│   │   └── qna
│   └── index.js
└── server
    └── db
        └── data.json
```

## 기능 설명 📢

### Markup + CSS 🎨

<table>
  <tr>
    <th>Start</th>
        <td>  
    메인 페이지 (index.html)
        <img src="https://github.com/enterEuid-project-4/js_enterEuid/assets/128280528/d15c2cc0-ac23-4fdb-bcc8-69df4d315bc2" width="200"/>

Markup

1. 상단바 (topBar)

2. 헤더 (categoryHeader)
   a. 아이콘
3. 본문 (main)
   a. 로고
   b. 서브 텍스트
   i. 제목 (mainTitle)
   ii. 설명 (mainSummary)
4. 하단 영역 (bottom)
   a. 시작하기 버튼 (startBtn)
   b. 로그인 정보 (exist)
   i. 계정 유무 문구
   ii. 로그인 링크 (login
   CSS 🎨
   랜딩 페이지의 목적은 사이트에 처음 방문하는 사용자들에게 웹사이트의 목적과 기능을 소개하는 것입니다. 따라서, 사이트의 로고와 간단한 소개 문구, 그리고 웹사이트를 사용하기 위한 시작하기 버튼을 구성했습니다. 스타일링에서는 배경 이미지와 로고 이미지를 사용하여 시각적 효과를 강화했으며, 중앙에 요소들을 배치하여 사용자의 시선을 집중시켰습니다.

   \*카테고리 페이지 (category.html)
   <img src="https://github.com/enterEuid-project-4/js_enterEuid/assets/128280528/1fdd0484-f5f0-4077-8a04-dd2747b4b41d" with="200">

   Markup

5. 상단바 (topBar)
6. 헤더 (header)
   a. 로고
   b. 검색창 (searchContainer)
   i. 검색 아이콘
   ii. 검색 입력 필드 (Search)
7. 본문 (main)
   a. 타이틀 (MainTitle)
   b. 버튼 컨테이너 (buttonContainer)
   i. 각 카테고리 버튼 (button) - 버튼 래퍼 (buttonWrapper)
   _ 버튼 상단 텍스트 (buttonTitle)
   _ 버튼 하단 텍스트 (buttonSubtitle) - 아이콘 (icon)
8. 푸터 (footer)
   a. 저장 버튼 (saveBtn)

   CSS 🎨
   이 페이지의 주요 목적은 사용자가 관심 분야를 선택할 수 있는 카테고리 목록을 제공하는 것입니다. 그렇기 때문에 마크업에서는 카테고리 버튼 요소들을 리스트 형태로 구성했습니다. 스타일링의 경우, 각 카테고리 버튼에 고유한 아이콘과 배경 색상을 사용하여 사용자가 쉽게 구별할 수 있도록 했습니다. 또한 반응형 웹 디자인을 고려하여 화면 크기에 따라 버튼 크기와 배열을 조절했습니다.

   \*회원가입/로그인 페이지

   회원가입 페이지:
   Markup

   1. 상단바 (topBar)
   2. 헤더 (categoryHeader)
      a. 아이콘
   3. 회원가입 본문 영역 (signUpMain)
      a. 회원가입 정보 (singUpInfo)
      i. 인사말
      ii. 제목
      iii. 부가 설명 (signUpInfoMore)
      b. 입력 영역 (signUpMessage)
      i. 휴대폰 번호 입력창 (inputSignUpMessage)
      ii. 인증문자 받기 버튼 (signUpMessageSend)
   4. 하단 영역 (signUpFind)
      a. 변경된 휴대폰 번호 문구
      b. 이메일로 계정 찾기 링크

   CSS 🎨
   회원가입을 위한 페이지로, 로그인 페이지와 유사한 구조를 가지고 있습니다. 마크업에서는 레이블과 입력 폼, 그리고 인증 문자 받기 및 가입하기 버튼을 구성했습니다. 스타일링에서는 로그인 페이지와 같은 방식으로 레이블, 폼, 버튼의 크기 및 위치를 조절하였으며, 인증문자가 입력되고 유효성 검사를 통과하여 가입하기 버튼이 활성화되는 것으로 구현했습니다.

   로그인 페이지:

   Markup 1. 상단바 (topBar)

9. 로그인 본문 영역 (logInMain)
   a. 로그인 헤더 (logInHeader)
   i. 아이콘
   ii. 인사말
   iii. 제목
   iv. 부가 설명 (logInInfoMore)
   b. 입력 영역 (logInMain)
   i. 휴대폰 번호 입력창 (inputPhoneNumber)
   ii. 인증문자 받기 버튼 (buttonSendVerification)
10. 하단 영역 (logInFooter)
    a. 변경된 휴대폰 번호 문구 (logInFind)
    b. 이메일로 계정 찾기 링크 (logInFindEmail)

    CSS 🎨
    휴대폰 번호를 사용하여 로그인하는 페이지입니다. 마크업에서는 레이블과 입력 폼, 그리고 인증 문자 받기 및 로그인 버튼을 구성했습니다. 스타일링에서는 레이블과 폼의 크기 및 위치를 조절하여 사용자가 직관적으로 이해할 수 있도록 했습니다. 또한 유효한 번호가 입력되었을 때, 인증문자 받기 버튼의 색상이 바뀌도록 했습니다.
    </td>
    </tr>
    <tr>
      <th>Main</th>
       <td>메인 섹션(홈, 기기거래, 상품 상세페이지, 검색페이지)를 맡아, 이후에 동적으로 렌더링할 것을 고려하며, 마크업과 CSS를 작성하였다.
        </td>
        </tr>
    <tr>
      <th>Board</th>
       <td>figma 시안 구성에 따라 페이지를 세분화하고 각 페이지가 가진 구조적 차이점(게시판/채팅/새 글 등)에 따른 마크업 구조를 구상한 후 css로 기초적인 UI 작업을 수행했습니다. 
       </td>
     </tr>
    <tr>
      <th>QnA</th>  
      <td> Q&A(main)와 chatlist 페이지의 리스트(게시글, 채팅목록)들의 DB를 data.JSON에 생성 후  Javascript 로직 작성과 랜더링하여 구현 완료
      
      chatContent 페이지의 상대방과의 거래를 위한 채팅기능(채팅 보내기, 채팅 말풍선 간격일정, 채팅 글을 작성한 현재시간, 채팅보낼시 메세지 input창 비우기) 구현

![ezgif com-optimize](https://github.com/enterEuid-project-4/js_enterEuid/assets/117728530/85efafb2-e60a-45fc-a99d-0effb67b03bf)</td>

  </tr>
  </table>
<br>

### JS 🪩

<table>
  <tr>
    <th>Start</th>
      <td> * category page
    <img src="https://github.com/enterEuid-project-4/js_enterEuid/assets/128280528/31c031f9-e070-46d2-8d16-80371f5658ed" width="200"/>
    
웹 페이지에서 카테고리 기능과 검색 기능, 그리고 클릭한 요소에 대한 선택/비선택 기능을 구현한 코드입니다. 해당 기능들을 구현하기 위해 다음과 같은 함수들이 작성되었습니다.
1. toggleButton(): 클릭한 요소에 대한 배경색과 글자색을 변경하고 이미지를 변경하는 역할을 합니다.
 2. searchFunction(): 검색 기능을 구현하는 역할을 합니다. 검색어를 입력하면 입력한 검색어와 일치하는 버튼만 보여주고 그외의 버튼은 숨깁니다.
  3. throttle(): 이벤트 리스너의 호출 빈도를 제한하기 위한 함수입니다.
     
또한, 페이지 로드 후 이벤트를 등록하는 코드도 작성되었습니다. 버튼 클릭 시 toggleButton() 함수 실행, 검색어 입력 시 throttle() 함수를 이용해 searchFunction() 함수를 실행하도록 이벤트가 등록되어 있습니다. 따라서, 해당 js 파일을 웹 페이지에 적용하면 검색 기능과 카테고리 기능, 그리고 관심 목록 설정을 구현할 수 있습니다.

- login/sign up

<img src="https://github.com/enterEuid-project-4/js_enterEuid/assets/128280528/9f7bcc22-c338-418c-800e-f3beff61db07" with="200"/>
  # 기능 설명 <br>
  휴대폰 번호 입력 및 인증<br>
  1. 사용자는 휴대폰 번호를 입력하고, 입력된 번호가 11자리 숫자로 구성되어 있을 경우 인증번호 받기 버튼이 활성화됩니다.<br>
  2.인증번호 받기 버튼을 클릭하면, 6자리 난수가 생성되어 사용자에게 알려집니다.

3.  인증번호 확인
    3-1. 입력란에 받은 인증번호를 입력하면, 입력 값과 생성된 난수를 비교하여 일치 여부를 확인합니다.
    3-2. 인증번호가 일치할 경우 동의하고 시작하기 버튼이 활성화 됩니다.

4.  회원가입 확인
    4-1. 동의하고 시작하기 버튼을 클릭하면 사용자에게 입력한 휴대폰 번호로 6자리 난수를 생성하여 알려줍니다.
    이 난수는 향후 로그인 프로세스에서 사용될 수 있습니다.

</td>
    </tr>
      <tr>
    <th>Main</th>
     <td>   <img src="https://github.com/enterEuid-project-4/js_enterEuid/assets/101504272/42087bcb-c393-4bdd-a8cf-6d9416a9cb73" width="200" height="450"/>
     <img src="https://github.com/enterEuid-project-4/js_enterEuid/assets/101504272/a051ae76-185a-4fb9-a143-82d4961bc387" width="300" height="450"/>
        <img src="https://github.com/enterEuid-project-4/js_enterEuid/assets/101504272/c4c5c228-ced6-4d30-b0fa-931ce54e7a9a" width="300" height="450" />
    </br>
    <br /> 1. 메인(홈)페이지 - Swiper 적용, 데이터 스키마 설계 및 렌더링   <br /> 2. 기기 거래 페이지 - 데이터 스키마 설계 및 렌더링, setStorage이후 product id값을 상품 상세페이지로 전달하여 id값이 일치하는 상품 데이터 렌더링
       <br />
       3. 검색 페이지 - 기기거래 페이지용 데이터를 불러와 input값, 카테고리 버튼에 따른 필터링
     </td>
      </tr>
   <tr>
    <th>Board</th>
     <td><img src="https://github.com/enterEuid-project-4/js_enterEuid/assets/73214037/aa6357d8-8f7b-4199-855c-b5b1e1c90687" width="200" height="450"/><img src="https://github.com/enterEuid-project-4/js_enterEuid/assets/73214037/ddd28528-49eb-4b9b-a142-2a9f6d900328" width="300" height="450"/>
 </br>
1.chatScreen.html 채팅기능 구현 [최신 메시지 채팅 갱신 + 가장 오래된 메시지 아웃),스크롤바 아래 고정] </br> 2.  start 파트 중 signup.html 가입 단계 중 인증 단계 구현
</td>
      </tr>
<tr>
    <th>QnA</th>  
    <td>   Q&A(main)와 chatlist 페이지의 리스트(게시글, 채팅목록)들의 DB를 data.JSON에 생성 후  Javascript 로직 작성과 랜더링하여 구현 완료
    
    chatContent 페이지의 상대방과의 거래를 위한 채팅기능(채팅 보내기, 채팅 말풍선 간격일정, 채팅 글을 작성한 현재시간, 채팅보낼시 메세지 input창 비우기) 구현

![ezgif com-optimize](https://github.com/enterEuid-project-4/js_enterEuid/assets/117728530/85efafb2-e60a-45fc-a99d-0effb67b03bf)

  </tr>
  </table>
<br>

## 프로젝트 회고 👀

<table>
  <tr>
    <th>강수현</th>
    <td>프로젝트 소감:  프로젝트를 진행하는 동안 팀원들의 도움을 받아 가며 서로 지식을 공유하고 협업하는 좋은 경험을 할 수 있었습니다. 특히 git과 관련된 이슈가 발생할 때, 팀원들과 소통하며 문제를 해결해나갈 수 있었던 부분은 이 프로젝트에서 가장 기억에 남는 부분 중 하나입니다. 전체적으로 이 프로젝트를 통해 팀워크와 커뮤니케이션 능력을 향상시킬 수 있는 소중한 기회였습니다.</td>
    </tr>
      <tr>
    <th>노치현</th>
     <td>뜻하지 않았던 깃 관련 충돌로, 많은 시간을 쏟아야만 했다. 코드나 파일 복붙은 앞으로 지양해야겠다는 걸 절실히 느낀 프로젝트였다. 넉넉하지 않은 시간이었음에도, 많은 시간과 열정을 쏟아준 팀원들에게 감사하다  </td>
      </tr>
   <str>
    <th>서진만</th>
     <td>html/css 프로젝트 때 보다 해야 할 일들과 요구사항들의 스케일이 비교할 수 없을 정도로 커져서 많이 놀랐다. 
깃을 다루는 것에 익숙하지 못해 시간을 많이 할애하는 순간들이 많아서 깃에 대하여 좀 더 많은 공부가 필요할 것 같다.
그리고 자바스크립트를 구현하면서 배운 내용들을 다시 되돌아볼 수 있었던 것 같다. 마지막으로 포기하려는 마음 없이 모두가 한마음 한뜻으로 같은 배를 타고 프로젝트를 진행 하면서 팀워크, 책임감, 동료애, 자바스크립트 지식 등등을 많이 배웠다.</td>
      </str>
<tr>
    <th>신명화</th>  
    <td>프로젝트를 통해 마크업의 중요성과 자바스크립트 코어를 공부해야겠다는 의지를 얻었습니다. 또한 좋은 팀원들과 협업이 주는 기쁨과 여러 오류들이 주는 어려움을 함께 겪으며 완벽한 결과를 내지는 못했지만 함께하며 서로 다독이며 나아가는 힘을 느꼈습니다. super 4y 감사합니다.</td>

  </tr>
  </table>
<br>

## 실행 방법 ⚙️

#### 패키지 설치

```bash
npm install
```

#### 백엔드 서버 실행

```bash
npm run serve:backend
```

#### 프론트 서버 실행

```bash
npm run serve:frontend
```

#### 동시 실행

```bash
npm run start
```
