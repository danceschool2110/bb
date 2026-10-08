import { useState } from 'react';
import { initialPhotos } from './data/tributeData';
import type { MemoryPhoto } from './types';
import { ShuttlecockCursor } from './components/ShuttlecockCursor';
import { ConfettiEffect } from './components/ConfettiEffect';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { StatsSection } from './components/StatsSection';
import { PhotoGallery } from './components/PhotoGallery';
import { ResignationDecision } from './components/ResignationDecision';
import { FarewellLetter } from './components/FarewellLetter';
import { ImageModal } from './components/ImageModal';
import { Footer } from './components/Footer';
import { FloatingElements } from './components/FloatingElements';

export default function App() {
  const [photos, setPhotos] = useState<MemoryPhoto[]>(initialPhotos);
  const [selectedPhoto, setSelectedPhoto] = useState<MemoryPhoto | null>(null);
  const [isLetterOpen, setIsLetterOpen] = useState(false);
  const [isConfettiActive, setIsConfettiActive] = useState(false);
  const [cursorEnabled, setCursorEnabled] = useState(true);

  const handleTriggerConfetti = () => {
    setIsConfettiActive(true);
  };

  const handleDecisionAccept = () => {
    setIsConfettiActive(true);
    setIsLetterOpen(true);
  };

  return (
    <div className="relative min-h-screen bg-gradient-to-b from-sky-50/70 via-white to-blue-50/50 text-slate-800 selection:bg-sky-400 selection:text-white">
      <ShuttlecockCursor enabled={cursorEnabled} />
      <FloatingElements />
      <ConfettiEffect
        active={isConfettiActive}
        onComplete={() => setIsConfettiActive(false)}
      />

      <Header
        cursorEnabled={cursorEnabled}
        onToggleCursor={() => setCursorEnabled(prev => !prev)}
        onOpenLetter={() => setIsLetterOpen(true)}
      />

      <main>
        <HeroSection
          onTriggerConfetti={handleTriggerConfetti}
          onOpenLetter={() => setIsLetterOpen(true)}
        />

        <StatsSection />

        <PhotoGallery
          photos={photos}
          onSelectPhoto={photo => setSelectedPhoto(photo)}
          onUpdatePhotos={newPhotos => setPhotos(newPhotos)}
        />

        <ResignationDecision onAccept={handleDecisionAccept} />
      </main>

      <Footer />

      <ImageModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
      />

      <FarewellLetter
        isOpen={isLetterOpen}
        onClose={() => setIsLetterOpen(false)}
      />
    </div>
  );
}
