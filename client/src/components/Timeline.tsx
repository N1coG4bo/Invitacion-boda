import { LucideIcon } from "lucide-react";

interface TimelineEvent {
  time: string;
  title: string;
  icon: LucideIcon;
}

interface TimelineProps {
  events: TimelineEvent[];
}

export function Timeline({ events }: TimelineProps) {
  return (
    <div className="relative max-w-2xl mx-auto py-12 px-4">
      {/* Línea central */}
      <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-px bg-primary/30 top-0 bottom-0" />

      <div className="space-y-12">
        {events.map((event, index) => {
          const isLeft = index % 2 === 0;
          const Icon = event.icon;

          return (
            <div key={index} className={`relative flex items-center ${isLeft ? 'justify-end' : 'justify-start'}`}>
              {/* Punto en la línea */}
              <div className="absolute left-1/2 transform -translate-x-1/2 w-3 h-3 bg-primary rounded-full border-2 border-background z-10" />
              
              {/* Contenido */}
              <div className={`w-5/12 ${isLeft ? 'text-right pr-8' : 'text-left pl-8 order-last'}`}>
                <div className="flex flex-col gap-1 group hover:scale-105 transition-transform duration-300">
                  <div className={`flex items-center gap-2 text-primary mb-1 ${isLeft ? 'justify-end flex-row-reverse' : 'justify-start'}`}>
                    <Icon className="w-5 h-5" />
                    <span className="font-bold font-serif text-lg whitespace-nowrap">{event.time}</span>
                  </div>
                  <h3 className="text-sm uppercase tracking-widest text-muted-foreground font-medium whitespace-pre-line">
                    {event.title}
                  </h3>
                </div>
              </div>
              
              {/* Espacio vacío para el otro lado */}
              <div className="w-5/12" />
            </div>
          );
        })}
      </div>
    </div>
  );
}
