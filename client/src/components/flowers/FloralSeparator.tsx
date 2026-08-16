import { cn } from "@/lib/utils";

interface FloralSeparatorProps {
  className?: string; // Para inyectar márgenes personalizados desde fuera
}

export function FloralSeparator({ className }: FloralSeparatorProps) {
  return (
   <img
      src="/images/separador-flores.webp"
      alt="Decoración floral separadora"
      className={cn(
        // --- CLASES BASE ---
        "relative z-20 pointer-events-none select-none",
        "w-[100%] md:w-[400px] lg:w-[600px]",
        "opacity-60",

        // --- CLASES VARIABLES ---
        className
      )}
    />
  );
}