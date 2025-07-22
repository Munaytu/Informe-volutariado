import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import {
  MapPin,
  Mountain,
  Mic,
  Music,
  Wind,
  Users,
  Bot,
  Sparkles,
  BookOpen,
  HeartHandshake,
  ArrowRight,
  Route,
  Palette,
} from 'lucide-react';
import { ImageCaptionGenerator } from '@/components/image-caption-generator';
import { InteractiveMap } from '@/components/interactive-map';
import { MusicPlayer } from '@/components/music-player';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function AndeanEchoesPage() {
  return (
    <main className="bg-background text-foreground font-body">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center text-white bg-black">
        <Image
          src="https://placehold.co/1920x1080.png"
          data-ai-hint="bolivia mountain landscape"
          layout="fill"
          objectFit="cover"
          alt="Illimani mountain overlooking La Paz"
          className="opacity-50"
          priority
        />
        <div className="relative z-10 p-4 animate-fade-in-down">
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter">
            Andean Echoes
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            It wasn't just volunteering; it was the promise of a journey into the unknown, an echo of my passion for discovery.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto max-w-4xl py-16 md:py-24 px-4 text-lg leading-relaxed space-y-8">
        <p>I'm from Peru, and with a life in Spain, Bolivia was a map with no clear lines for me. But everything changed. I arrived and found a magical country: a culture you can breathe in every corner, deep roots that persist through time, and a geography that takes your breath away—not just for its grandeur, but because you are literally closer to the sky.</p>
        <p>I was looking for a different world, and Bolivia gave it to me in spades.</p>
      </section>
      
      {/* La Paz Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">The Embrace of La Paz</h2>
            <p className="mt-2 text-muted-foreground text-lg">A city that received me with a strong but beautiful hug.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p>The Illimani, that giant snowy peak, watches over the city like an ancient guardian. The Altiplano valleys stretch under a sky so blue it seems painted. It was a surprise for my eyes, yes, but also a constant reminder of the altitude: every step through those steep streets was a challenge for the lungs, an effort that left you breathless but made you feel intensely alive.</p>
              <p>"La Paz in motion," they say, and it's true. The traffic, that tide of cars and minibuses, initially filled me with frustration, but I soon learned to see it as part of the show, a pause to observe life from the window.</p>
            </div>
            <Image src="https://placehold.co/600x400.png" data-ai-hint="la paz street" width={600} height={400} alt="A vibrant, steep street in La Paz" className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"/>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
              <Card>
                <CardHeader><CardTitle className="font-headline flex items-center justify-center gap-2"><Palette/>Cholitas</CardTitle></CardHeader>
                <CardContent><p>With their colorful skirts and hats, they walk with a unique strength and dignity.</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="font-headline flex items-center justify-center gap-2"><Sparkles/>Witches' Market</CardTitle></CardHeader>
                <CardContent><p>I ventured to see the witch doctors in El Alto, a mysterious place full of offerings and secrets.</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="font-headline flex items-center justify-center gap-2"><Route/>Teleférico</CardTitle></CardHeader>
                <CardContent><p>A network of silver threads that lifts you above everything, offering a magical view and a respite from the bustle.</p></CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Gregoria Apaza Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image src="https://placehold.co/1920x1080.png" data-ai-hint="community women" layout="fill" objectFit="cover" alt="Community gathering" className="opacity-10"/>
        </div>
        <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
            <HeartHandshake className="mx-auto h-12 w-12 text-accent mb-4"/>
            <h2 className="font-headline text-4xl md:text-5xl text-accent">A Home at Centro Gregoria Apaza</h2>
            <div className="mt-8 text-lg leading-relaxed space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <p>I felt at home from the first moment, welcomed with open arms by a warm and inviting team. A typical day was a whirlwind of life. Women arrived seeking support, workshops were held, and curious young people learned about their rights. The energy was constant.</p>
                <p>The most significant week was helping organize a large forum in La Paz. Seeing so many organizations together and witnessing the team's expertise in managing such a large event was a powerful lesson in teamwork. There, I felt the true strength of the institution.</p>
            </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Mapping the Journey</h2>
          <p className="mt-2 text-muted-foreground text-lg max-w-3xl mx-auto mb-12">My work documenting stories took me to diverse places, each leaving a profound mark.</p>
          <InteractiveMap />
        </div>
      </section>

      {/* Titicaca & Stories Section */}
      <section className="container mx-auto max-w-5xl py-16 md:py-24 px-4">
         <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-4">
                <h3 className="font-headline text-3xl md:text-4xl text-primary">Whispers of Titicaca</h3>
                <p className="text-lg leading-relaxed">The lake is so large it feels like a sea, but with the calm of the mountains. It was there, by the lake, that I shared a simple lunch with a group of women. Their life stories, their struggles, and their strength taught me deep lessons about human resilience.</p>
                <p className="text-lg leading-relaxed text-accent italic">What struck me most was discovering that many women, despite what they have lived through, do not know their own rights. But the tireless work of CPMGA is changing this, sowing awareness and showing that they do not have to allow violence.</p>
             </div>
             <Image src="https://placehold.co/600x450.png" data-ai-hint="lake titicaca" width={600} height={450} alt="Serene view of Lake Titicaca" className="rounded-lg shadow-xl"/>
         </div>
      </section>

      {/* Creativity & AI Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl text-accent">Creative Flourishing</h2>
            <p className="mt-2 text-muted-foreground text-lg">Bolivia awakened my creativity in unexpected ways.</p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <p>I joined a group of sikuris to perform in a celebration and even dared to sing as a songwriter in a cultural space in La Paz. I also composed a song for the Centro Gregoria Apaza, with lyrics reflecting its values and mission.</p>
                <MusicPlayer />
                <div className="grid grid-cols-2 gap-4">
                    <Image src="https://placehold.co/300x200.png" data-ai-hint="sikuri performance" width={300} height={200} alt="Playing sikuris with a group" className="rounded-lg shadow-lg"/>
                    <Image src="https://placehold.co/300x200.png" data-ai-hint="singing concert" width={300} height={200} alt="Singing at a cultural center" className="rounded-lg shadow-lg"/>
                </div>
            </div>
            <div className="lg:col-span-3">
              <ImageCaptionGenerator />
            </div>
          </div>
        </div>
      </section>

      {/* Reflection Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 text-center">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-12">A Transformative Melody</h2>
           <Carousel className="w-full max-w-4xl mx-auto" opts={{loop: true}}>
            <CarouselContent>
              <CarouselItem>
                <Card className="h-full">
                  <CardHeader><CardTitle className="font-headline text-accent">🌱 Cultural & Geographical Richness</CardTitle></CardHeader>
                  <CardContent><p className="text-lg">My view of the world, which I brought from Europe, has completely changed. I now appreciate the complexity of other realities with a more open and comprehensive gaze.</p></CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="h-full">
                  <CardHeader><CardTitle className="font-headline text-accent">🌱 Personal Growth & Deep Learning</CardTitle></CardHeader>
                  <CardContent><p className="text-lg">On a personal level, I will be more aware of the role of men in society and the importance of equality with women. The stories here have opened my eyes profoundly.</p></CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="h-full">
                  <CardHeader><CardTitle className="font-headline text-accent">🌱 Adaptation & Resilience</CardTitle></CardHeader>
                  <CardContent><p className="text-lg">Instead of judging, I decided to participate, observe with curiosity, and try to understand. This allowed me to adapt and develop a resilience I consider unbreakable.</p></CardContent>
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-gray-800 text-gray-300 font-body">
        <div className="container mx-auto text-center px-4">
          <p className="font-headline text-2xl text-white mb-2">A legacy I carry with me.</p>
          <p>Ready for the next adventure, with open eyes and a heart willing to keep learning from life.</p>
          <div className="mt-6">
              <p>&copy; {new Date().getFullYear()} Andean Echoes. A story of transformation.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
