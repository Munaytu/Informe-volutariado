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
  { name: 'La Paz', position: { top: '35%', left: '30%' }, description: 'Una ciudad que toca el cielo, llena de vida y contrastes.' },
  { name: 'Lago Titicaca', position: { top: '18%', left: '22%' }, description: 'Un mar en las montañas, donde el tiempo se detiene.' },
  { name: 'Viacha', position: { top: '48%', left: '28%' }, description: 'Documentando historias de fuerza y resiliencia.' },
  { name: 'Achocalla', position: { top: '42%', left: '45%' }, description: 'Valles cercanos a la ciudad, un respiro de aire fresco.'},
  { name: 'Corocoro', position: { top: '65%', left: '20%' }, description: 'Un antiguo pueblo minero con una historia rica pero pesada.' },
  { name: 'Huatajata', position: { top: '25%', left: '38%' }, description: 'Un pueblo sereno a orillas del inmenso Lago Titicaca.' },
];

export function InteractiveMap() {
  return (
    <div className="relative w-full max-w-4xl mx-auto aspect-[4/3] rounded-lg overflow-hidden shadow-2xl border-4 border-white/50">
      <Image
        src="https://placehold.co/1024x768.png"
        data-ai-hint="bolivia altiplano map"
        alt="Mapa del Altiplano Boliviano"
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
              aria-label={`Mostrar detalles de ${loc.name}`}
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
