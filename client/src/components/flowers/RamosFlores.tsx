import { cn } from "@/lib/utils";

interface FloralSeparatorProps {
  className?: string; // Para inyectar márgenes personalizados desde fuera
}

export function RamoFlores({ className }: FloralSeparatorProps) {
  return (
   <img
      src="/images/ramo-flores.png"
      alt="Decoración floral separadora"
      className={cn(
        // --- CLASES BASE ---,
        "w-[100%] md:w-[400px] lg:w-[600px]",
        "opacity-100",

        // --- CLASES VARIABLES ---
        className
      )}
    />
  );
}