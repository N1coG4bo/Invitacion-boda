import { Countdown } from "@/components/Countdown";
import { FloralSection } from "@/components/FloralSection";
import { FloralSectionTop } from "@/components/FloralSectionTop";
import { MusicPlayer } from "@/components/MusicPlayer";
import { Timeline } from "@/components/Timeline";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { FloralSeparator } from "@/components/flowers/FloralSeparator";
import { Hojas } from "@/components/flowers/Hojas";
import { Camera, Utensils, Wine, Cake, Car, Music, Heart, MapPin, Gift, Shirt, CheckCircle2, MessageCircle, Clock, BookHeart, Users, SmilePlus, Soup  } from "lucide-react";
export default function Home() {
  const weddingDate = "2026-05-29T18:00:00";

  const timelineEvents = [
    { time: "5:00 PM", title: "Llegada de\ninvitados", icon: Users }, // Icono genérico, idealmente anillos
    { time: "5:45 PM", title: "Ceremonia", icon: BookHeart  },
    { time: "6:15 PM", title: "Cocktail", icon: Utensils },
    { time: "7:00 PM", title: "Brindis", icon: Clock },
    { time: "7:30 PM", title: "Vals", icon: Heart },
    { time: "8:40 PM", title: "Fiesta", icon: Music },
    { time: "10:20 PM", title: "Cierre", icon: Car},

  ];

  // --- SOLUCIÓN FINAL: API DIRECTA + ASCII ---
  // 1. Usamos 'api.whatsapp.com' en lugar de 'wa.me' para evitar redirecciones que rompen emojis.
  // 2. El texto es 100% código seguro. No hay tildes ni emojis visuales aquí.

  // MENSAJE NICO: "¡Hola Nico! Confirmo mi asistencia a su matrimonio. ¡Nos vemos allá! 💍🤵🏻‍♂️🎉"
  // Nota: Usamos tus números reales que venían en el código anterior.
  const linkNico = "https://api.whatsapp.com/send?phone=56950781737&text=%C2%A1Hola%20Nico!%20Confirmo%20mi%20asistencia%20a%20su%20matrimonio.%20%C2%A1Nos%20vemos%20all%C3%A1!%20%F0%9F%92%8D%F0%9F%A4%B5%F0%9F%8F%BB%E2%80%8D%E2%99%82%EF%B8%8F%F0%9F%8E%89";

  // MENSAJE CARLI: "¡Hola Carli! Confirmo mi asistencia a su matrimonio. ¡Qué emoción! 💍👰🏻‍♀️🥂"
  const linkCarli = "https://api.whatsapp.com/send?phone=56965294656&text=%C2%A1Hola%20Carli!%20Confirmo%20mi%20asistencia%20a%20su%20matrimonio.%20%C2%A1Qu%C3%A9%20emoci%C3%B3n!%20%F0%9F%92%8D%F0%9F%91%B0%F0%9F%8F%BB%E2%80%8D%E2%99%80%EF%B8%8F%F0%9F%A5%82";


  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      {/* Hero Section */}
      <FloralSectionTop className="relative delay-4000">

        {/* Contenedor Flexible */}
        <div className="flex flex-col items-center justify-center w-full md:w-full  relative z-10 delay-4000">

          {/* FOTO CORAZÓN */}
          <div className="relative w-full flex justify-center">
            <img
              src="/images/marco-corazon-nico-carli.webp"
              alt="Nicolás y Carli bajo el arco floral"
              loading="eager"        // ¡Carga inmediata!
              fetchPriority="high"   // Prioridad alta sobre otras cosas (como la playlist)
              className="
              /* 1. Posición y Tamaño (Tus clases base) */
              relative z-20 translate-x-[2%]
              w-[140%] max-w-[500px] md:w-[500px] lg:max-w-[700px] 
              object-contain
              pointer-events-none select-none

              /* 2. EFECTO SPRAY (Aparición) 💨 */
              animate-in 
              fade-in 
              zoom-in-75       /* Empieza al 75% del tamaño y crece */
              duration-[3000ms] /* Tarda 3 segundos (más lento es más elegante) */
              ease-out          /* Frena al final */
              
              /* 3. Opacidad Final */
              opacity-90 
            "
            />
          </div>

         {/* TEXTO */}
          <div className="space-y-2 text-center relative z-30 -mt-12 md:-mt-24">
            
            {/* 1. SUBTÍTULO: Entrada suave y rápida */}
            <h2
              style={{ animationFillMode: 'both' }} /* <--- ¡ESTA ES LA CURITA MÁGICA! 🩹 */ 
              className="
              text-[30px] md:text-3xl font-script text-foreground drop-shadow-md
              
              /* ANIMACIÓN */
              animate-in 
              fade-in 
              slide-in-from-bottom-4 /* Sube un poquito (16px) */
              duration-2000          /* Tarda 2 segundos */
              delay-1000              /* Empieza después de 2 segundos (justo cuando termina la foto) */
              ease-out
            ">
              Te invitamos a nuestra boda!
            </h2>
            
            {/* 2. NOMBRES: Entrada con retraso (Delay) para el efecto escalonado */}
            <h1
              style={{ animationFillMode: 'both' }} /* <--- ¡ESTA ES LA CURITA MÁGICA! 🩹 */
              className="
              text-[50px] md:text-7xl font-script text-foreground drop-shadow-lg leading-tight
              
              /* ANIMACIÓN */
              animate-in 
              fade-in 
              slide-in-from-bottom-8 /* Sube más recorrido (32px) para dar imponencia */
              zoom-in-95
              duration-2000 
              delay-1000              /* ESPERA 0.6s antes de empezar (Clave del efecto) */
              ease-out
            ">
              Carli & Nicolás!
            </h1>
            
          </div>
          {/* --- 3. TU NUEVO COMPONENTE --- 
              Aquí solo ajustas el margen específico para esta pantalla.
              Si en el futuro lo usas en el footer, le pasas otro margen y listo.
          */}
          <FloralSeparator className="-mt-4 md:-mt-8 mt-5" />


        </div>

      </FloralSectionTop>


      {/* =========================================================
          SECCIÓN: REPRODUCTOR Y FECHA
          (Estrategia: Diseño Móvil Centrado -> Escalado para Notebook)
      ========================================================= */}

      <div className="flex flex-col items-center justify-start w-full relative z-10 
        mt-1      /* Celular: Margen estándar */
        md:mt-20   /* Notebook: MUCHO más aire para elegancia */
        delay-2000
        ">

        {/* Contenedor Principal: Siempre centrado, nunca en columnas laterales */}
        <div className="space-y-8 w-full max-w-lg md:max-w-2xl mx-auto z-10 flex flex-col items-center">
        

          {/* TEXTO DE INVITACIÓN */}
          <div className="space-y-4 mt-8 w-full text-center px-4">
            <p className="text-lg md:text-2xl text-muted-foreground font-light tracking-wide">
              Te invitamos a celebrar nuestro matrimonio el día
            </p>

            {/* BLOQUE DE FECHA */}
            <div className="flex flex-col items-center">

              {/* CAJA DE FECHA: Más grande en PC */}
              <div className="
                flex items-center gap-4 md:gap-12 
                border-y border-primary/30 
                py-4 px-8       /* Celular */
                md:py-8 md:px-16 /* Notebook: Más 'gordo' y espacioso */
                backdrop-blur-sm
              ">
                <span className="text-sm md:text-xl uppercase tracking-widest">Viernes</span>
                
                {/* El número 29 gigante */}
                <span className="text-6xl md:text-8xl font-serif font-bold text-primary">
                  29
                </span>
                
                <span className="text-sm md:text-xl uppercase tracking-widest">17:00 Hrs</span>
              </div>

              <span className="text-sm mb-10 md:text-base uppercase tracking-[0.3em] text-muted-foreground mt-3">
                Mayo 2026
              </span>
            </div>
          </div>
        </div>

        {/* Separador inferior ajustado */}
        <FloralSeparator className="-mt-4 md:-mt-8" />

      </div>


      {/* Cuenta Regresiva */}
      <div className="flex flex-col items-center justify-center w-full relative z-10 mt-10 md:mt-0">
        <h2 className="text-4xl md:text-5xl font-serif text-foreground">Faltan</h2>
        <Countdown targetDate={weddingDate} />
        <FloralSeparator className="-mt-4 md:-mt-8" />
      </div>

     {/* Ubicación */}
      <div className="space-y-16 text-center max-w-2xl mx-auto flex flex-col items-center justify-center w-full relative z-10 mt-10 md:mt-0">
        
        {/* Recepción */}
        <div className="space-y-4 animate-in slide-in-from-bottom-8 duration-700 delay-100">
          <h2 className="text-5xl font-script text-foreground">Recepción & Fiesta</h2>
          <div className="space-y-1">
            <p className="text-lg font-medium">Iglesia de Jesucristo de los Santos de lo Últimos Días</p> {/* Ejemplo */}
            <p className="text-muted-foreground ">Domingo Tocornal 899, 8167379 Puente Alto, Región Metropolitana</p>
          </div>
          
          {/* ENLACE A GOOGLE MAPS PARA LA RECEPCIÓN */}
          <a 
            href="https://maps.app.goo.gl/Vdwexg6dK7dyf6G49" // <--- PEGA AQUÍ EL LINK DE LA IGLESIA
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-block" // Para que no rompa el diseño flex
          >
            <Button className="mt-4 bg-[#D4C4A8] hover:bg-[#C4B498] text-white rounded-full px-8 tracking-widest uppercase text-xs font-bold shadow-md transition-all hover:shadow-lg">
              <MapPin className="w-4 h-4 mr-2" />
              Ver Mapa
            </Button>
          </a>
        </div>
        
  
  <FloralSeparator className="-mt-4 md:-mt-8" />
</div>




      {/* Itinerario */}
      <div className="relative whitespace-nowrap">
        <h2 className="text-4xl font-serif text-center mb-12 mt-5">Itinerario</h2>
        <Timeline events={timelineEvents} />
        <div className="flex flex-col items-center justify-center w-full relative z-10 mt-10 md:mt-0">
          <FloralSeparator className="-mt-4 md:-mt-8" />
        </div>
      </div>

      {/* Confirmación */}
      <div className="text-center max-w-2xl mx-auto space-y-8 flex flex-col items-center justify-center w-full relative z-10 mt-10 md:mt-0">
        <h2 className="text-5xl font-script mb-4">Confirmación de asistencia</h2>
        <p className="text-lg text-muted-foreground leading-relaxed px-3 text-justify">
          Tu presencia es muy importante. Confirma tu asistencia enviándonos un mensaje directo por WhatsApp a cualquiera de los dos.
        </p>

        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mt-6">

          {/* Botón 1: Confirmar con Nicolás */}
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto">
            <a
              href={linkNico} // <--- Aquí usamos la variable segura
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-base font-bold tracking-wide"
            >
              <MessageCircle className="w-6 h-6" />
              Confirmar con Nicolás
            </a>
          </Button>

          {/* Botón 2: Confirmar con Carli */}
          <Button asChild size="lg" className="bg-[#25D366] hover:bg-[#128C7E] text-white rounded-full px-8 py-6 shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 w-full md:w-auto">
            <a
              href={linkCarli} // <--- Aquí usamos la variable segura
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 text-base font-bold tracking-wide"
            >
              <MessageCircle className="w-6 h-6" />
              Confirmar con Carli
            </a>
          </Button>


        <div className="flex justify-center mt-10">
          <img src="/images/children-icon.webp" alt="Dress Code" className="w-[30%] h-auto" />
        </div>

        <p className="text-lg text-muted-foreground leading-relaxed px-3 text-center">
          Queremos contarles que nuestro matrimonio será una celebración pensada para adultos, por lo que no habrá asistencia de niños. Esperamos con mucho cariño que puedan acompañarnos y disfrutar este momento con nosotros
        </p>




        </div>
        <FloralSeparator className="-mt-4 md:-mt-8" />
      </div>

      {/* Dress Code */}
      <div className="text-center max-w-xl mx-auto space-y-6 flex flex-col items-center justify-center w-full relative z-10 mt-10 md:mt-0">
        <h2 className="text-5xl font-script mb-8">Dress code</h2>
        <div className="flex justify-center mb-6">
          <img src="/images/dress-code-boda-definitive.webp" alt="Dress Code" className="w-[30%] h-auto" />
        </div>
        <p className="text-lg text-muted-foreground px-3 text-justify">
          Se reserva el blanco para la novia. Invitamos a los caballeros y a las damas a usar ropa formal, recordando que al cierre de nuestra celebración habrá una fiesta para que consideren su comodidad.
        </p>
        <FloralSeparator className="-mt-4 md:-mt-8" />

      </div>

      {/* Regalo */}
      <div className="text-center max-w-xl mx-auto space-y-8 flex flex-col items-center justify-center w-full relative z-10 mt-10 md:mt-0">
        <h2 className="text-5xl font-script">Regalo</h2>
        <p className="text-lg text-muted-foreground leading-relaxed text-justify px-3">
          Tu presencia en nuestro día especial es el mejor regalo que podríamos pedir. Sin embargo, si deseas hacernos un obsequio*, tenemos estas listas de novios disponibles
        </p>

{/* --- INICIO BLOQUE REGALOS (TÉCNICA WHATSAPP) --- */}
        <div className="w-full flex flex-col items-center mt-8 animate-in fade-in slide-in-from-bottom-4 duration-1000">
          

          {/* CONTENEDOR PADRE (IGUAL QUE WHATSAPP) 
              Usamos 'flex-col' para que queden uno abajo del otro.
              Si los quisieras lado a lado en PC, cambiarías a 'md:flex-row'.
          */}
          <div className="flex flex-col gap-4 justify-center items-center w-full">

            {/* BOTÓN 1: MI LISTA DE NOVIOS */}
            <a
              href="https://milistadenovios.cl/enviar-regalo?id=34089"
              target="_blank"
              rel="noopener noreferrer"
              /* CLASES CLAVE:
                 1. 'flex justify-center': Convierte el link en una caja que centra lo que tiene dentro.
                 2. 'w-full md:w-auto': En celular ocupa todo el ancho, en PC solo lo necesario.
              */
              className="flex justify-center max-w-[500px] md:w-auto transition-transform hover:scale-105 hover:-translate-y-1"
            >
              <img 
                src="/images/btn-milistadenovios-squoosh.webp" 
                alt="Botón Ver Lista de Novios"
                className="w-[90%] h-auto object-contain drop-shadow-lg cursor-pointer"
              />
            </a>
            
          </div>
        </div>
        {/* --- FIN BLOQUE REGALOS --- */}
          <p className="px-3 text-center">
            *Si no sabes cómo regalar en la lista de novios o quieres hacernos otro tipo de obsequio, envíanos un mensaje y te ayudaremos con mucho gusto.
          </p>
        <FloralSeparator className="-mt-4 md:-mt-8" />

      </div>

      {/* Footer */}
      <footer className="py-12 text-center text-muted-foreground text-sm">
        <p className="font-serif italic">Con amor, Carli & Nicolás</p>
        <p className="mt-2 text-xs opacity-50">29 . 05 . 2026</p>
      </footer>
    </div>
  );
}
