import { useEffect, useState } from "react";

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

interface CountdownProps {
  targetDate: string; // ISO string format
}

export function Countdown({ targetDate }: CountdownProps) {
  const calculateTimeLeft = (): TimeLeft => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft: TimeLeft = {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState<TimeLeft>(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <div className="flex flex-col items-center mx-2 md:mx-4">
      <div className="text-3xl md:text-5xl font-serif font-bold text-primary mb-1">
        {value.toString().padStart(2, "0")}
      </div>
      <div className="text-xs md:text-sm uppercase tracking-widest text-muted-foreground">
        {label}
      </div>
    </div>
  );

  return (
    <div className="flex justify-center items-center py-8 animate-in fade-in zoom-in duration-1000 notranslate">
      <TimeUnit value={timeLeft.days} label="Días" />
      <span className="text-2xl md:text-4xl font-serif text-muted-foreground -mt-6">:</span>
      <TimeUnit value={timeLeft.hours} label="Hs" />
      <span className="text-2xl md:text-4xl font-serif text-muted-foreground -mt-6">:</span>
      <TimeUnit value={timeLeft.minutes} label="Min" />
      <span className="text-2xl md:text-4xl font-serif text-muted-foreground -mt-6">:</span>
      <TimeUnit value={timeLeft.seconds} label="Seg" />
    </div>
  );
}
