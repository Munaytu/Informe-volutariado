'use client';

import { useMusic } from '@/context/MusicContext';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from './ui/button';
import { Play } from 'lucide-react';
import { motion } from 'framer-motion';

const songs = [
  {
    title: "Canción para Gregoria Apaza 1",
    trackId: "2042795504"
  },
  {
    title: "Canción para Gregoria Apaza 2",
    trackId: "2042795488"
  },
  {
    title: "Canción para Gregoria Apaza 3",
    trackId: "2042795477"
  }
];

function SoundCloudPlayer({ trackId }: { trackId: string }) {
  if (!trackId) return null;
  const src = `https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${trackId}&color=%23ff5500&auto_play=true&hide_related=true&show_comments=false&show_user=true&show_reposts=false&show_teaser=false&visual=true`;
  return (
    <iframe 
      width="100%" 
      height="100" 
      scrolling="no" 
      frameBorder="no" 
      allow="autoplay" 
      src={src}>
    </iframe>
  );
}

export function MusicPlayer() {
  const { trackId, playTrack } = useMusic();

  return (
    <motion.section
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="relative -mt-16 z-20"
    >
      <div className="container mx-auto max-w-md">
        <div className="bg-black/30 backdrop-blur-md rounded-lg p-2 shadow-lg">
          <Accordion type="single" collapsible className="w-full">
            {songs.map((song, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-white/20">
                <AccordionTrigger className="text-white hover:no-underline px-4 py-2">
                  <span className="text-sm font-semibold">{song.title}</span>
                </AccordionTrigger>
                <AccordionContent className="px-4 pb-2">
                  <Button variant="ghost" onClick={() => playTrack(song.trackId)} className="w-full justify-start">
                    <Play className="h-5 w-5 text-white" />
                    <span className="ml-2 text-white text-sm">Reproducir</span>
                  </Button>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          <div className="mt-2">
            <SoundCloudPlayer trackId={trackId} />
          </div>
        </div>
      </div>
    </motion.section>
  );
}