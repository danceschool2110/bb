import React from 'react';
import type { MemoryPhoto } from '../types';

interface ImageModalProps {
  photo: MemoryPhoto | null;
  onClose: () => void;
}

export const ImageModal: React.FC<ImageModalProps> = ({ photo, onClose }) => {
  if (!photo) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/70 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        className="relative max-h-[90vh] max-w-2xl w-full overflow-hidden rounded-3xl border border-sky-100 bg-white p-4 sm:p-6 shadow-2xl"
        onClick={e => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 flex h-9 w-9 items-center justify-center rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-800 transition-colors"
        >
          <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>

        <div className="max-h-[55vh] overflow-hidden rounded-2xl bg-slate-100 flex items-center justify-center">
          <img
            src={photo.url}
            alt={photo.title}
            className="h-full max-h-[55vh] w-full object-contain"
          />
        </div>

        <div className="mt-4 px-2">
          <div className="flex items-center space-x-2">
            <span className="rounded-full bg-sky-100 px-3 py-0.5 text-xs font-bold text-sky-700">
              {photo.tag}
            </span>
            <span className="text-xs text-slate-400">Ảnh #{photo.id}</span>
          </div>

          <h3 className="mt-2 text-lg font-bold text-slate-800">
            {photo.title}
          </h3>

          <p className="mt-1 text-sm text-slate-600 leading-relaxed">
            {photo.description}
          </p>
        </div>
      </div>
    </div>
  );
};
