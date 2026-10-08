import React, { useEffect, useState, useRef } from 'react';
import { ShuttlecockIcon } from './ShuttlecockIcon';

interface Particle {
  id: number;
  x: number;
  y: number;
  opacity: number;
  scale: number;
}

interface ShuttlecockCursorProps {
  enabled: boolean;
}

export const ShuttlecockCursor: React.FC<ShuttlecockCursorProps> = ({ enabled }) => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [rotation, setRotation] = useState(-30);
  const [particles, setParticles] = useState<Particle[]>([]);
  const lastPos = useRef({ x: -100, y: -100 });
  const nextId = useRef(0);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      const dx = e.clientX - lastPos.current.x;
      const dy = e.clientY - lastPos.current.y;
      const dist = Math.sqrt(dx * dx + dy * dy);

      if (dist > 3) {
        const angle = Math.atan2(dy, dx) * (180 / Math.PI) - 90;
        setRotation(angle);

        if (dist > 10 && Math.random() > 0.4) {
          const newParticle: Particle = {
            id: nextId.current++,
            x: e.clientX,
            y: e.clientY,
            opacity: 0.7,
            scale: Math.random() * 0.5 + 0.5,
          };
          setParticles(prev => [...prev.slice(-12), newParticle]);
        }
      }

      lastPos.current = { x: e.clientX, y: e.clientY };
      setPos({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [enabled]);

  useEffect(() => {
    if (!enabled || particles.length === 0) return;

    const interval = setInterval(() => {
      setParticles(prev =>
        prev
          .map(p => ({
            ...p,
            opacity: p.opacity - 0.06,
            y: p.y + 1,
            scale: p.scale * 0.95,
          }))
          .filter(p => p.opacity > 0.1)
      );
    }, 30);

    return () => clearInterval(interval);
  }, [enabled, particles]);

  if (!enabled) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      {particles.map(p => (
        <div
          key={p.id}
          className="absolute rounded-full bg-sky-300 blur-[0.5px] transition-all duration-75"
          style={{
            left: `${p.x}px`,
            top: `${p.y}px`,
            width: '8px',
            height: '8px',
            opacity: p.opacity,
            transform: `translate(-50%, -50%) scale(${p.scale})`,
          }}
        />
      ))}

      <div
        className="absolute transition-transform duration-75 will-change-transform drop-shadow-[0_4px_10px_rgba(2,132,199,0.3)]"
        style={{
          left: `${pos.x}px`,
          top: `${pos.y}px`,
          transform: `translate(-50%, -50%) rotate(${rotation}deg)`,
        }}
      >
        <ShuttlecockIcon size={28} cuteFace={true} />
      </div>
    </div>
  );
};
