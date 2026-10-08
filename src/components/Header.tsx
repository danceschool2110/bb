import React from 'react';
import { ShuttlecockIcon } from './ShuttlecockIcon';

interface HeaderProps {
  cursorEnabled: boolean;
  onToggleCursor: () => void;
  onOpenLetter: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  cursorEnabled,
  onToggleCursor,
  onOpenLetter,
}) => {
  return (
    <header className="sticky top-0 z-40 w-full border-b border-sky-100 bg-white/80 backdrop-blur-md shadow-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6">
        <div className="flex items-center space-x-3">
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-gradient-to-tr from-sky-400 to-blue-500 shadow-md shadow-sky-300/40">
            <ShuttlecockIcon size={22} cuteFace={true} />
          </div>
          <div>
            <div className="flex items-center space-x-2">
              <span className="text-sm font-bold tracking-tight text-slate-800">
                Sổ Kỷ Niệm Đồng Nghiệp
              </span>
              <span className="rounded-full bg-sky-100 px-2.5 py-0.5 text-[11px] font-semibold text-sky-700">
                Đại Gia Đình Công Ty
              </span>
            </div>
            <p className="text-[11px] text-slate-400 hidden sm:block">
              Thay lời cảm ơn & Tạm biệt những người đồng nghiệp thân thương
            </p>
          </div>
        </div>

        <nav className="hidden items-center space-x-6 text-xs font-semibold text-slate-600 md:flex">
          <a href="#overview" className="transition-colors hover:text-sky-600">
            Trang Chủ
          </a>
          <a href="#habits" className="transition-colors hover:text-sky-600">
            Sổ Kỷ Niệm
          </a>
          <a href="#stats" className="transition-colors hover:text-sky-600">
            Chỉ Số Vui
          </a>
          <a href="#gallery" className="transition-colors hover:text-sky-600">
            10 Khoảnh Khắc
          </a>
          <a href="#decision" className="transition-colors hover:text-sky-600">
            Duyệt Đơn
          </a>
        </nav>

        <div className="flex items-center space-x-2">
          <button
            onClick={onToggleCursor}
            title="Bật/Tắt hiệu ứng chuột vui mắt"
            className={`flex items-center space-x-1.5 rounded-full border px-3 py-1.5 text-xs font-semibold transition-all ${
              cursorEnabled
                ? 'border-sky-300 bg-sky-50 text-sky-700 shadow-sm'
                : 'border-slate-200 bg-slate-50 text-slate-400 hover:text-slate-600'
            }`}
          >
            <ShuttlecockIcon size={14} cuteFace={false} />
            <span className="hidden sm:inline">Chuột Vui Nhộn</span>
            <span className="text-[10px] font-bold text-sky-600 uppercase">
              {cursorEnabled ? 'BẬT' : 'TẮT'}
            </span>
          </button>

          <button
            onClick={onOpenLetter}
            className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-4 py-1.5 text-xs font-bold text-white shadow-md shadow-sky-400/30 transition-all hover:brightness-105 active:scale-95"
          >
            Mở Thư Tạm Biệt
          </button>
        </div>
      </div>
    </header>
  );
};
