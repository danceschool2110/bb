import React, { useEffect, useState } from 'react';
import { ShuttlecockIcon } from './ShuttlecockIcon';

interface FloatingItem {
  id: number;
  type: 'shuttlecock' | 'heart';
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
  rotate: number;
  color?: string;
}

interface ClickBurstItem {
  id: number;
  x: number;
  y: number;
  vx: number;
  vy: number;
  size: number;
  type: 'shuttlecock' | 'heart';
  opacity: number;
  color: string;
}

export const FloatingElements: React.FC = () => {
  const [ambientItems, setAmbientItems] = useState<FloatingItem[]>([]);
  const [burstItems, setBurstItems] = useState<ClickBurstItem[]>([]);

  useEffect(() => {
    const items: FloatingItem[] = [];
    const heartColors = ['#38BDF8', '#60A5FA', '#93C5FD', '#F472B6', '#34D399'];

    for (let i = 0; i < 9; i++) {
      items.push({
        id: i,
        type: 'shuttlecock',
        x: Math.random() * 95,
        y: Math.random() * 100,
        size: Math.random() * 14 + 20,
        duration: Math.random() * 4 + 5,
        delay: Math.random() * 3,
        rotate: Math.random() * 360,
      });
    }

    for (let i = 9; i < 24; i++) {
      items.push({
        id: i,
        type: 'heart',
        x: Math.random() * 95,
        y: Math.random() * 100,
        size: Math.random() * 12 + 14,
        duration: Math.random() * 3 + 4,
        delay: Math.random() * 2.5,
        rotate: Math.random() * 40 - 20,
        color: heartColors[Math.floor(Math.random() * heartColors.length)],
      });
    }

    setAmbientItems(items);
  }, []);

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      const colors = ['#38BDF8', '#60A5FA', '#F472B6', '#34D399'];
      const newItems: ClickBurstItem[] = [];

      for (let i = 0; i < 7; i++) {
        const angle = Math.random() * Math.PI * 2;
        const speed = Math.random() * 7 + 4;
        newItems.push({
          id: Date.now() + i,
          x: e.clientX,
          y: e.clientY,
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed - 3.5,
          size: Math.random() * 10 + 14,
          type: i === 0 ? 'shuttlecock' : 'heart',
          opacity: 1,
          color: colors[Math.floor(Math.random() * colors.length)],
        });
      }

      setBurstItems(prev => [...prev.slice(-28), ...newItems]);
    };

    window.addEventListener('click', handleClick);
    return () => window.removeEventListener('click', handleClick);
  }, []);

  useEffect(() => {
    if (burstItems.length === 0) return;

    const interval = setInterval(() => {
      setBurstItems(prev =>
        prev
          .map(item => ({
            ...item,
            x: item.x + item.vx,
            y: item.y + item.vy,
            vy: item.vy - 0.22,
            vx: item.vx * 0.97,
            opacity: item.opacity - 0.035,
          }))
          .filter(item => item.opacity > 0.05)
      );
    }, 20);

    return () => clearInterval(interval);
  }, [burstItems]);

  return (
    <div className="pointer-events-none fixed inset-0 z-20 overflow-hidden select-none">
      {ambientItems.map(item => (
        <div
          key={item.id}
          className="absolute will-change-transform"
          style={{
            left: `${item.x}%`,
            top: `${item.y}%`,
            animation: `ambientFloat ${item.duration}s ease-in-out infinite alternate`,
            animationDelay: `${item.delay}s`,
            opacity: 0.65,
          }}
        >
          {item.type === 'shuttlecock' ? (
            <div style={{ transform: `rotate(${item.rotate}deg)` }}>
              <ShuttlecockIcon size={item.size} cuteFace={true} />
            </div>
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill={item.color}
              style={{
                width: item.size,
                height: item.size,
                transform: `rotate(${item.rotate}deg)`,
                filter: 'drop-shadow(0 2px 6px rgba(56,189,248,0.25))',
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </div>
      ))}

      {burstItems.map(item => (
        <div
          key={item.id}
          className="absolute"
          style={{
            left: `${item.x}px`,
            top: `${item.y}px`,
            opacity: item.opacity,
            transform: `translate(-50%, -50%) scale(${item.opacity})`,
          }}
        >
          {item.type === 'shuttlecock' ? (
            <ShuttlecockIcon size={item.size} cuteFace={true} />
          ) : (
            <svg
              viewBox="0 0 24 24"
              fill={item.color}
              style={{
                width: item.size,
                height: item.size,
                filter: 'drop-shadow(0 2px 8px rgba(56,189,248,0.3))',
              }}
            >
              <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" />
            </svg>
          )}
        </div>
      ))}
    </div>
  );
};
