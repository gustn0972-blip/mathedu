import React from 'react';

interface HeroProps {
  onStart: () => void;
}

// 메인 화면 컴포넌트 — 앱의 첫 인상을 담당합니다
const Hero: React.FC<HeroProps> = ({ onStart }) => {
  return (
    <section className="hero">
      {/* 왼쪽: 제목과 설명 */}
      <div className="hero-content">
        <div className="hero-badge">📖 학습 가이드</div>

        <h1 className="hero-title">
          교육대학원생을 위한
          <span className="hero-title-accent">웹 앱 개발 입문</span>
        </h1>

        <p className="hero-description">
          처음 웹 앱 개발을 시작하는 분들을 위한 안내서입니다.
          <br />
          React, TypeScript부터 GitHub 저장, Vercel 배포까지 —
          핵심 개념을 차근차근 알아봐요.
        </p>

        <div className="hero-actions">
          {/* 학습 시작 버튼 — 클릭 시 학습 섹션으로 스크롤 */}
          <button className="btn-primary" onClick={onStart}>
            학습 시작하기 →
          </button>

          <div className="hero-stats">
            <span>📚 6가지 핵심 개념</span>
            <span>🚀 5단계 개발 흐름</span>
            <span>✅ 셀프 체크리스트</span>
          </div>
        </div>
      </div>

      {/* 오른쪽: 코드 창 일러스트레이션 */}
      <div className="hero-illustration">
        <div className="code-window">
          <div className="window-bar">
            <span className="dot dot-red"></span>
            <span className="dot dot-yellow"></span>
            <span className="dot dot-green"></span>
          </div>
          <div className="code-content">
            <div className="code-line">
              <span className="code-keyword">import</span> React{' '}
              <span className="code-keyword">from</span>{' '}
              <span className="code-string">'react'</span>
            </div>
            <div className="code-line"> </div>
            <div className="code-line">
              <span className="code-keyword">function</span>{' '}
              <span className="code-fn">App</span>() {'{'}
            </div>
            <div className="code-line code-indent">
              <span className="code-keyword">return</span> (
            </div>
            <div className="code-line code-indent2">
              <span className="code-tag">&lt;div&gt;</span>
            </div>
            <div className="code-line code-indent3">
              <span className="code-tag">&lt;h1&gt;</span>
              안녕하세요!
              <span className="code-tag">&lt;/h1&gt;</span>
            </div>
            <div className="code-line code-indent2">
              <span className="code-tag">&lt;/div&gt;</span>
            </div>
            <div className="code-line code-indent">)</div>
            <div className="code-line">{'}'}</div>
            <div className="code-line"> </div>
            <div className="code-line">
              <span className="code-keyword">export default</span>{' '}
              <span className="code-fn">App</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
