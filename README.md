# 교육대학원생을 위한 웹 앱 개발 입문

처음 웹 앱 개발을 시작하는 교육대학원생을 위한 학습용 웹 앱입니다.
React, TypeScript, GitHub, Vercel 배포까지의 흐름을 쉽게 이해할 수 있도록 구성했습니다.

## 앱 구성

| 섹션 | 내용 |
|------|------|
| 메인 화면 | 소개 및 학습 시작 버튼 |
| 핵심 개념 카드 | 웹 앱, 프론트엔드/백엔드, React, TypeScript, GitHub, Vercel |
| 개발 흐름 | 프로젝트 생성 → 코드 작성 → 로컬 실행 → GitHub push → Vercel 배포 |
| 셀프 체크리스트 | 학습 진행 상황 직접 체크 |

## 기술 스택

- **React 19** — UI 컴포넌트 라이브러리
- **TypeScript** — 타입 안전한 JavaScript
- **Vite** — 빠른 빌드 도구
- 외부 UI 라이브러리 없음 (순수 CSS + React)

## 로컬 실행 방법

```bash
# 1. 저장소 클론 (이미 클론한 경우 생략)
git clone <저장소 URL>
cd mathedu

# 2. 패키지 설치
npm install

# 3. 개발 서버 시작
npm run dev
# → 브라우저에서 http://localhost:5173 접속
```

## 빌드 및 배포

```bash
# 프로덕션 빌드 (dist/ 폴더 생성)
npm run build

# 빌드 결과 미리보기
npm run preview
```

## Vercel 배포 방법

1. [vercel.com](https://vercel.com) 접속 후 GitHub 계정으로 로그인
2. **New Project** → GitHub 저장소 선택
3. 설정 변경 없이 **Deploy** 클릭
4. 배포 완료 후 `https://your-app.vercel.app` URL 생성
5. 이후 `git push` 시 자동 재배포

## 프로젝트 구조

```
src/
├── App.tsx               # 최상위 컴포넌트
├── App.css               # 전체 스타일
├── index.css             # 전역 기본 스타일
├── main.tsx              # 앱 진입점
└── components/
    ├── Hero.tsx          # 메인 화면
    ├── LearningCards.tsx # 핵심 개념 카드 (6가지)
    ├── DevFlow.tsx       # 개발 흐름 단계 (5단계)
    └── Checklist.tsx     # 셀프 체크리스트 (8항목)
```
