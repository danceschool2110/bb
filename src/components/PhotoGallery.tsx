import React, { useRef } from 'react';
import type { MemoryPhoto } from '../types';

interface PhotoGalleryProps {
  photos: MemoryPhoto[];
  onSelectPhoto: (photo: MemoryPhoto) => void;
  onUpdatePhotos: (photos: MemoryPhoto[]) => void;
}

const tilts = [
  '-rotate-1',
  'rotate-1',
  '-rotate-2',
  'rotate-2',
  '-rotate-1',
  'rotate-1',
  '-rotate-2',
  'rotate-2',
  '-rotate-1',
  'rotate-1',
];

const tapeColors = [
  'bg-sky-200/90',
  'bg-blue-200/90',
  'bg-indigo-200/90',
  'bg-cyan-200/90',
  'bg-teal-200/90',
];

export const PhotoGallery: React.FC<PhotoGalleryProps> = ({
  photos,
  onSelectPhoto,
  onUpdatePhotos,
}) => {
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    const fileList = Array.from(files);
    const updated = photos.map((item, index) => {
      if (index < fileList.length) {
        return {
          ...item,
          url: URL.createObjectURL(fileList[index]),
        };
      }
      return item;
    });

    onUpdatePhotos(updated);
  };

  return (
    <section id="gallery" className="py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col items-center justify-between gap-4 md:flex-row md:items-end">
          <div>
            <span className="rounded-full bg-sky-100 px-3 py-1 text-xs font-bold text-sky-700 uppercase tracking-wider">
              Scrapbook Thanh Xuân
            </span>
            <h2 className="mt-2 text-2xl font-extrabold text-slate-800 sm:text-3xl">
              10 Khoảnh Khắc 'Bắt Trọn Từng Giây'
            </h2>
            <p className="mt-1 text-sm text-slate-500">
              Bộ sưu tập ảnh dán tường ghi lại những khoảnh khắc đáng yêu và nhí nhảnh nhất.
            </p>
          </div>

          <div className="flex items-center space-x-3">
            <input
              type="file"
              ref={fileInputRef}
              multiple
              accept="image/*"
              className="hidden"
              onChange={handleFileUpload}
            />
            <button
              onClick={() => fileInputRef.current?.click()}
              className="flex items-center space-x-2 rounded-full border border-sky-300 bg-white px-5 py-2.5 text-xs font-bold text-sky-700 shadow-sm transition-all hover:bg-sky-50 active:scale-95"
            >
              <span>Thay 10 Ảnh Thật Của Bạn</span>
            </button>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => onSelectPhoto(photo)}
              className={`group relative cursor-pointer rounded-2xl bg-white p-3 shadow-md transition-all duration-300 hover:z-20 hover:scale-105 hover:rotate-0 hover:shadow-xl ${
                tilts[index % tilts.length]
              } ${index === 0 || index === 7 ? 'sm:col-span-2' : ''}`}
            >
              <div
                className={`absolute -top-3 left-1/2 h-6 w-20 -translate-x-1/2 -rotate-2 rounded-sm shadow-sm backdrop-blur-sm ${
                  tapeColors[index % tapeColors.length]
                }`}
              />

              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-slate-100">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute bottom-2 left-2 rounded-full bg-white/90 px-2.5 py-0.5 text-[10px] font-bold text-sky-700 shadow-sm backdrop-blur-sm">
                  {photo.tag}
                </div>
              </div>

              <div className="mt-3 px-1 pb-1">
                <h3 className="line-clamp-1 text-sm font-bold text-slate-800 group-hover:text-sky-600">
                  {photo.title}
                </h3>
                <p className="mt-1 line-clamp-2 text-xs text-slate-500 leading-relaxed">
                  {photo.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
