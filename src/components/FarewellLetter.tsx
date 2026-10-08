import React from 'react';
import { farewellMessage } from '../data/tributeData';
import { ShuttlecockIcon } from './ShuttlecockIcon';

interface FarewellLetterProps {
  isOpen: boolean;
  onClose: () => void;
}

export const FarewellLetter: React.FC<FarewellLetterProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/60 p-4 backdrop-blur-sm">
      <div
        className="relative max-h-[90vh] max-w-2xl w-full overflow-y-auto rounded-3xl border border-sky-200 bg-white p-6 sm:p-10 shadow-2xl text-left"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="flex items-center space-x-3 border-b border-sky-100 pb-5">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-sky-100 text-sky-600">
            <ShuttlecockIcon size={24} cuteFace={true} />
          </div>
          <div>
            <h3 className="text-lg font-bold text-slate-800">
              Bức Thư Tạm Biệt & Tri Ân
            </h3>
            <p className="text-xs font-medium text-sky-600">
              Gửi tới toàn thể gia đình công ty và những người đồng nghiệp thân thương
            </p>
          </div>
        </div>

        <div className="mt-6 space-y-4 text-sm text-slate-600 leading-relaxed">
          <p className="font-bold text-sky-700 text-base">
            {farewellMessage.greeting}
          </p>

          {farewellMessage.body.map((paragraph, index) => (
            <p key={index} className="text-slate-600">
              {paragraph}
            </p>
          ))}

          <div className="pt-6 border-t border-sky-100 mt-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div>
              <p className="text-xs italic font-semibold text-sky-600">
                {farewellMessage.signOff}
              </p>
              <p className="mt-1 text-xs font-bold text-slate-800">
                {farewellMessage.sender}
              </p>
            </div>

            <button
              onClick={onClose}
              className="rounded-full bg-gradient-to-r from-sky-500 to-blue-600 px-6 py-2.5 text-xs font-bold text-white shadow-md shadow-sky-400/30 hover:brightness-105 transition-all"
            >
              Cảm Ơn Tất Cả Mọi Người
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
