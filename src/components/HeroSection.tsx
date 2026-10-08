import React, { useState } from 'react';
import { colleagueProfile } from '../data/tributeData';
import { ShuttlecockIcon } from './ShuttlecockIcon';

interface HeroSectionProps {
  onTriggerConfetti: () => void;
  onOpenLetter: () => void;
}

const celebrationReactions = [
  "Cảm ơn mọi người đã luôn đồng hành cùng mình!",
  "Chúc cả phòng luôn ngập tràn tiếng cười và may mắn!",
  "Mãi trân trọng những kỷ niệm tuyệt vời cùng công ty!",
  "Năng lượng tích cực lan tỏa đến tất cả mọi người!",
  "Chúc team mình luôn hoàn thành xuất sắc mọi mục tiêu!",
];

export const HeroSection: React.FC<HeroSectionProps> = ({
  onTriggerConfetti,
  onOpenLetter,
}) => {
  const [clickCount, setClickCount] = useState(0);
  const [reaction, setReaction] = useState("");
  const [isBouncing, setIsBouncing] = useState(false);

  const handleClick = () => {
    setIsBouncing(true);
    const newCount = clickCount + 1;
    setClickCount(newCount);
    setReaction(celebrationReactions[(newCount - 1) % celebrationReactions.length]);
    onTriggerConfetti();
    setTimeout(() => setIsBouncing(false), 500);
  };

  return (
    <section id="overview" className="relative overflow-hidden pt-12 pb-16 md:pt-16 md:pb-20">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute -top-32 left-1/2 h-[450px] w-[750px] -translate-x-1/2 rounded-full bg-gradient-to-b from-sky-200/50 via-blue-100/30 to-transparent blur-3xl" />
        <div className="absolute top-1/4 -left-16 h-64 w-64 rounded-full bg-sky-200/40 blur-3xl" />
        <div className="absolute top-1/3 -right-16 h-64 w-64 rounded-full bg-indigo-100/50 blur-3xl" />
      </div>

      <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
        <div className="inline-flex items-center space-x-2 rounded-full border border-sky-200 bg-white/90 px-4 py-1.5 text-xs font-bold text-sky-700 shadow-sm backdrop-blur-md">
          <span className="flex h-2 w-2 rounded-full bg-sky-500 animate-ping" />
          <span>Kỷ Yếu Công Ty & Lời Tạm Biệt Yêu Thương</span>
        </div>

        <div className="mt-6 flex justify-center">
          <div
            onClick={handleClick}
            className={`cursor-pointer transition-all duration-300 hover:scale-110 active:scale-95 ${
              isBouncing ? '-translate-y-4 rotate-12 scale-125' : 'hover:-translate-y-1'
            }`}
            title="Bấm vào để gửi lời chúc!"
          >
            <div className="flex h-20 w-20 items-center justify-center rounded-3xl bg-gradient-to-tr from-sky-400 to-blue-500 shadow-xl shadow-sky-300/50">
              <ShuttlecockIcon size={44} cuteFace={true} />
            </div>
          </div>
        </div>

        <h1 className="mt-6 text-3xl font-extrabold tracking-tight text-slate-800 sm:text-5xl md:text-6xl">
          Tạm Biệt Cô Bạn{' '}
          <span className="bg-gradient-to-r from-sky-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
            Đáng Yêu Của Cả Phòng!
          </span>
        </h1>

        <p className="mx-auto mt-4 max-w-2xl text-base font-medium text-slate-600 sm:text-lg">
          Trang web lưu giữ kỷ niệm và thay lời chào tạm biệt, lời tri ân sâu sắc từ <span className="font-bold text-sky-600">{colleagueProfile.name}</span> gửi tới toàn thể anh chị em và bạn bè đồng nghiệp công ty.
        </p>

        <div className="mx-auto mt-6 max-w-xl rounded-2xl border border-sky-100 bg-white/90 p-4 shadow-sm backdrop-blur-sm">
          <p className="text-sm font-medium italic text-slate-600">
            "{colleagueProfile.quote}"
          </p>
        </div>

        <div className="mt-8 flex flex-col items-center justify-center gap-3">
          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={handleClick}
              className="flex items-center space-x-2 rounded-2xl bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-3.5 text-sm font-bold text-white shadow-lg shadow-sky-400/30 transition-all hover:brightness-105 active:scale-95"
            >
              <ShuttlecockIcon size={18} cuteFace={false} />
              <span>Gửi Ngàn Lời Chúc</span>
              <span className="rounded-full bg-white/20 px-2 py-0.5 text-xs font-bold text-white">
                {clickCount}
              </span>
            </button>

            <button
              onClick={onOpenLetter}
              className="rounded-2xl border border-sky-200 bg-white px-6 py-3.5 text-sm font-bold text-slate-700 shadow-sm transition-all hover:border-sky-400 hover:text-sky-600 active:scale-95"
            >
              Mở Thư Tạm Biệt
            </button>
          </div>

          {reaction && (
            <div className="mt-3 rounded-full bg-sky-100/90 border border-sky-200 px-4 py-1 text-xs font-bold text-sky-800 animate-bounce">
              {reaction}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
