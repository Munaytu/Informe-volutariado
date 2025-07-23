
'use client';

import { createContext, useContext, useRef, useState, useEffect, ReactNode } from 'react';

const songs = [
  {
    title: "Canción para Gregoria Apaza 1",
    description: "Un homenaje desde el corazón.",
    audioSrc: "https://storage.googleapis.com/studioprod-bucket/9a1.mp3",
    link: "https://soundcloud.com/gregoria-apaza-cpmga/9a1?in=gregoria-apaza-cpmga/sets/juntas-hacemos-historia"
  },
  {
    title: "Canción para Gregoria Apaza 2",
    description: "Melodías de cambio y esperanza.",
    audioSrc: "https://storage.googleapis.com/studioprod-bucket/12a1.mp3",
    link: "https://soundcloud.com/gregoria-apaza-cpmga/12a1?in=gregoria-apaza-cpmga/sets/juntas-hacemos-historia"
  },
  {
    title: "Canción para Gregoria Apaza 3",
    description: "El sonido de la resiliencia.",
    audioSrc: "https://storage.googleapis.com/studioprod-bucket/14a1.mp3",
    link: "https://soundcloud.com/gregoria-apaza-cpmga/14a1?in=gregoria-apaza-cpmga/sets/juntas-hacemos-historia"
  }
];

interface MusicContextType {
  isPlaying: boolean;
  togglePlayPause: () => void;
  playNextSong: () => void;
  playPrevSong: () => void;
  currentSong: typeof songs[0];
  audioRef: React.RefObject<HTMLAudioElement>;
}

const MusicContext = createContext<MusicContextType | undefined>(undefined);

export const MusicProvider = ({ children }: { children: ReactNode }) => {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
      if (isPlaying) {
        audioElement.play().catch(e => console.error("Error al reproducir audio:", e));
      } else {
        audioElement.pause();
      }
    }
  }, [isPlaying]);

  useEffect(() => {
    const audioElement = audioRef.current;
    if (audioElement) {
        audioElement.src = songs[currentSongIndex].audioSrc;
        if (isPlaying) {
            audioElement.play().catch(e => console.error("Error al reproducir audio:", e));
        }
    }
  }, [currentSongIndex]);

  const togglePlayPause = () => {
    setIsPlaying(!isPlaying);
  };

  const playNextSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex + 1) % songs.length);
  };

  const playPrevSong = () => {
    setCurrentSongIndex((prevIndex) => (prevIndex - 1 + songs.length) % songs.length);
  };
  
  const handleTimeUpdate = () => {
    if (audioRef.current?.ended) {
      playNextSong();
    }
  };

  return (
    <MusicContext.Provider value={{ isPlaying, togglePlayPause, playNextSong, playPrevSong, currentSong: songs[currentSongIndex], audioRef }}>
      {children}
      <audio 
        ref={audioRef} 
        src={songs[currentSongIndex].audioSrc} 
        onTimeUpdate={handleTimeUpdate}
        onLoadedData={() => {
          if (isPlaying) audioRef.current?.play().catch(e => console.error("Error al reproducir audio:", e));
        }}
      />
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
