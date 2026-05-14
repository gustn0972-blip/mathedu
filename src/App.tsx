import { useRef } from 'react';
import Hero from './components/Hero';
import LearningCards from './components/LearningCards';
import DevFlow from './components/DevFlow';
import Checklist from './components/Checklist';
import './App.css';

// 앱 최상위 컴포넌트 — 각 섹션을 조합합니다
function App() {
  // 학습 섹션 요소에 대한 참조 (버튼 클릭 시 스크롤 이동용)
  const learningRef = useRef<HTMLDivElement>(null);

  // "학습 시작하기" 버튼 클릭 시 학습 섹션으로 부드럽게 스크롤
  const handleStart = () => {
    learningRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="app">
      {/* 1. 메인 화면 */}
      <Hero onStart={handleStart} />

      {/* 2. 학습 카드 섹션 */}
      <div ref={learningRef}>
        <LearningCards />
      </div>

      {/* 3. 개발 흐름 안내 */}
      <DevFlow />

      {/* 4. 셀프 체크리스트 */}
      <Checklist />

      {/* 푸터 */}
      <footer className="footer">
        <p>교육대학원생을 위한 웹 앱 개발 입문 · React + TypeScript + Vite</p>
      </footer>
    </div>
  );
}

export default App;
