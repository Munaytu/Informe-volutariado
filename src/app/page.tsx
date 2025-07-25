'use client';

import { useEffect, useRef, useState } from 'react';
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
  const [isHovered, setIsHovered] = useState(false);

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
                No fue solo un voluntariado; fue la promesa de un viaje a lo desconocido, un eco de mi pasión por descubrir. Y bueno... tambien un Voluntariado!
              </p>
            </div>
          </section>
          <MusicPlayer />

          <div className="relative bg-transparent">
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
              <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500 rounded-full filter blur-3xl opacity-20"></div>
              <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-blue-500 rounded-full filter blur-3xl opacity-20"></div>
            </div>
            <motion.section
              className="container mx-auto max-w-4xl py-16 md:py-24 px-4 text-lg leading-relaxed space-y-8 glassmorphism relative z-10"
              {...fadeIn}
            >
              <h2 className="font-headline text-4xl md:text-5xl text-center text-primary mb-8">
                De la Incertidumbre al Descubrimiento
              </h2>
              <p>Soy de Perú, y con la vida en España, Bolivia era para mí un mapa sin líneas claras. Pero todo cambió. Llegué y encontré un país mágico: una cultura que se respira en cada rincón, raíces profundas que se mantienen en el tiempo, y una geografía que te quita el aliento, no solo por su grandeza, sino porque literalmente te encuentras más cerca del cielo.</p>
              <p>Buscaba un mundo diferente, y Bolivia me lo entregó con creces.</p>
            </motion.section>
            
            <section className="py-16 md:py-24">
              <div className="container mx-auto max-w-5xl px-4 glassmorphism">
                <div className="text-center mb-12">
                  <h2 className="font-headline text-4xl md:text-5xl text-primary">La Paz me recibió con un abrazo fuerte pero hermoso.</h2>
                </div>
                <div className="grid md:grid-cols-2 gap-8 items-center">
                  <motion.div {...fadeIn} className="space-y-4 text-lg">
                    <p>El Illimani, ese nevado gigante, observa la ciudad como un guardián antiguo. Los valles del Altiplano se extienden bajo un cielo tan azul que parece pintado. Fue una sorpresa para mis ojos, sí, pero también un recordatorio constante de la altura: cada paso por esas empinadas calles era un desafío para los pulmones, un esfuerzo que te dejaba sin aire, pero te hacía sentir intensamente vivo.</p>
                    <p>La ciudad misma es un baile constante, un río de gente y sonidos. “La Paz en movimiento”, dicen, y así es. El tráfico, esa marea de coches y minibuses, al principio me llenaba de frustración, pero pronto aprendí a verlo como parte del espectáculo, una pausa para observar la vida desde la ventana.</p>
                  </motion.div>
                  <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl">
                    <Image src="/images/teleferico.jpg" width={600} height={400} alt="Teleférico en La Paz" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                  </motion.div>
                </div>
                <motion.div {...fadeIn} className="space-y-4 mt-8 text-lg">
                  <p>Las cholitas, con sus polleras de colores y sus sombreros, caminan con una fuerza y dignidad únicas. Me aventuré a ver a los brujos en El Alto, un lugar misterioso lleno de ofrendas y secretos. Y el teleférico, una red de hilos de plata, te eleva sobre todo, regalándote una vista mágica de la ciudad y un respiro del bullicio de abajo.</p>
                  <p>Esa fue mi primera gran lección cultural. Recuerdo el día que llegué: dejé mis maletas y corrí al mercado a buscar un jugo de frutas, tan frescos y abundantes aquí, y me enamoré de la palta, que se volvió mi compañera diaria. Así empezó mi aventura boliviana, siendo voluntario desde el primer día.</p>
                </motion.div>
              </div>
            </section>

            <motion.section 
              className="relative py-20 md:py-32 group"
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <div className="absolute inset-0">
                <Image src="/images/trabajadores de gregoria .jpg" fill sizes="100vw" alt="Trabajadoras del Centro Gregoria Apaza" className="object-cover transition-opacity duration-500 ease-in-out" style={{ opacity: isHovered ? 0.1 : 1 }}/>
              </div>
              <motion.div 
                className="container mx-auto max-w-4xl px-4 relative z-10 text-center transition-opacity duration-500 ease-in-out"
                initial={{ opacity: 0 }}
                animate={{ opacity: isHovered ? 1 : 0 }}
              >
                  <motion.div {...fadeIn}>
                    <HeartHandshake className="mx-auto h-12 w-12 text-accent mb-4"/>
                    <h2 className="font-headline text-4xl md:text-5xl text-accent">En el Centro Gregoria Apaza me sentí en casa desde el primer momento.</h2>
                  </motion.div>
                  <motion.div {...fadeIn} className="mt-8 text-lg leading-relaxed space-y-6 glassmorphism p-8 rounded-lg shadow-lg text-left">
                      <p>Fui recibido con los brazos abiertos por un equipo cálido y acogedor. Aunque el cansancio del viaje y la altura me pesaron un poco al principio, pronto me sumergí por completo en el ritmo de Gregoria.</p>
                      <p>Un día cualquiera en el centro es un torbellino de vida. Mujeres llegan buscando apoyo, se realizan talleres, y jóvenes curiosos aprenden sobre sus derechos. La energía es constante.</p>
                      <p>Mi equipo de comunicación siempre estaba atento a las múltiples actividades, planeando redes sociales y creando publicaciones. El almuerzo era un momento para reír, hablar de la vida, de los problemas de Bolivia y de las fiestas que siempre estaban por venir. Por la tarde, la actividad continuaba: fotos en algún taller, revisión de textos, reuniones para eventos futuros. Un día lleno de tareas y de valiosas conversaciones.</p>
                      <p className="font-bold">La semana más significativa fue cuando ayudamos a organizar un gran foro en La Paz. Ver reunidas a tantas organizaciones y presenciar la experiencia del equipo del CPMGA para mover un evento de esa magnitud fue una lección poderosa sobre trabajo en equipo. Allí sentí la verdadera fuerza de la institución.</p>
                  </motion.div>
              </motion.div>
            </motion.section>
            
            <section className="py-16 md:py-24">
              <div className="container mx-auto max-w-5xl px-4 glassmorphism">
                <motion.div {...fadeIn} className="text-center mb-12">
                  <h3 className="font-headline text-3xl md:text-4xl text-primary">Explorando y Entendiendo</h3>
                </motion.div>
                <motion.div {...fadeIn} className="space-y-4 text-lg mb-12">
                  <p>Un mes después de mi llegada, mi curiosidad me llevó a explorar los alrededores. Visité mercados y plazas, disfrutando de caminar por esta ciudad en las alturas. Subir y bajar cerros era un desafío gratificante. Incluso el tráfico, que al principio me estresaba, se volvió una parte peculiar del viaje: una pausa desde la ventana del minibús.</p>
                  <p>Las noches despejadas me regalaban una vista impresionante del cielo estrellado, a veces incluso la Vía Láctea. Al convivir con la gente de estas tierras, comencé a sentir no solo su hospitalidad, sino también la profundidad de una cultura viva, tejida con los hilos del tiempo y el cielo. Conocí a un astrólogo local que me enseñó a leer las estrellas como lo hacían los sabios tiwanakotas, comprendiendo el cielo no solo como un mapa, sino como una guía espiritual y temporal. A su lado, empecé a entender por qué culturas ancestrales como la de Tiwanaku eligieron estos lugares elevados, tan cerca de los astros, para levantar sus templos y realizar sus rituales sagrados: no era casualidad, era armonía. Todo tenía su momento, su ritmo, su propósito. Y al ver el mundo desde esa perspectiva, también comencé a reflexionar sobre mis propios tiempos, mis raíces y mi forma de habitar el presente.</p>
                </motion.div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl col-span-1 md:col-span-2">
                    <Image src="/images/restos arqueoligico unico.jpg" width={800} height={600} alt="Restos arqueológicos" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                  </motion.div>
                  <div className="grid grid-rows-2 gap-4">
                    <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl">
                      <Image src="/images/llamita animal .jpg" width={400} height={300} alt="Llamita animal." className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                    </motion.div>
                    <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl">
                      <Image src="/images/festividad de sikuri tocando .jpg" width={400} height={300} alt="Festividad de sikuri tocando." className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                    </motion.div>
                  </div>
                </div>
              </div>
            </section>

            <section className="container mx-auto max-w-5xl py-16 md:py-24 px-4 glassmorphism rounded-xl">
              <motion.div {...fadeIn} className="text-center mb-12">
                <h3 className="font-headline text-3xl md:text-4xl text-primary">El Lago Sagrado de los Andes</h3>
              </motion.div>
              <div className="grid md:grid-cols-2 gap-12 items-start">
                <div className="space-y-4 text-lg">
                  <p>El Lago Titicaca no es solo un cuerpo de agua: es un espejo del cielo, un corazón azul que late entre las montañas sagradas de los Andes. Su inmensidad impone, pero no intimida; abraza. Se dice que es el lago navegable más alto del mundo, y al estar allí, uno no duda de que también sea uno de los más milagrosos. Su luz cambia con el viento, sus aguas guardan los mitos de origen de los pueblos andinos, y su energía se percibe como una presencia viva, sabia, antigua.</p>
                  <p>Las comunidades que habitan sus orillas —aymaras, quechuas, urus— no solo lo respetan: lo veneran. Lo llaman “el lago madre”, pues de él emergieron, según los mitos, los fundadores del Imperio Inca. En sus islas, como la Isla del Sol y la Isla de la Luna, aún pueden verse los restos de templos milenarios dedicados al culto solar y lunar. Allí, el tiempo parece suspenderse, y el silencio tiene un sonido propio.</p>
                  <div className="py-4">
                    <hr className="border-accent" />
                  </div>
                  <h4 className="font-headline text-2xl text-accent text-center">El Lago Sagrado</h4>
                  <blockquote className="text-center italic text-gray-400">
                    <p>Bajo el cielo que respira,<br/>me abraza la inmensidad del cosmos.</p>
                    <p className="mt-4">El lago me mira con ojos de Wiracocha.<br/>Sus aguas ancestrales, espejos del cielo,<br/>me recuerdan secretos, me dan un propósito.</p>
                    <p className="mt-4">Aquí, la memoria antigua aparece otra vez.<br/>Tiwanaku e Inkas en mi ser se funden.<br/>Kay Pacha y Hanan Pacha en mí se confunden.</p>
                    <p className="mt-4">El Puma, guardián, mi espíritu guía.<br/>Aquí solo existe el eterno presente,<br/>lleno de un amor sin medida.</p>
                    <p className="mt-4">No hay ayer. No hay mañana.</p>
                    <p className="mt-4">Soy el lago.<br/>Soy el puma.<br/>Soy las estrellas.<br/>Soy todo. O el todo soy yo.<br/>Soy la nada. Y la nada soy yo.</p>
                    <p className="mt-4">Siento la revelación otra vez.<br/>Y el viento dice:<br/>“Despierta. Ya era hora.”</p>
                  </blockquote>
                  <div className="py-4">
                    <hr className="border-accent" />
                  </div>
                  <p>Fue en sus orillas, bajo ese cielo claro y profundo, donde compartí un almuerzo sencillo con un grupo de mujeres que, como el lago, han aprendido a resistir el paso del tiempo y las tormentas. En sus palabras encontré historias de lucha, silencios impuestos y una fuerza inquebrantable que me conmovió.</p>
                  <p>Me impactó especialmente saber que muchas de ellas, pese a todo lo vivido, aún no conocen plenamente sus derechos. Pero la esperanza viaja a pie, y lo hace gracias a la labor del CPMGA y sus promotoras comunitarias: mujeres que llegan a los rincones más alejados, llevando conocimiento, acompañamiento y conciencia.</p>
                  <p>Están sembrando luz, enseñando que no tienen que soportar la violencia, que tienen derecho a vivir con dignidad y libertad. Mi trabajo de documentación busca precisamente eso: amplificar sus voces, mostrar su realidad y fortalecer sus caminos.</p>
                  <p>En el Titicaca, donde la tierra se une con el cielo, comprendí que la resiliencia es más que resistencia: es memoria, es despertar, es transformación.</p>
                </div>
                <div className="grid grid-cols-1 gap-4">
                  <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl">
                    <Image src="/images/foto de mi en el lago.jpg" width={600} height={450} alt="Foto mia en el lago Titicaca" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                  </motion.div>
                  <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl">
                    <Image src="/images/fotos con promotores comunitarios en lago.jpg" width={600} height={400} alt="Fotos con promotores comunitarios en lago." className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                  </motion.div>
                </div>
              </div>
            </section>
            
            <section className="py-16 md:py-24">
              <div className="container mx-auto max-w-4xl px-4 text-lg glassmorphism">
                  <motion.div {...fadeIn} className="text-center mb-12">
                      <h2 className="font-headline text-4xl md:text-5xl text-accent">Aprendizaje y Adaptación</h2>
                      <p className="mt-2 text-muted-foreground">El camino del voluntariodo en Bolivia, aunque lleno de maravillas, también tuvo sus pruebas.</p>
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

            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 glassmorphism">
                <motion.div {...fadeIn} className="text-center mb-12">
                  <h2 className="font-headline text-4xl md:text-5xl text-accent">Mi creatividad también floreció aquí.</h2>
                </motion.div>
                <motion.div {...fadeIn} className="space-y-6 text-lg max-w-4xl mx-auto mb-12">
                  <p>Una de las experiencias más significativas que viví en La Paz fue unirme a un grupo de sikuris, guardianes de una tradición ancestral que resuena en los Andes como el eco profundo de nuestras raíces. El sonido de los sikus —instrumentos de viento comunitarios, imposibles de tocar en soledad— me enseñó una verdad poderosa: nadie suena completo si no suena con otros.</p>
                  <p>Participar con ellos en una celebración festiva fue un verdadero honor. Al soplar juntos, sentí que no solo hacíamos música: tejíamos comunidad, respirábamos al mismo ritmo, invocábamos la memoria viva de los pueblos originarios y sus territorios sagrados.</p>
                  <p>También me animé a compartir mi voz como cantautor, en diversos espacios culturales de La Paz, donde montañas como el Illimani y el Huayna Potosí parecían escucharme en silencio. En cada canción intentaba sembrar palabras que sanaran, letras inspiradas que toquen el alma y acompañen procesos de transformación interior.</p>
                  <p>Fue mi manera de contribuir desde el arte: una semilla musical ofrecida a un territorio fértil de lucha, memoria y esperanza.</p>
                </motion.div>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl">
                    <Image src="/images/yo tocando sikuri.jpg" width={600} height={400} alt="Tocando sikuris" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                  </motion.div>
                  <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl">
                    <Image src="/images/presentacion musical en la paz de mi.jpg" width={600} height={400} alt="Cantando en La Paz" className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                  </motion.div>
                  <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl">
                    <Image src="/images/yo tocando como solista en la paz.jpg" width={600} height={400} alt="Yo tocando como solista en La Paz." className="w-full h-full object-cover transition-transform duration-300 ease-in-out hover:scale-110" />
                  </motion.div>
                  <motion.div {...fadeIn} className="overflow-hidden rounded-lg shadow-xl col-span-2 md:col-span-2">
                    <video width="600" height={400} controls className="rounded-lg shadow-lg w-full h-full object-cover">
                      <source src="/images/grabacion que hice de mi ensayo de sikuri.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </motion.div>
                </div>
              </div>
            </section>

            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 text-center glassmorphism">
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
            
            <section className="py-16 md:py-24">
              <div className="container mx-auto px-4 text-center max-w-4xl glassmorphism">
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

            <section className="relative py-20 md:py-32">
              <div className="absolute inset-0">
                <Image src="/images/chica de sikuri bailando.jpg" layout="fill" objectFit="cover" alt="Chica de sikuri bailando." className="opacity-80"/>
              </div>
              <div className="relative z-10 container mx-auto px-4 text-center">
              </div>
            </section>


            <footer className="py-12 bg-gray-800 text-gray-300 font-body">
              <div className="container mx-auto text-center px-4">
                <p className="font-headline text-2xl text-white mb-2">Un legado que me llevo.</p>
                <p>Este voluntariodo ha sido un recordatorio de que la resiliencia y la apertura a la vida son claves para crecer. Bolivia, con su belleza cultural y geográfica, y el CPMGA, con su incansable trabajo, me han regalado una experiencia invaluable. Listo para la próxima aventura, con los ojos abiertos y el corazón dispuesto a seguir aprendiendo de la vida.</p>
                <p>Ya no pienso, luego existo.
Ahora siento, y por eso soy.
Porque la razón que nos impusieron olvidó el alma.
Hoy despierto desde el corazón.</p>
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
