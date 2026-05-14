import React, { useState } from 'react';

// 체크리스트 항목 데이터 — 학습 후 스스로 점검할 항목들
const checkItems = [
  { id: 1, text: 'React 컴포넌트가 무엇인지 이해했다' },
  { id: 2, text: 'npm run dev로 로컬 서버를 실행해봤다' },
  { id: 3, text: 'TypeScript와 JavaScript의 차이를 이해했다' },
  { id: 4, text: '프론트엔드와 백엔드의 차이를 설명할 수 있다' },
  { id: 5, text: 'GitHub에 코드를 push해봤다' },
  { id: 6, text: 'Vercel 배포 과정을 이해했다' },
  { id: 7, text: '웹 앱이 어떻게 동작하는지 이해했다' },
  { id: 8, text: '이 앱의 소스코드를 직접 수정해봤다' },
];

// 체크리스트 섹션 컴포넌트 — 학습 진행 상황을 스스로 체크합니다
const Checklist: React.FC = () => {
  // 체크된 항목 ID를 Set으로 관리 (중복 없이 빠르게 추가/삭제)
  const [checked, setChecked] = useState<Set<number>>(new Set());

  // 항목 클릭 시 체크 상태를 토글하는 함수
  const toggleCheck = (id: number) => {
    setChecked((prev) => {
      const next = new Set(prev);
      if (next.has(id)) {
        next.delete(id); // 이미 체크된 경우 해제
      } else {
        next.add(id); // 미체크인 경우 체크
      }
      return next;
    });
  };

  const total = checkItems.length;
  const done = checked.size;
  const progress = Math.round((done / total) * 100); // 진행률 (%)

  return (
    <section className="section" id="checklist">
      <div className="section-header">
        <div className="section-badge">셀프 체크</div>
        <h2 className="section-title">내가 얼마나 이해했을까?</h2>
        <p className="section-desc">학습한 내용을 스스로 점검해봐요</p>
      </div>

      <div className="checklist-container">
        {/* 진행률 표시 영역 */}
        <div className="progress-box">
          <div className="progress-header">
            <span className="progress-label">학습 진행률</span>
            <span className="progress-count">
              {done} / {total} 완료
            </span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
          <div className="progress-percent">{progress}%</div>
        </div>

        {/* 체크리스트 항목 목록 */}
        <div className="checklist-items">
          {checkItems.map((item) => (
            <label
              key={item.id}
              className={`checklist-item ${checked.has(item.id) ? 'checked' : ''}`}
            >
              {/* 실제 checkbox는 숨기고 커스텀 아이콘으로 표시 */}
              <input
                type="checkbox"
                checked={checked.has(item.id)}
                onChange={() => toggleCheck(item.id)}
                className="sr-only"
              />
              <span className="checkbox-icon">
                {checked.has(item.id) ? '✅' : '⬜'}
              </span>
              <span className="checklist-text">{item.text}</span>
            </label>
          ))}
        </div>

        {/* 모두 완료했을 때 나타나는 축하 메시지 */}
        {done === total && (
          <div className="completion-message">
            🎉 모든 항목을 완료했어요! 웹 앱 개발의 기초를 훌륭히 이해하셨습니다!
          </div>
        )}
      </div>
    </section>
  );
};

export default Checklist;
