import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloralSectionProps {
  children: ReactNode;
  className?: string;
  withDivider?: boolean;
}

export function FloralSectionTop({ children, className, withDivider = false }: FloralSectionProps) {
  return (
    <section className={cn(
// 1. ESTRUCTURA:
      // min-h-[85dvh]: Ocupa el 85% de la pantalla del celular SIEMPRE.
      // Esto empuja la playlist hacia abajo inmediatamente.
"relative pt-32 md:pt-40 pb-10 overflow-hidden flex flex-col justify-center min-h-[92dvh]",    )}>


  <img
  src="/images/banner-25-01-canva.webp"
  alt="Decoración floral superior"
  className="
    /* ==============================================
       📱 1. MÓVIL (TU VERSIÓN SAGRADA)
       ============================================== */
    absolute z-20
    top-[-3px] 
    left-1/2 -translate-x-1/2
    w-[395px] max-w-none

    /* ==============================================
       💻 2. NOTEBOOK / PC (LA 'ESTRATEGIA CELULAR')
       ============================================== */
    /* 1. Lo volvemos 'absolute' para que NO empuje el contenido (igual que en móvil) */
    md:absolute
    
    /* 2. Lo pegamos al techo, ajustando un poco para que respire */
    md:top-[-20px] 
    md:left-1/2 md:-translate-x-1/2
    
    /* 3. DIMENSIONES CONTROLADAS (Art Direction) */
    /* En vez de w-full (que estira infinito), le damos un ancho 'lógico' para notebook */
    md:w-full 
    md:max-w-[1200px]   /* Tope máximo para que no se vea gigante en pantallas anchas */
    md:h-[500px]        /* Altura fija para encuadrar bien las flores */
    md:object-cover     /* Recorte inteligente si sobra espacio */

    /* 4. Limpieza: Eliminamos márgenes negativos y escalas raras */
    md:m-0 
    md:scale-100

    /* ==============================================
       ✨ ANIMACIONES Y PROPIEDADES COMUNES
       ============================================== */
    opacity-100 pointer-events-none select-none
    animate-in 
    slide-in-from-top-10
    fade-in
    duration-[3000ms]
    ease-out
  "
  loading="eager"
  fetchPriority="high"
/>


      <div className="container relative z-10">
        {children}
      </div>

      {withDivider && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
          <img src="/images/floral-divider.png" alt="Divider" className="w-full opacity-60" />
        </div>
      )}
    </section>
  );


}
