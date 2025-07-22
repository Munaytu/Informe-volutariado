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
  Droplets,
  Cloudy,
  Tractor,
} from 'lucide-react';
import { ImageCaptionGenerator } from '@/components/image-caption-generator';
import { InteractiveMap } from '@/components/interactive-map';
import { MusicPlayer } from '@/components/music-player';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import Link from 'next/link';

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
            No fue solo un voluntariado; fue la promesa de un viaje a lo desconocido, un eco de mi pasión por descubrir.
          </p>
        </div>
      </section>

      {/* Introduction */}
      <section className="container mx-auto max-w-4xl py-16 md:py-24 px-4 text-lg leading-relaxed space-y-8">
        <p>Soy de Perú, y con la vida en España, Bolivia era para mí un mapa sin líneas claras. Pero todo cambió. Llegué y encontré un país mágico: una cultura que se respira en cada rincón, raíces profundas que se mantienen en el tiempo, y una geografía que te quita el aliento, no solo por su grandeza, sino porque literalmente te encuentras más cerca del cielo.</p>
        <p>Buscaba un mundo diferente, y Bolivia me lo entregó con creces.</p>
      </section>
      
      {/* La Paz Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl text-primary">La Paz me recibió con un abrazo fuerte pero hermoso.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4 text-lg">
              <p>El Illimani, ese nevado gigante, observa la ciudad como un guardián antiguo. Los valles del Altiplano se extienden bajo un cielo tan azul que parece pintado. Fue una sorpresa para mis ojos, sí, pero también un recordatorio constante de la altura: cada paso por esas empinadas calles era un desafío para los pulmones, un esfuerzo que te dejaba sin aire, pero te hacía sentir intensamente viva.</p>
              <p>La ciudad misma es un baile constante, un río de gente y sonidos. “La Paz en movimiento”, dicen, y así es. El tráfico, esa marea de coches y minibuses, al principio me llenaba de frustración, pero pronto aprendí a verlo como parte del espectáculo, una pausa para observar la vida desde la ventana.</p>
            </div>
            <Image src="https://placehold.co/600x400.png" data-ai-hint="la paz street" width={600} height={400} alt="Una calle vibrante y empinada de La Paz" className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300"/>
          </div>
          <div className="space-y-4 mt-8 text-lg">
             <p>Las cholitas, con sus polleras de colores y sus sombreros, caminan con una fuerza y dignidad únicas. Me aventuré a ver a los brujos en El Alto, un lugar misterioso lleno de ofrendas y secretos. Y el teleférico, una red de hilos de plata, te eleva sobre todo, regalándote una vista mágica de la ciudad y un respiro del bullicio de abajo.</p>
             <p>Esa fue mi primera gran lección cultural. Recuerdo el día que llegué: dejé mis maletas y corrí al mercado a buscar un jugo de frutas, tan frescos y abundantes aquí, y me enamoré de la palta, que se volvió mi compañera diaria. Así empezó mi aventura boliviana, siendo voluntaria desde el primer día.</p>
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
            <h2 className="font-headline text-4xl md:text-5xl text-accent">En el Centro Gregoria Apaza me sentí en casa desde el primer momento.</h2>
            <div className="mt-8 text-lg leading-relaxed space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg text-left">
                <p>Fui recibida con los brazos abiertos por un equipo cálido y acogedor. Aunque el cansancio del viaje y la altura me pesaron un poco al principio, pronto me sumergí por completo en el ritmo de Gregoria.</p>
                <p>Un día cualquiera en el centro es un torbellino de vida. Mujeres llegan buscando apoyo, se realizan talleres, y jóvenes curiosos aprenden sobre sus derechos. La energía es constante.</p>
                <p>Mi equipo de comunicación siempre estaba atento a las múltiples actividades, planeando redes sociales y creando publicaciones. El almuerzo era un momento para reír, hablar de la vida, de los problemas de Bolivia y de las fiestas que siempre estaban por venir. Por la tarde, la actividad continuaba: fotos en algún taller, revisión de textos, reuniones para eventos futuros. Un día lleno de tareas y de valiosas conversaciones.</p>
                <p className="font-bold">La semana más significativa fue cuando ayudamos a organizar un gran foro en La Paz. Ver reunidas a tantas organizaciones y presenciar la experiencia del equipo del CPMGA para mover un evento de esa magnitud fue una lección poderosa sobre trabajo en equipo. Allí sentí la verdadera fuerza de la institución.</p>
            </div>
        </div>
      </section>
      
      {/* Exploration Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto max-w-5xl px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-lg">
                <h3 className="font-headline text-3xl md:text-4xl text-primary">Explorando y Entendiendo</h3>
                <p>Un mes después de mi llegada, mi curiosidad me llevó a explorar los alrededores. Visité mercados y plazas, disfrutando de caminar por esta ciudad en las alturas. Subir y bajar cerros era un desafío gratificante. Incluso el tráfico, que al principio me estresaba, se volvió una parte peculiar del viaje: una pausa desde la ventana del minibús.</p>
                <p>Las noches despejadas me regalaban una vista impresionante del cielo estrellado, a veces incluso la Vía Láctea. Empecé a entender por qué culturas antiguas como la de Tiwanaku, con sus templos milenarios, eligieron estas tierras cercanas al cielo para sus rituales sagrados.</p>
            </div>
            <Image src="https://placehold.co/600x450.png" data-ai-hint="tiwanaku ruins" width={600} height={450} alt="Cielo estrellado sobre ruinas andinas" className="rounded-lg shadow-xl"/>
          </div>
        </div>
      </section>

      {/* Interactive Map Section */}
      <section className="py-16 md:py-24 bg-background">
        <div className="container mx-auto text-center px-4">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Cartografiando el Viaje</h2>
          <p className="mt-2 text-muted-foreground text-lg max-w-3xl mx-auto mb-12">Mis viajes oficiales, documentando las historias de mujeres que han vivido violencia, me llevaron a lugares diversos. Cada uno con una huella profunda.</p>
          <InteractiveMap />
        </div>
      </section>

      {/* Titicaca & Stories Section */}
      <section className="container mx-auto max-w-5xl py-16 md:py-24 px-4 bg-secondary rounded-xl">
         <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-4 text-lg">
                <h3 className="font-headline text-3xl md:text-4xl text-primary">Susurros del Titicaca y Voces de Resiliencia</h3>
                <p>El lago es tan grande que parece un mar, pero con la calma de la montaña. Fue allí, junto al lago, donde compartí un almuerzo sencillo con un grupo de mujeres.</p>
                <p>Sus historias de vida, sus luchas y su fuerza me enseñaron lecciones profundas sobre la resiliencia humana. Lo que más me impactó fue descubrir que muchas mujeres, a pesar de lo que han vivido, no conocen sus propios derechos. Pero la labor incansable del CPMGA, a través de sus proyectos y promotoras comunitarias que llegan a los rincones más lejanos, está cambiando esto.</p>
                <p className="text-accent italic">Ellas están sembrando conciencia, mostrando que no tienen por qué permitir la violencia. Mi trabajo de documentación, al dar voz a estas experiencias, ayuda a visibilizar sus luchas y a fortalecer su camino hacia la libertad.</p>
             </div>
             <Image src="https://placehold.co/600x450.png" data-ai-hint="lake titicaca" width={600} height={450} alt="Vista serena del Lago Titicaca" className="rounded-lg shadow-xl"/>
         </div>
      </section>
      
      {/* Challenges Section */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-lg">
            <div className="text-center mb-12">
                 <h2 className="font-headline text-4xl md:text-5xl text-accent">Aprendizaje y Adaptación</h2>
                 <p className="mt-2 text-muted-foreground">El camino del voluntariado en Bolivia, aunque lleno de maravillas, también tuvo sus pruebas.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
                <div>
                    <h3 className="font-headline text-2xl text-primary mb-2">Las Pruebas del Camino</h3>
                    <p>El clima fue un maestro exigente. Como dicen aquí, “La Paz no es para todos”: la altitud y los cambios de tiempo te ponen a prueba. El tráfico, esa serpiente de metal que se arrastra por las calles, se volvió un ejercicio diario de paciencia.</p>
                    <p className="mt-4">Pero decidí no lamentarme. Descubrí el teleférico, transformando los traslados en contemplación aérea: una vista que lo cambiaba todo.</p>
                </div>
                 <div>
                    <h3 className="font-headline text-2xl text-primary mb-2">La Lección Más Profunda</h3>
                    <p>El aprendizaje más profundo fue el de “entender”. Comprender las raíces de los desafíos sociales de Bolivia, dejando de lado mis ideas preconcebidas. En lugar de juzgar, decidí participar, observar con curiosidad y tratar de comprender.</p>
                    <p className="mt-4">Esta actitud me permitió adaptarme no solo al clima y la logística, sino también a la complejidad social. Descubrí belleza y bondad en cada rincón, en cada persona. Desarrollé una capacidad de adaptación que considero inquebrantable.</p>
                </div>
            </div>
        </div>
      </section>

      {/* Creativity & AI Section */}
      <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl text-accent">Mi creatividad también floreció aquí.</h2>
          </div>
          <div className="grid lg:grid-cols-5 gap-8">
            <div className="lg:col-span-2 space-y-6 text-lg">
                <p>Me uní a un grupo de sikuris para presentarme en una celebración, y también me animé a cantar como cantautora en un espacio cultural de La Paz. Una de las cosas que más disfruté fue componer una canción para el Centro Gregoria Apaza, con letras que reflejan sus valores y su misión. Fue una manera de aportar desde el arte.</p>
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
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Una Melodía Transformadora</h2>
           <p className="mt-2 text-muted-foreground text-lg max-w-3xl mx-auto mb-12">Mi tiempo en Bolivia ha sido como una melodía transformadora. Lo que más resuena en mí es la capacidad de adaptación y la habilidad de encontrar belleza y bondad en cualquier lugar. Es una lección de vida que no tiene precio.</p>
            <div className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-left">
                <Card>
                    <CardHeader><CardTitle className="font-headline text-accent">En lo Personal</CardTitle></CardHeader>
                    <CardContent><p>Seré más consciente del rol del hombre en la sociedad y de la importancia de la igualdad con las mujeres. Las conversaciones y las historias aquí han abierto mis ojos de forma profunda.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="font-headline text-accent">En lo Social</CardTitle></CardHeader>
                    <CardContent><p>Entenderé que no existe una única forma de vivir o ver el mundo, y valoraré aún más la riqueza cultural y de pensamiento de cada lugar.</p></CardContent>
                </Card>
                <Card>
                    <CardHeader><CardTitle className="font-headline text-accent">En lo Profesional</CardTitle></CardHeader>
                    <CardContent><p>Mis habilidades en redacción, uso de herramientas digitales y gestión de redes sociales han crecido mucho. Estoy lista para aplicarlas en futuros proyectos.</p></CardContent>
                </Card>
            </div>
        </div>
      </section>
      
      {/* Conclusion Section */}
       <section className="py-16 md:py-24 bg-secondary">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8">Un Legado para el Futuro</h2>
           <p className="text-lg leading-relaxed mb-6">Esta experiencia en el Centro Gregoria Apaza ha sido un inmenso descubrimiento cultural y social. Me ha dado una nueva perspectiva sobre cómo las sociedades avanzan, cómo la gente se organiza en comunidades —como los antiguos ayllus— y cómo la vida se manifiesta de muchas formas.</p>
           <p className="text-lg leading-relaxed mb-10">Mi visión del mundo, la que traía desde Europa, ha cambiado por completo. Ahora aprecio la riqueza y la complejidad de otras realidades con una mirada más abierta y comprensiva.</p>
           <Carousel className="w-full max-w-2xl mx-auto" opts={{loop: true}}>
            <CarouselContent>
              <CarouselItem>
                <Card className="bg-background">
                  <CardHeader><CardTitle className="font-headline text-accent flex items-center justify-center gap-2"><Droplets/> Riqueza Cultural y Geográfica</CardTitle></CardHeader>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="bg-background">
                  <CardHeader><CardTitle className="font-headline text-accent flex items-center justify-center gap-2"><Sparkles/> Crecimiento Personal y Aprendizaje Profundo</CardTitle></CardHeader>
                </Card>
              </CarouselItem>
              <CarouselItem>
                <Card className="bg-background">
                  <CardHeader><CardTitle className="font-headline text-accent flex items-center justify-center gap-2"><Mountain/> Adaptación y Resiliencia</CardTitle></CardHeader>
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
          <p className="font-headline text-2xl text-white mb-2">Un legado que me llevo.</p>
          <p>Este voluntariado ha sido un recordatorio de que la resiliencia y la apertura a la vida son claves para crecer. Bolivia, con su belleza cultural y geográfica, y el CPMGA, con su incansable trabajo, me han regalado una experiencia invaluable. Lista para la próxima aventura, con los ojos abiertos y el corazón dispuesto a seguir aprendiendo de la vida.</p>
          <div className="mt-6">
              <p>&copy; {new Date().getFullYear()} Ecos Andinos. Una historia de transformación.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

    