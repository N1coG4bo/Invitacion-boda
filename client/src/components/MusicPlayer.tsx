import { Pause, Play } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import { Slider } from "./ui/slider";

// Helper function to format time from seconds to MM:SS
const formatTime = (timeInSeconds: number) => {
  if (isNaN(timeInSeconds)) return "00:00";
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = Math.floor(timeInSeconds % 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
};

export function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Initialize Audio object
  useEffect(() => {
    // The path is relative to the `public` folder
    audioRef.current = new Audio('/music/cancion-boda-mp3.mp3');

    const audio = audioRef.current;

    const setAudioData = () => {
      setDuration(audio.duration);
    }

    const updateProgress = () => {
      setCurrentTime(audio.currentTime);
      setProgress((audio.currentTime / audio.duration) * 100);
    }

    // Event listeners
    audio.addEventListener('loadedmetadata', setAudioData);
    audio.addEventListener('timeupdate', updateProgress);

    // Cleanup on unmount
    return () => {
      audio.pause();
      audio.removeEventListener('loadedmetadata', setAudioData);
      audio.removeEventListener('timeupdate', updateProgress);
    }
  }, []);

  const togglePlayPause = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const handleSliderChange = (value: number[]) => {
    if (audioRef.current) {
      const newTime = (value[0] / 100) * duration;
      audioRef.current.currentTime = newTime;
      setCurrentTime(newTime);
      setProgress(value[0]);
    }
  };

  return (
      <div className="w-[60%] max-w-[250px] mx-auto bg-white/50 backdrop-blur-sm rounded-xl p-4 shadow-sm border border-primary/10">
      {/* CAMBIOS REALIZADOS:
      1. max-w-md -> max-w-[300px]: Lo hace mucho más angosto.
      2. p-6 -> p-4: Reduje el relleno interno para que no se vea desproporcionado.
      */}
            {/* Texto más pequeño */}
            <h3 className="text-center font-bold text-xs mb-2 text-foreground/80">
                ¡DALE PLAY A NUESTRA CANCIÓN!
            </h3>
            
            <div className="space-y-2">
            {/* Barra de progreso */}
            <div className="space-y-1">
                <Slider 
                value={[progress]} 
                max={100} 
                step={1} 
                className="cursor-pointer"
                onValueChange={handleSliderChange}
                />
                <div className="flex justify-between text-[10px] text-muted-foreground font-mono">
                <span>{formatTime(currentTime)}</span>
                <span>{formatTime(duration)}</span>
                </div>
            </div>

            {/* Controles */}
            <div className="flex items-center justify-center">
                <Button 
                size="icon" 
                className="w-10 h-10 rounded-full bg-primary text-primary-foreground hover:bg-primary/90 shadow-md transition-transform hover:scale-105"
                onClick={togglePlayPause}
                >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 ml-1" />}
                </Button>
            </div>
          </div>
      </div>



      
  );
}
