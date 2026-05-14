import React from 'react';

// 학습 카드 데이터 — 각 개념의 이모지, 제목, 설명, 색상을 정의합니다
const cards = [
  {
    emoji: '🌐',
    title: '웹 앱이란?',
    description:
      '웹 앱은 인터넷 브라우저에서 실행되는 응용 프로그램입니다. 별도 설치 없이 URL만 있으면 어디서든 쓸 수 있어요. 구글, 유튜브, 네이버도 모두 웹 앱입니다.',
    color: 'blue',
  },
  {
    emoji: '⚡',
    title: '프론트엔드와 백엔드의 차이',
    description:
      '프론트엔드는 사용자가 눈으로 보고 상호작용하는 화면 영역입니다. 백엔드는 서버에서 데이터를 처리하는 뒷 영역이에요. 이 앱은 백엔드 없이 프론트엔드만으로 구성된 정적 웹 앱입니다.',
    color: 'green',
  },
  {
    emoji: '⚛️',
    title: 'React의 역할',
    description:
      'React는 UI(화면)를 만드는 JavaScript 라이브러리입니다. 화면을 "컴포넌트"라는 작은 조각으로 나눠 관리해요. 부품을 조립하듯 UI를 만들 수 있어 복잡한 화면도 체계적으로 구성됩니다.',
    color: 'purple',
  },
  {
    emoji: '🔷',
    title: 'TypeScript를 쓰는 이유',
    description:
      'TypeScript는 JavaScript에 타입(형식) 정보를 추가한 언어입니다. 코딩 중 실수를 미리 발견하고, 자동완성이 잘 동작해 초보자도 더 안전하게 개발할 수 있어요.',
    color: 'orange',
  },
  {
    emoji: '🐙',
    title: 'GitHub에 코드를 올리는 이유',
    description:
      'GitHub는 코드를 저장·관리하는 클라우드 서비스입니다. 변경 기록이 쌓이고, 어디서든 접근하거나 협업할 수 있어요. Vercel 배포의 출발점이 되기도 합니다.',
    color: 'gray',
  },
  {
    emoji: '🚀',
    title: 'Vercel로 배포하는 흐름',
    description:
      'Vercel은 GitHub 코드를 자동으로 빌드하고 인터넷에 올려주는 배포 서비스입니다. GitHub에 push만 하면 자동으로 새 버전이 배포되어 누구나 접근할 수 있는 URL이 생성됩니다.',
    color: 'teal',
  },
];

// 학습 카드 섹션 컴포넌트 — 핵심 개념 6가지를 카드로 보여줍니다
const LearningCards: React.FC = () => {
  return (
    <section className="section" id="learning">
      <div className="section-header">
        <div className="section-badge">핵심 개념</div>
        <h2 className="section-title">웹 앱 개발, 이것만 알면 돼요!</h2>
        <p className="section-desc">처음 접하는 개념들을 하나씩 살펴봐요</p>
      </div>

      {/* 카드 그리드 — 데스크톱 3열, 태블릿 2열, 모바일 1열 */}
      <div className="cards-grid">
        {cards.map((card, index) => (
          <div key={index} className={`card card-${card.color}`}>
            <span className="card-emoji">{card.emoji}</span>
            <h3 className="card-title">{card.title}</h3>
            <p className="card-desc">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default LearningCards;
