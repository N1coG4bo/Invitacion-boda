import { cn } from "@/lib/utils";
import { ReactNode } from "react";

interface FloralSectionProps {
  children: ReactNode;
  className?: string;
  withDivider?: boolean;
}

export function FloralSection({ children, className, withDivider = false }: FloralSectionProps) {
  return (
    <section className={cn("relative py-5 md:py-24 overflow-hidden min-h-[700px]", className)}>


      {/* --- Separador --- */}
      <img
        src="/images/separador-flores.webp" 
        alt="Decoración floral de los bordes"
        // EXPLICACIÓN DE CLASES CLAVE:
        // absolute top-0 right-0: Posición fija en la esquina superior derecha.
        // w-2/3 md:w-5/12: Tamaño relativo. 2/3 del ancho en celular, un poco menos de la mitad en PC.
        // rotate-45: La rotación solicitada.
        // translate-x-[20%] -translate-y-[35%]: Estos valores "empujan" la imagen hacia afuera.
        // Juega con estos porcentajes si quieres que se meta más o menos en la pantalla.
        className="
    absolute 
    z-20
    
    /* 1. EL TAMAÑO (Contrólalo aquí sin miedo) */
    w-[300px] md:w-[400px] lg:w-[600px] max-w-none

    /* 2. LA POSICIÓN (Usa píxeles exactos desde la esquina) */
    /* top-[-50px]: La sube 50px hacia afuera del techo */
    /* right-[-20px]: La mueve 20px hacia la derecha afuera de la pantalla */
    bottom-[-62px] 
    left-1/2 -translate-x-1/2

    /* 3. LA ROTACIÓN */
    rotate-[0deg] 
    
    /* 4. UTILIDADES */
    opacity-40 pointer-events-none select-none
  "
      />

   

      <div className="container relative z-10">
        {children}
      </div>

      {withDivider && (
        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-full max-w-md">
          <img src="/images/floral-divider.webp" alt="Divider" className="w-full opacity-60" />
        </div>
      )}
    </section>
  );


}
