import { cn } from "@/lib/utils";

interface HojasProps {
  src?: string;        // Hacemos opcional por si quieres dejar una por defecto
  className?: string; 
}

export function Hojas({ src, className }: HojasProps) {
  return (
    <img
      // CORRECCIÓN: Usamos la variable 'src'. Si no le pasas nada, usa la de las hojas por defecto.
      src={src || "/images/hoja-otoniales-linea-canva-webp-2.png"}
      alt="Decoración floral lateral"
      className={cn(
        // --- 1. COMPORTAMIENTO (Flotante y Fantasma) ---
        "absolute", 
        "pointer-events-none select-none", 
        "z-0",
        "opacity-50",

        // --- 2. POSICIÓN (LA MAGIA AQUÍ) ---
        "left-0",               // Pegado al borde izquierdo (o usa left-4 si quieres margen)
        "top-1/2",              // Baja el borde superior al 50% de la pantalla
        "-translate-y-1/2",     // Sube la imagen la mitad de su altura para centrarla PERFECTO

        // --- 3. TAMAÑO RESPONSIVO ---
        "w-32 md:w-48 lg:w-64", 
        
        // --- 4. CLASES PERSONALIZADAS ---
        className 
      )}
    />
  );
}