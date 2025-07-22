"use client";

import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Music, Play, Pause } from 'lucide-react';
import { useState } from "react";

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <Card className="mt-6 border-primary/20 shadow-sm hover:shadow-md transition-shadow">
      <CardContent className="p-4 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="p-3 bg-primary/10 rounded-md">
            <Music className="w-6 h-6 text-primary" />
          </div>
          <div>
            <p className="font-semibold font-headline">Song for Gregoria Apaza</p>
            <p className="text-sm text-muted-foreground">A tribute from the heart</p>
          </div>
        </div>
        <Button variant="ghost" size="icon" onClick={() => setIsPlaying(!isPlaying)} aria-label={isPlaying ? "Pause music" : "Play music"}>
          {isPlaying ? <Pause className="h-6 w-6 text-primary" /> : <Play className="h-6 w-6 text-primary" />}
        </Button>
      </CardContent>
    </Card>
  )
}
