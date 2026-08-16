import { FloralSectionTop } from '@/components/FloralSectionTop';
import { Enredadera } from '@/components/flowers/Enredadera';
import { RamoFlores } from '@/components/flowers/RamosFlores'; // Asumo la ruta
import React from 'react';
import { useLocation } from "wouter";
import { MusicPlayer } from '@/components/MusicPlayer'; 

export default function Sobre() {
    const [, setLocation] = useLocation();

    const abrirInvitacion = () => {
        setLocation("/invitacion"); 
    };

    return (
        /* CAMBIO CLAVE:
           - Quitamos 'min-h-screen'.
           - Ponemos 'h-full flex-grow'. 
           - Esto hace que 'Sobre' llene el espacio disponible que le deja App.tsx.
        */
        <div className="w-full h-full flex-grow flex flex-col relative overflow-hidden bg-black-background">

            {/* CONTENIDO CENTRADO
               - my-auto: Intenta centrar el bloque verticalmente si sobra espacio.
               - py-8: Un padding seguro para arriba y abajo.
            */}
            <div className="relative z-10 w-full flex flex-col items-center justify-center gap-8 p-4 py-8 my-auto"> 

                {/* 1. TEXTO SUPERIOR */}
                <div className="text-center space-y-2 animate-in fade-in slide-in-from-top-8 duration-1000 delay-200 fill-mode-forwards">
                    <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-widest uppercase">
                        Tienes una
                    </p>
                    <h1 className="text-4xl md:text-6xl font-script text-foreground drop-shadow-sm">
                        Invitación Especial
                    </h1>
                    <h1 className="text-2xl md:text-4xl font-script text-foreground drop-shadow-sm">
                        Carla Pizarro & Nicolás Lagos
                    </h1>
                </div>

                {/* 2. EL SOBRE (Hacemos la imagen responsiva con max-h) */}
                <div 
                    className="relative w-full flex justify-center cursor-pointer group px-4" 
                    onClick={abrirInvitacion}
                >
                    <img
                        src="/images/sobre.webp"
                        alt="Sobre Invitación"
                        loading="eager"
                        fetchPriority="high"
                        className="
                        relative z-20 
                        w-full max-w-[400px] 
                        md:max-w-[500px]
                        object-contain drop-shadow-2xl
                        animate-in fade-in slide-in-from-bottom-24 duration-[2000ms] ease-out
                        transition-transform duration-500 ease-in-out
                        group-hover:-translate-y-4 group-hover:scale-105
                        "
                    />
                </div>

                {/* 3. TEXTO INFERIOR */}
                <div className="text-center space-y-2 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200 fill-mode-forwards">
                    <p className="text-sm md:text-base text-muted-foreground/80 animate-pulse">
                        (Toca el sobre para abrir)
                    </p>
                </div>

            </div>

        </div>
    );
}