import React from 'react';
import { ShuttlecockIcon } from './ShuttlecockIcon';

export const Footer: React.FC = () => {
  return (
    <footer className="border-t border-sky-100 bg-white py-12 text-center text-xs text-slate-500">
      <div className="mx-auto max-w-6xl px-4 flex flex-col items-center justify-center space-y-3">
        <div className="flex items-center space-x-2 text-sky-600">
          <ShuttlecockIcon size={18} cuteFace={true} />
          <span className="font-bold tracking-wide">
            Thanh xuân rực rỡ bên những người đồng đội
          </span>
        </div>
        <p className="max-w-md font-medium text-slate-500">
          Trang web được làm bằng cả tấm lòng, tình cảm và những kỷ niệm đẹp nhất của team gửi tới bạn.
        </p>
        <p className="text-[11px] text-slate-400">
          Chúc bạn ở môi trường mới luôn tỏa sáng, chinh phục mọi mục tiêu và mãi giữ nụ cười rạng rỡ!
        </p>
      </div>
    </footer>
  );
};
