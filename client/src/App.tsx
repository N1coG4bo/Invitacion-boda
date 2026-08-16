import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/NotFound";
import { Route, Switch, useLocation } from "wouter";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import { MusicPlayer } from "./components/MusicPlayer";
import { useEffect } from "react";


function Router() {
  return (
    <Switch>
      <Route path={"/"} component={Sobre} />
      <Route path={"/invitacion"} component={Home} />
      {/* Fallback route */}
      <Route path={"/404"} component={NotFound} />
      {/* Final fallback route */}
      <Route component={NotFound} />
    </Switch>
  );
}

// NOTE: About Theme
// - First choose a default theme according to your design style (dark or light bg), than change color palette in index.css
//   to keep consistent foreground/background color across components
// - If you want to make theme switchable, pass `switchable` ThemeProvider and use `useTheme` hook






function App() {
  const [location] = useLocation();
  const isPlayerVisible = location === "/";
  const isHome = location === "/invitacion";

  // EFECTO: Cambia el color del navegador (barras del celular) según la página
  useEffect(() => {
    if (isHome) {
      document.body.classList.remove("bg-black-background");
      document.body.classList.add("bg-background"); // Terracota
    } else {
      document.body.classList.remove("bg-background");
      document.body.classList.add("bg-black-background"); // Negro
    }
  }, [isHome]);

  return (
    <ErrorBoundary>
      <ThemeProvider defaultTheme="light">
        <TooltipProvider>
          <Toaster />

          {/* CAMBIO CLAVE 1: min-h-[100dvh]
            Esto asegura que en celulares la altura sea real, descontando la barra de navegación.
            
            CAMBIO DINÁMICO: El fondo del contenedor también cambia para evitar bordes blancos al hacer scroll.
          */}
          <div className={`min-h-[100dvh] flex flex-col relative ${isHome ? "bg-background" : "bg-black-background"}`}>
            
            {/* CAMBIO CLAVE 2: flex-1
               Este contenedor crecerá todo lo que pueda, empujando el reproductor hacia abajo
               si hay espacio vacío.
            */}
            <main className="flex-1 w-full flex flex-col">
              <Router />
            </main>

            {/* REPRODUCTOR (Footer) */}
            <div 
              className={`
                w-full flex justify-center py-6 z-50 shrink-0
                transition-all duration-500
                ${isPlayerVisible ? "block opacity-100" : "hidden opacity-0"}
              `}
            >
               <MusicPlayer />
            </div>

          </div>

        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
