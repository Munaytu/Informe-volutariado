
'use client';

import { useMusic } from '@/context/MusicContext';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Music, Play, Pause, Forward, Rewind, Link as LinkIcon } from 'lucide-react';
import Link from 'next/link';

export function MusicPlayer() {
  const { isPlaying, togglePlayPause, playNextSong, playPrevSong, currentSong } = useMusic();

  return (
    <Card className="mt-6 border-primary/20 shadow-sm hover:shadow-md transition-shadow w-full">
      <CardContent className="p-4">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-md">
            <Music className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold font-headline">{currentSong.title}</p>
            <p className="text-sm text-muted-foreground">{currentSong.description}</p>
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
        <div className="mt-4 text-center">
            <Link href={currentSong.link} target="_blank" rel="noopener noreferrer" className="text-sm text-primary hover:underline inline-flex items-center gap-1.5">
                <LinkIcon className="w-4 h-4"/>
                Escuchar en SoundCloud
            </Link>
        </div>
      </CardContent>
    </Card>
  )
}
