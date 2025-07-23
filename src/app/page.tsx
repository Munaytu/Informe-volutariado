'use client';

import { useEffect, useRef } from 'react';
import Lenis from 'lenis';
import Image from 'next/image';
import { MusicPlayer } from '@/components/MusicPlayer';
import { motion } from 'framer-motion';
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  HeartHandshake,
  Droplets,
  Sparkles,
  Mountain,
} from 'lucide-react';

import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export default function AndeanEchoesPage() {
  const lenisRef = useRef();

  useEffect(() => {
    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    const rafId = requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
      cancelAnimationFrame(rafId);
    };
  }, []);

  const fadeIn = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.8, ease: "easeOut" },
    viewport: { once: true },
  };

  return (
    <main className="relative min-h-screen overflow-hidden">
      <div className="overflow-y-auto">
          <section className="relative h-screen flex items-center justify-center text-center text-white bg-cover bg-center" style={{ backgroundImage: 'url(/images/foto%20general%20de%20la%20paz%20desde%20el%20alto.jpg)' }}>
            <div className="absolute inset-0 bg-black/50"></div>
            <div className="relative z-10 p-4">
              <h1 className="font-headline text-5xl md:text-8xl font-bold tracking-tighter">
                Ecos Andinos
              </h1>
              <p className="mt-4 text-lg md:text-xl max-w-2xl mx-auto">
                No fue solo un voluntariado; fue la promesa de un viaje a lo desconocido, un eco de mi pasión por descubrir. Y tambien un Voluntariado!
              </p>
            </div>
          </section>
          <MusicPlayer />

          <div className="relative bg-background">
            <motion.section
              className="container mx-auto max-w-4xl py-16 md:py-24 px-4 text-lg leading-relaxed space-y-8"
              {...fadeIn}
            >
              <h2 className="font-headline text-4xl md:text-5xl text-center text-primary mb-8">
                De la Incertidumbre al Descubrimiento
              </h2>
              <p>Soy de Perú, y con la vida en España, Bolivia era para mí un mapa sin líneas claras. Pero todo cambió. Llegué y encontré un país mágico: una cultura que se respira en cada rincón, raíces profundas que se mantienen en el tiempo, y una geografía que te quita el aliento, no solo por su grandeza, sino porque literalmente te encuentras más cerca del cielo.</p>
              <p>Buscaba un mundo diferente, y Bolivia me lo entregó con creces.</p>
            </motion.section>
            
            <section className="py-16 md:py-24 bg-secondary">
              <div className="container mx-auto max-w-5xl px-4">
                <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl md:text-5xl text-primary">La Paz me recibió con un abrazo fuerte pero hermoso.</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div {...fadeIn} className="space-y-4 text-lg">
                    <p>El Illimani, ese nevado gigante, observa la ciudad como un guardián antiguo. Los valles del Altiplano se extienden bajo un cielo tan azul que parece pintado. Fue una sorpresa para mis ojos, sí, pero también un recordatorio constante de la altura: cada paso por esas empinadas calles era un desafío para los pulmones, un esfuerzo que te dejaba sin aire, pero te hacía sentir intensamente vivo.</p>
                    <p>La ciudad misma es un baile constante, un río de gente y sonidos. “La Paz en movimiento”, dicen, y así es. El tráfico, esa marea de coches y minibuses, al principio me llenaba de frustración, pero pronto aprendí a verlo como parte del espectáculo, una pausa para observar la vida desde la ventana.</p>
                  </motion.div>
                  <motion.div {...fadeIn}>
                    <Image src="/images/teleferico.jpg" width={600} height={400} alt="Teleférico en La Paz" className="rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300" style={{objectFit: "cover"}}/>
                  </motion.div>
                </div>
                <motion.div {...fadeIn} className="space-y-4 mt-8 text-lg">
                  <p>Las cholitas, con sus polleras de colores y sus sombreros, caminan con una fuerza y dignidad únicas. Me aventuré a ver a los brujos en El Alto, un lugar misterioso lleno de ofrendas y secretos. Y el teleférico, una red de hilos de plata, te eleva sobre todo, regalándote una vista mágica de la ciudad y un respiro del bullicio de abajo.</p>
                  <p>Esa fue mi primera gran lección cultural. Recuerdo el día que llegué: dejé mis maletas y corrí al mercado a buscar un jugo de frutas, tan frescos y abundantes aquí, y me enamoré de la palta, que se volvió mi compañera diaria. Así empezó mi aventura boliviana, siendo voluntaria desde el primer día.</p>
                </motion.div>
              </div>
            </section>

            <section className="relative py-20 md:py-32">
              <div className="absolute inset-0">
                <Image src="/images/trabajadores de gregoria .jpg" fill sizes="100vw" alt="Trabajadoras del Centro Gregoria Apaza" className="object-cover opacity-10"/>
              </div>
              <div className="container mx-auto max-w-4xl px-4 relative z-10 text-center">
                  <motion.div {...fadeIn}>
                    <HeartHandshake className="mx-auto h-12 w-12 text-accent mb-4"/>
                    <h2 className="font-headline text-4xl md:text-5xl text-accent">En el Centro Gregoria Apaza me sentí en casa desde el primer momento.</h2>
                  </motion.div>
                  <motion.div {...fadeIn} className="mt-8 text-lg leading-relaxed space-y-6 bg-background/80 backdrop-blur-sm p-8 rounded-lg shadow-lg text-left">
                      <p>Fui recibido con los brazos abiertos por un equipo cálido y acogedor. Aunque el cansancio del viaje y la altura me pesaron un poco al principio, pronto me sumergí por completo en el ritmo de Gregoria.</p>
                      <p>Un día cualquiera en el centro es un torbellino de vida. Mujeres llegan buscando apoyo, se realizan talleres, y jóvenes curiosos aprenden sobre sus derechos. La energía es constante.</p>
                      <p>Mi equipo de comunicación siempre estaba atento a las múltiples actividades, planeando redes sociales y creando publicaciones. El almuerzo era un momento para reír, hablar de la vida, de los problemas de Bolivia y de las fiestas que siempre estaban por venir. Por la tarde, la actividad continuaba: fotos en algún taller, revisión de textos, reuniones para eventos futuros. Un día lleno de tareas y de valiosas conversaciones.</p>
                      <p className="font-bold">La semana más significativa fue cuando ayudamos a organizar un gran foro en La Paz. Ver reunidas a tantas organizaciones y presenciar la experiencia del equipo del CPMGA para mover un evento de esa magnitud fue una lección poderosa sobre trabajo en equipo. Allí sentí la verdadera fuerza de la institución.</p>
                  </motion.div>
              </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
              <div className="container mx-auto max-w-5xl px-4">
                <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4 text-lg">
                      <h3 className="font-headline text-3xl md:text-4xl text-primary">Explorando y Entendiendo</h3>
                      <p>Un mes después de mi llegada, mi curiosidad me llevó a explorar los alrededores. Visité mercados y plazas, disfrutando de caminar por esta ciudad en las alturas. Subir y bajar cerros era un desafío gratificante. Incluso el tráfico, que al principio me estresaba, se volvió una parte peculiar del viaje: una pausa desde la ventana del minibús.</p>
                      <p>Las noches despejadas me regalaban una vista impresionante del cielo estrellado, a veces incluso la Vía Láctea. Empecé a entender por qué culturas antiguas como la de Tiwanaku, con sus templos milenarios, eligieron estas tierras cercanas al cielo para sus rituales sagrados.</p>
                  </div>
                  <Image src="/images/restos arqueoligico unico.jpg" width={600} height={450} alt="Restos arqueológicos" className="rounded-lg shadow-xl" style={{objectFit: "cover"}}/>
                </motion.div>
                <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                  <Image src="/images/llamita animal .jpg" width={600} height={400} alt="Llamita animal." className="rounded-lg shadow-lg" style={{objectFit: "cover"}}/>
                  <Image src="/images/festividad de sikuri tocando .jpg" width={600} height={400} alt="Festividad de sikuri tocando." className="rounded-lg shadow-lg" style={{objectFit: "cover"}}/>
                </motion.div>
              </div>
            </section>

            <section className="container mx-auto max-w-5xl py-16 md:py-24 px-4 bg-secondary rounded-xl">
              <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-12 items-center">
                  <div className="space-y-4 text-lg">
                      <h3 className="font-headline text-3xl md:text-4xl text-primary">Susurros del Titicaca y Voces de Resiliencia</h3>
                      <p>El lago es tan grande que parece un mar, pero con la calma de la montaña. Fue allí, junto al lago, donde compartí un almuerzo sencillo con un grupo de mujeres.</p>
                      <p>Sus historias de vida, sus luchas y su fuerza me enseñaron lecciones profundas sobre la resiliencia humana. Lo que más me impactó fue descubrir que muchas mujeres, a pesar de lo que han vivido, no conocen sus propios derechos. Pero la labor incansable del CPMGA, a través de sus proyectos y promotoras comunitarias que llegan a los rincones más lejanos, está cambiando esto.</p>
                      <p className="text-accent italic">Ellas están sembrando conciencia, mostrando que no tienen por qué permitir la violencia. Mi trabajo de documentación, al dar voz a estas experiencias, ayuda a visibilizar sus luchas y a fortalecer su camino hacia la libertad.</p>
                  </div>
                  <Image src="/images/foto de mi en el lago.jpg" width={600} height={450} alt="Foto mia en el lago Titicaca" className="rounded-lg shadow-xl" style={{objectFit: "cover"}}/>
              </motion.div>
              <motion.div {...fadeIn} className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8">
                <Image src="/images/fotos con promotoras comunitarias en lago.jpg" width={600} height={400} alt="Fotos con promotoras comunitarias en lago." className="rounded-lg shadow-lg" style={{objectFit: "cover"}}/>
              </motion.div>
            </section>
            
            <section className="py-16 md:py-24">
              <div className="container mx-auto max-w-4xl px-4 text-lg">
                  <motion.div {...fadeIn} className="text-center mb-12">
                      <h2 className="font-headline text-4xl md:text-5xl text-accent">Aprendizaje y Adaptación</h2>
                      <p className="mt-2 text-muted-foreground">El camino del voluntariado en Bolivia, aunque lleno de maravillas, también tuvo sus pruebas.</p>
                  </motion.div>
                  <motion.div {...fadeIn} className="grid md:grid-cols-2 gap-8">
                      <div>
                          <h3 className="font-headline text-2xl text-primary mb-2">Las Pruebas del Camino</h3>
                          <p>El clima fue un maestro exigente. Como dicen aquí, “La Paz no es para todos”: la altitud y los cambios de tiempo te ponen a prueba. El tráfico, esa serpiente de metal que se arrastra por las calles, se volvió un ejercicio diario de paciencia.</p>
                          <p>Pero decidí no lamentarme. Descubrí el teleférico, transformando los traslados en contemplación aérea: una vista que lo cambiaba todo.</p>
                      </div>
                      <div>
                          <h3 className="font-headline text-2xl text-primary mb-2">La Lección Más Profunda</h3>
                          <p>El aprendizaje más profundo fue el de “entender”. Comprender las raíces de los desafíos sociales de Bolivia, dejando de lado mis ideas preconcebidas. En lugar de juzgar, decidí participar, observar con curiosidad y tratar de comprender.</p>
                          <p className="mt-4">Esta actitud me permitió adaptarme no solo al clima y la logística, sino también a la complejidad social. Descubrí belleza y bondad en cada rincón, en cada persona. Desarrollé una capacidad de adaptación que considero inquebrantable.</p>
                      </div>
                  </motion.div>
              </div>
            </section>

            <section className="py-16 md:py-24 bg-secondary">
              <div className="container mx-auto px-4">
                <motion.div {...fadeIn} className="text-center mb-12">
                  <h2 className="font-headline text-4xl md:text-5xl text-accent">Mi creatividad también floreció aquí.</h2>
                </motion.div>
                <motion.div {...fadeIn} className="grid lg:grid-cols-2 gap-8 items-center">
                  <div className="space-y-6 text-lg">
                      <p>Me uní a un grupo de sikuris para presentarme en una celebración, y también me animé a cantar como cantautora en un espacio cultural de La Paz. Una de las cosas que más disfruté fue componer una canción para el Centro Gregoria Apaza, con letras que reflejan sus valores y su misión. Fue una manera de aportar desde el arte.</p>
                  </div>
                  <Carousel className="w-full max-w-md mx-auto">
                    <CarouselContent>
                      <CarouselItem>
                        <Image src="/images/yo tocando sikuri.jpg" width={600} height={400} alt="Tocando sikuris" className="rounded-lg shadow-lg" style={{objectFit: "cover"}}/>
                      </CarouselItem>
                      <CarouselItem>
                        <Image src="/images/presentacion musical en la paz de mi.jpg" width={600} height={400} alt="Cantando en La Paz" className="rounded-lg shadow-lg" style={{objectFit: "cover"}}/>
                      </CarouselItem>
                      <CarouselItem>
                        <Image src="/images/yo tocando como solista en la paz.jpg" width={600} height={400} alt="Yo tocando como solista en La Paz." className="rounded-lg shadow-lg" style={{objectFit: "cover"}}/>
                      </CarouselItem>
                      <CarouselItem>
                        <Image src="/images/chica de sikuri bailando.jpg" width={600} height={400} alt="Chica de sikuri bailando." className="rounded-lg shadow-lg" style={{objectFit: "cover"}}/>
                      </CarouselItem>
                      <CarouselItem>
                         <video width="600" height="400" controls className="rounded-lg shadow-lg">
                           <source src="/images/grabacion que hice de mi ensayo de sikuri.mp4" type="video/mp4" />
                           Your browser does not support the video tag.
                         </video>
                      </CarouselItem>
                    </CarouselContent>
                    <CarouselPrevious />
                    <CarouselNext />
                  </Carousel>
                </motion.div>
              </div>
            </section>

            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 text-center">
                <motion.div {...fadeIn}>
                  <h2 className="font-headline text-4xl md:text-5xl text-primary mb-4">Una Melodía Transformadora</h2>
                  <p className="mt-2 text-muted-foreground text-lg max-w-3xl mx-auto mb-12">Mi tiempo en Bolivia ha sido como una melodía transformadora. Lo que más resuena en mí es la capacidad de adaptación y la habilidad de encontrar belleza y bondad en cualquier lugar. Es una lección de vida que no tiene precio.</p>
                </motion.div>
                  <motion.div {...fadeIn} className="max-w-4xl mx-auto grid md:grid-cols-3 gap-6 text-left">
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
                          <CardContent><p>Mis habilidades en redacción, uso de herramientas digitales y gestión de redes sociales han crecido mucho. Estoy listo para aplicarlas en futuros proyectos.</p></CardContent>
                      </Card>
                  </motion.div>
              </div>
            </section>
            
            <section className="py-16 md:py-24 bg-secondary">
              <div className="container mx-auto px-4 text-center max-w-4xl">
                <motion.div {...fadeIn}>
                  <h2 className="font-headline text-4xl md:text-5xl text-primary mb-8">Un Legado para el Futuro</h2>
                  <p className="text-lg leading-relaxed mb-6">Esta experiencia en el Centro Gregoria Apaza ha sido un inmenso descubrimiento cultural y social. Me ha dado una nueva perspectiva sobre cómo las sociedades avanzan, cómo la gente se organiza en comunidades —como los antiguos ayllus— y cómo la vida se manifiesta de muchas formas.</p>
                  <p className="text-lg leading-relaxed mb-10">Mi visión del mundo, la que traía desde Europa, ha cambiado por completo. Ahora aprecio la riqueza y la complejidad de otras realidades con una mirada más abierta y comprensiva.</p>
                </motion.div>
                <motion.div {...fadeIn}>
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
                </motion.div>
              </div>
            </section>


            <footer className="py-12 bg-gray-800 text-gray-300 font-body">
              <div className="container mx-auto text-center px-4">
                <p className="font-headline text-2xl text-white mb-2">Un legado que me llevo.</p>
                <p>Este voluntariado ha sido un recordatorio de que la resiliencia y la apertura a la vida son claves para crecer. Bolivia, con su belleza cultural y geográfica, y el CPMGA, con su incansable trabajo, me han regalado una experiencia invaluable. Listo para la próxima aventura, con los ojos abiertos y el corazón dispuesto a seguir aprendiendo de la vida.</p>
                <div className="mt-6">
                    <p>&copy; {new Date().getFullYear()} Ecos Andinos. Una historia de transformación.</p>
                </div>
              </div>
            </footer>
          </div>
      </div>
    </main>
  );
}