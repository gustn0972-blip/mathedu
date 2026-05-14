import React from 'react';

// 개발 단계 데이터 — 번호, 이모지, 제목, 설명, 예시 코드
const steps = [
  {
    number: '01',
    emoji: '🛠️',
    title: '프로젝트 만들기',
    description:
      '터미널에서 Vite를 사용해 React + TypeScript 프로젝트를 생성합니다. 명령어 한 줄로 필요한 파일이 모두 만들어져요.',
    code: 'npm create vite@latest my-app -- --template react-ts\ncd my-app\nnpm install',
  },
  {
    number: '02',
    emoji: '✍️',
    title: '컴포넌트 작성하기',
    description:
      'src/App.tsx를 열어 화면을 구성하는 컴포넌트를 작성합니다. React에서 화면의 각 부분은 함수 형태의 "컴포넌트"로 표현합니다.',
    code: '// App.tsx\nfunction App() {\n  return <h1>안녕하세요!</h1>\n}\nexport default App',
  },
  {
    number: '03',
    emoji: '▶️',
    title: '로컬에서 실행하기',
    description:
      '개발 서버를 시작해 브라우저에서 내 앱을 확인합니다. 코드를 저장하면 자동으로 화면이 갱신돼요 (Hot Module Replacement).',
    code: 'npm run dev\n# → http://localhost:5173 에서 확인!',
  },
  {
    number: '04',
    emoji: '📤',
    title: 'GitHub에 push하기',
    description:
      '작성한 코드를 GitHub 저장소에 올립니다. GitHub에서 새 저장소를 만든 뒤, 아래 명령어로 연결하고 올리면 됩니다.',
    code: 'git add .\ngit commit -m "첫 번째 커밋"\ngit push origin main',
  },
  {
    number: '05',
    emoji: '🌍',
    title: 'Vercel에 연결해서 배포하기',
    description:
      'vercel.com에 접속해 GitHub 저장소를 연결합니다. 한 번 설정하면 이후 push할 때마다 자동 배포됩니다. 누구나 접근 가능한 URL이 만들어져요!',
    code: '# vercel.com → New Project → GitHub 저장소 선택\n# → Deploy 클릭\n# → 자동으로 https://your-app.vercel.app 생성!',
  },
];

// 개발 흐름 섹션 컴포넌트 — 5단계를 타임라인 형태로 보여줍니다
const DevFlow: React.FC = () => {
  return (
    <section className="section-alt" id="devflow">
      <div className="section-inner">
        <div className="section-header">
          <div className="section-badge">개발 흐름</div>
          <h2 className="section-title">단계별로 따라해 봐요</h2>
          <p className="section-desc">처음부터 배포까지, 5단계로 완성!</p>
        </div>

        {/* 단계 타임라인 */}
        <div className="flow-steps">
          {steps.map((step, index) => (
            <div key={index} className="flow-step">
              {/* 왼쪽: 번호 원과 연결선 */}
              <div className="step-left">
                <div className="step-number">{step.number}</div>
                {/* 마지막 단계에는 연결선 없음 */}
                {index < steps.length - 1 && (
                  <div className="step-line"></div>
                )}
              </div>

              {/* 오른쪽: 내용 */}
              <div className="step-right">
                <div className="step-header">
                  <span className="step-emoji">{step.emoji}</span>
                  <h3 className="step-title">{step.title}</h3>
                </div>
                <p className="step-desc">{step.description}</p>
                <div className="step-code">
                  <pre>
                    <code>{step.code}</code>
                  </pre>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevFlow;
