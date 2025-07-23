'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

interface MusicContextType {
  trackId: string | null;
  playTrack: (trackId: string) => void;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [trackId, setTrackId] = useState<string | null>(null);

  const playTrack = (newTrackId: string) => {
    setTrackId(newTrackId);
  };

  return (
    <MusicContext.Provider value={{ trackId, playTrack }}>
      {children}
    </MusicContext.Provider>
  );
};

export const useMusic = () => {
  const context = useContext(MusicContext);
  if (context === undefined) {
    throw new Error('useMusic must be used within a MusicProvider');
  }
  return context;
};