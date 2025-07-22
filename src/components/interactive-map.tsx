"use client";

import Image from 'next/image';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import { Button } from './ui/button';
import { MapPin } from 'lucide-react';

const locations = [
  { name: 'La Paz', position: { top: '35%', left: '30%' }, description: 'A city that touches the sky, full of life and contrasts.' },
  { name: 'Lago Titicaca', position: { top: '18%', left: '22%' }, description: 'A sea in the mountains, where time slows down.' },
  { name: 'Viacha', position: { top: '48%', left: '28%' }, description: 'Documenting stories of strength and resilience.' },
  { name: 'Achocalla', position: { top: '42%', left: '45%' }, description: 'Valleys near the city, offering a breath of fresh air.'},
  { name: 'Corocoro', position: { top: '65%', left: '20%' }, description: 'An old mining town with a rich, yet heavy, history.' },
  { name: 'Huatajata', position: { top: '25%', left: '38%' }, description: 'A serene town on the shores of the immense Lake Titicaca.' },
];

export function InteractiveMap() {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-4 border-white/50">
      <Image
        src="https://placehold.co/1024x768.png"
        data-ai-hint="bolivia altiplano map"
        alt="Map of Bolivian Altiplano"
        layout="fill"
        objectFit="cover"
        className="brightness-90"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
      {locations.map((loc) => (
        <Popover key={loc.name}>
          <PopoverTrigger asChild>
            <Button
              variant="outline"
              className="absolute w-10 h-10 md:w-12 md:h-12 rounded-full p-0 bg-background/80 backdrop-blur-sm text-accent border-2 border-accent hover:bg-background transform -translate-x-1/2 -translate-y-1/2 transition-all hover:scale-110"
              style={{ top: loc.position.top, left: loc.position.left }}
              aria-label={`Show details for ${loc.name}`}
            >
              <MapPin className="h-5 w-5 md:h-6 md:w-6" />
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-64 border-accent bg-background/95 backdrop-blur-sm">
            <div className="space-y-2">
              <h3 className="font-headline font-semibold leading-none tracking-tight">{loc.name}</h3>
              <p className="text-sm text-muted-foreground">{loc.description}</p>
            </div>
          </PopoverContent>
        </Popover>
      ))}
    </div>
  );
}
