"use client";

import { useRef, useState } from "react";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Music, Play, Pause, Forward, Rewind } from 'lucide-react';

const songs = [
  {
    title: "Canción para Gregoria Apaza 1",
    description: "Un homenaje desde el corazón.",
    audioSrc: "https://storage.googleapis.com/studioprod-bucket/9a1.mp3"
  },
  {
    title: "Canción para Gregoria Apaza 2",
    description: "Melodías de cambio y esperanza.",
    audioSrc: "https://storage.googleapis.com/studioprod-bucket/12a1.mp3"
  },
  {
    title: "Canción para Gregoria Apaza 3",
    description: "El sonido de la resiliencia.",
    audioSrc: "https://storage.googleapis.com/studioprod-bucket/14a1.mp3"
  }
];

export function MusicPlayer() {
  const [currentSongIndex, setCurrentSongIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef<HTMLAudioElement>(null);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const playNextSong = () => {
    const nextIndex = (currentSongIndex + 1) % songs.length;
    setCurrentSongIndex(nextIndex);
    setIsPlaying(false); // Auto-play can be added if desired
  };

  const playPrevSong = () => {
    const prevIndex = (currentSongIndex - 1 + songs.length) % songs.length;
    setCurrentSongIndex(prevIndex);
    setIsPlaying(false);
  };
  
  const handleTimeUpdate = () => {
    if (audioRef.current?.ended) {
      playNextSong();
    }
  };

  return (
    <Card className="mt-6 border-primary/20 shadow-sm hover:shadow-md transition-shadow w-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-md">
            <Music className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold font-headline">{songs[currentSongIndex].title}</p>
            <p className="text-sm text-muted-foreground">{songs[currentSongIndex].description}</p>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4 mt-4">
            <Button variant="ghost" size="icon" onClick={playPrevSong} aria-label="Canción anterior">
                <Rewind className="h-6 w-6 text-primary" />
            </Button>
            <Button variant="ghost" size="icon" onClick={togglePlayPause} aria-label={isPlaying ? "Pausar música" : "Reproducir música"}>
              {isPlaying ? <Pause className="h-8 w-8 text-primary" /> : <Play className="h-8 w-8 text-primary" />}
            </Button>
            <Button variant="ghost" size="icon" onClick={playNextSong} aria-label="Siguiente canción">
                <Forward className="h-6 w-6 text-primary" />
            </Button>
        </div>
        <audio 
            ref={audioRef} 
            src={songs[currentSongIndex].audioSrc} 
            onPlay={() => setIsPlaying(true)}
            onPause={() => setIsPlaying(false)}
            onTimeUpdate={handleTimeUpdate}
            onLoadedData={() => {
              if (isPlaying) audioRef.current?.play();
            }}
        />
      </CardContent>
    </Card>
  )
}
