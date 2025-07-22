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
          alt="El Illimani sobre La Paz"
          className="opacity-50"
          priority
        />
        <div className="relative z-10 p-4 animate-fade-in-down">
          <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter">
            Ecos Andinos
          </h1>
          <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
            No era solo un voluntariado, era la promesa de un viaje a lo desconocido, un eco de mi pasión por descubrir.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto max-w-4xl py-16 md:py-24 px-4 text-lg leading-relaxed space-y-8">
        <p>Soy de Perú, y con una vida en España, Bolivia era para mí un mapa sin trazos claros. Pero todo cambió. Llegué y encontré un país mágico: una cultura que se respira en cada rincón, raíces profundas que persisten en el tiempo y una geografía que te quita el aliento, no solo por su grandeza, sino porque, literalmente, estás más cerca del cielo.</p>
        <p>Buscaba un mundo diferente y Bolivia me lo dio con creces.</p>
      </section>
      
      {/* La Paz Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">El Abrazo de La Paz</h2>
            <p className="mt-2 text-muted-foreground text-lg">Una ciudad que me recibió con un abrazo fuerte pero hermoso.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <p>El Illimani, ese gigante nevado, vigila la ciudad como un guardián ancestral. Los valles del Altiplano se extienden bajo un cielo tan azul que parece pintado. Fue una sorpresa para mis ojos, sí, pero también un recordatorio constante de la altitud: cada paso por esas calles empinadas era un reto para los pulmones, un esfuerzo que te dejaba sin aire pero te hacía sentir intensamente vivo.</p>
              <p>"La Paz en movimiento", dicen, y es verdad. El tráfico, esa marea de coches y minibuses, al principio me llenó de frustración, pero pronto aprendí a verlo como parte del espectáculo, una pausa para observar la vida desde la ventanilla.</p>
            </div>
            <Image src="https://placehold.co/600x400.png" data-ai-hint="la paz street" width={600} height={400} alt="Una calle vibrante y empinada de La Paz" className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"/>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mt-16 text-center">
              <Card>
                <CardHeader><CardTitle className="font-headline flex items-center justify-center gap-2"><Palette/>Cholitas</CardTitle></CardHeader>
                <CardContent><p>Con sus faldas de colores y sombreros, caminan con una fuerza y dignidad únicas.</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="font-headline flex items-center justify-center gap-2"><Sparkles/>Mercado de las Brujas</CardTitle></CardHeader>
                <CardContent><p>Me aventuré a ver a los curanderos en El Alto, un lugar misterioso lleno de ofrendas y secretos.</p></CardContent>
              </Card>
              <Card>
                <CardHeader><CardTitle className="font-headline flex items-center justify-center gap-2"><Route/>Teleférico</CardTitle></CardHeader>
                <CardContent><p>Una red de hilos de plata que te eleva por encima de todo, ofreciendo una vista mágica y un respiro del bullicio.</p></CardContent>
              </Card>
          </div>
        </div>
      </section>

      {/* Gregoria Apaza Section */}
      <section className="relative py-20 md:py-32">
        <div className="absolute inset-0">
          <Image src="https://placehold.co/1920x1080.png" data-ai-hint="community women" layout="fill" objectFit="cover" alt="Reunión comunitaria" className="opacity-10"/>
        </div>
        <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
            <HeartHandshake className="mx-auto h-12 w-12 text-accent mb-4"/>
            <h2 className="font-headline text-4xl md:text-5xl text-accent">Un Hogar en el Centro Gregoria Apaza</h2>
            <div className="mt-8 text-lg leading-relaxed space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg">
                <p>Me sentí como en casa desde el primer momento, acogida con los brazos abiertos por un equipo cálido y cercano. Un día cualquiera era un torbellino de vida. Llegaban mujeres buscando apoyo, se impartían talleres y jóvenes curiosos aprendían sobre sus derechos. La energía era constante.</p>
                <p>La semana más significativa fue ayudando a organizar un gran foro en La Paz. Ver a tantas organizaciones juntas y ser testigo de la pericia del equipo para gestionar un evento tan grande fue una poderosa lección de trabajo en equipo. Allí sentí la verdadera fuerza de la institución.</p>
            </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto text-center px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Cartografiando el Viaje</h2>
          <p className="mt-2 text-muted-foreground text-lg max-w-3xl mx-auto mb-12">Mi trabajo documentando historias me llevó a lugares diversos, cada uno dejando una huella profunda.</p>
          <InteractiveMap />
        </div>
      </section>

      {/* Titicaca & Stories Section */}
      <section className="container mx-auto max-w-5xl py-16 md:py-24 px-4">
         <div className="grid md:grid-cols-2 gap-12 items-center">
             <div className="space-y-4">
                <h3 className="font-headline text-3xl md:text-4xl text-primary">Susurros del Titicaca</h3>
                <p className="text-lg leading-relaxed">El lago es tan grande que parece un mar, pero con la calma de las montañas. Fue allí, junto al lago, donde compartí un almuerzo sencillo con un grupo de mujeres. Sus historias de vida, sus luchas y su fuerza me enseñaron lecciones profundas sobre la resiliencia humana.</p>
                <p className="text-lg leading-relaxed text-accent italic">Lo que más me impactó fue descubrir que muchas mujeres, a pesar de lo que han vivido, no conocen sus propios derechos. Pero el trabajo incansable de CPMGA está cambiando esto, sembrando conciencia y demostrando que no tienen por qué permitir la violencia.</p>
             </div>
             <Image src="https://placehold.co/600x450.png" data-ai-hint="lake titicaca" width={600} height={450} alt="Vista serena del Lago Titicaca" className="rounded-lg shadow-xl"/>
         </div>
      </section>

      {/* Creativity & AI Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl text-accent">Florecimiento Creativo</h2>
            <p className="mt-2 text-muted-foreground text-lg">Bolivia despertó mi creatividad de formas inesperadas.</p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6">
                <p>Me uní a un grupo de sikuris para actuar en una celebración e incluso me atreví a cantar como cantautora en un espacio cultural de La Paz. También compuse una canción para el Centro Gregoria Apaza, con una letra que refleja sus valores y misión.</p>
                <MusicPlayer />
                <div className="grid grid-cols-2 gap-4">
                    <Image src="https://placehold.co/300x200.png" data-ai-hint="sikuri performance" width={300} height={200} alt="Tocando sikuris con un grupo" className="rounded-lg shadow-lg"/>
                    <Image src="https://placehold.co/300x200.png" data-ai-hint="singing concert" width={300} height={200} alt="Cantando en un centro cultural" className="rounded-lg shadow-lg"/>
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
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-12">Una Melodía Transformadora</h2>
           <Carousel className="w-full max-w-4xl mx-auto" opts={{loop: true}}>
            <CarouselContent>
              <CarouselItem>
                <Card className="h-full">
                  <CardHeader><CardTitle className="font-headline text-accent">🌱 Riqueza Cultural y Geográfica</CardTitle></CardHeader>
                  <CardContent><p className="text-lg">Mi visión del mundo, la que traía de Europa, ha cambiado por completo. Ahora aprecio la complejidad de otras realidades con una mirada más abierta y comprensiva.</p></CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="h-full">
                  <CardHeader><CardTitle className="font-headline text-accent">🌱 Crecimiento Personal y Aprendizaje Profundo</CardTitle></CardHeader>
                  <CardContent><p className="text-lg">A nivel personal, seré más consciente del rol del hombre en la sociedad y la importancia de la igualdad con la mujer. Las historias aquí me han abierto los ojos profundamente.</p></CardContent>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="h-full">
                  <CardHeader><CardTitle className="font-headline text-accent">🌱 Adaptación y Resiliencia</CardTitle></CardHeader>
                  <CardContent><p className="text-lg">En lugar de juzgar, decidí participar, observar con curiosidad e intentar comprender. Esto me permitió adaptarme y desarrollar una resiliencia que considero inquebrantable.</p></CardContent>
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
          <p className="font-headline text-2xl text-white mb-2">Un legado que llevo conmigo.</p>
          <p>Lista para la próxima aventura, con los ojos abiertos y el corazón dispuesto a seguir aprendiendo de la vida.</p>
          <div className="mt-6">
              <p>&copy; {new Date().getFullYear()} Ecos Andinos. Una historia de transformación.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}
