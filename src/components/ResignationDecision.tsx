import React, { useState, useRef } from 'react';
import { ShuttlecockIcon } from './ShuttlecockIcon';

interface ResignationDecisionProps {
  onAccept: () => void;
}

const runawayQuotes = [
  "Không duyệt đâu lêu lêu!",
  "Bắt ở lại bao trà sữa đã!",
  "Ai cho mà nghỉ, ở lại gánh team đi!",
  "Nghỉ rồi ai gọi trà sữa cùng bọn này?!",
  "Bấm hụt rồi kìa hihi!",
  "Đố bắt được tớ đấy!",
  "Đơn này không có hiệu lực nha!",
];

export const ResignationDecision: React.FC<ResignationDecisionProps> = ({ onAccept }) => {
  const [rejectPos, setRejectPos] = useState({ x: 0, y: 0 });
  const [escapeCount, setEscapeCount] = useState(0);
  const [currentQuote, setCurrentQuote] = useState("Từ chối duyệt đơn (Ở lại đi mà!)");
  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleRejectHover = () => {
    const maxX = 160;
    const maxY = 60;
    const randomX = (Math.random() - 0.5) * 2 * maxX;
    const randomY = (Math.random() - 0.5) * 2 * maxY;

    setRejectPos({ x: randomX, y: randomY });
    const newCount = escapeCount + 1;
    setEscapeCount(newCount);
    setCurrentQuote(runawayQuotes[(newCount - 1) % runawayQuotes.length]);
  };

  return (
    <section id="decision" className="border-t border-sky-100 bg-sky-50/40 py-16">
      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center space-x-2 rounded-full border border-sky-200 bg-white px-3.5 py-1 text-xs font-bold text-sky-700 shadow-sm">
          <ShuttlecockIcon size={14} cuteFace={true} />
          <span>Thủ Tục Phê Duyệt Nguyện Vọng</span>
        </div>

        <h2 className="mt-4 text-2xl font-extrabold text-slate-800 sm:text-3xl">
          Phê Duyệt Đơn Chuyển Công Tác
        </h2>
        <p className="mx-auto mt-2 max-w-xl text-sm font-medium text-slate-500">
          Biểu quyết lần cuối của anh em đồng nghiệp trước giờ chia tay!
        </p>

        <div
          ref={containerRef}
          className="relative mx-auto mt-10 flex min-h-[180px] max-w-lg items-center justify-center gap-6 rounded-3xl border border-sky-100 bg-white p-8 shadow-sm backdrop-blur-sm"
        >
          <button
            onMouseEnter={handleRejectHover}
            onClick={handleRejectHover}
            style={{
              transform: `translate(${rejectPos.x}px, ${rejectPos.y}px)`,
              transition: 'transform 0.16s cubic-bezier(0.34, 1.56, 0.64, 1)',
            }}
            className="rounded-2xl border border-rose-200 bg-rose-50 px-5 py-3 text-xs font-bold text-rose-600 shadow-sm transition-colors select-none hover:bg-rose-100"
          >
            {currentQuote}
          </button>

          <button
            onClick={onAccept}
            className="group flex items-center space-x-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-400/30 transition-all hover:brightness-105 active:scale-95"
          >
            <span>Duyệt Đơn & Gửi Ngàn Lời Chúc</span>
            <span className="transition-transform group-hover:translate-x-1">→</span>
          </button>
        </div>

        {escapeCount > 0 && (
          <p className="mt-4 text-xs font-bold text-sky-600 animate-pulse">
            Nút "Từ chối" đã trốn chạy {escapeCount} lần rồi đấy! Bấm nút Duyệt Đơn để nhận quà thôi!
          </p>
        )}
      </div>
    </section>
  );
};
