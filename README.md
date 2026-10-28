# 💍 Invitación Especial — Boda Digital Interactiva

Una experiencia web interactiva, elegante y mobile-first diseñada para bodas modernas. Transforma la tradicional invitación de papel o PDF estático en una experiencia digital envolvente con música, sobre animado, confirmación de asistencia en tiempo real por WhatsApp y un diseño adaptativo de alta fidelidad.

---

## ⚡ ¿Qué hace y qué problema resuelve?

* **El Problema:** Las invitaciones en PDF o imágenes estáticas son difíciles de leer en celulares, no permiten agregar música ambiental, no tienen interacción y generan errores o mensajes confusos al confirmar asistencia.
* **La Solución:** Una Progressive Web Experience que guía al invitado desde la apertura de un sobre interactivo hasta una tarjeta digital completa con:
  * ✉️ **Flujo de Sobre Interactivo:** Animación inmersiva para "abrir" la invitación y reproducir música ambiental.
  * ⏱️ **Cuenta Regresiva en Tiempo Real:** Días, horas, minutos y segundos exactos para la fecha del evento.
  * 🗺️ **Itinerario & Ubicación:** Cronograma detallado de la ceremonia y fiesta con enlace directo a Google Maps.
  * 💬 **Confirmación Directa por WhatsApp (RSVP):** Enlaces directos a los teléfonos de los novios con mensajes predefinidos y emojis intactos.
  * 🎁 **Lista de Regalos:** Integración directa con plataformas de novios y notas de obsequios.
  * 👗 **Código de Vestimenta (Dress Code):** Indicaciones gráficas y recomendaciones de vestuario para los invitados.

---

## 🛠️ Stack Tecnológico & Decisiones Técnicas

| Área | Tecnología / Patrón | Justificación Técnica |
| :--- | :--- | :--- |
| **Frontend Core** | **React 19 + TypeScript** | Reactividad moderna, tipado estricto y componentes declarativos reutilizables. |
| **Bundler & Build** | **Vite 7** | Tiempos de arranque instantáneos en desarrollo (HMR ultra rápido) y builds optimizados para producción. |
| **Estilos** | **Tailwind CSS v4** | Arquitectura CSS basada en variables dinámicas del tema (`@theme inline`), paleta Terracota/Dorado/Salvia y cero CSS muerto. |
| **Animaciones** | **tw-animate-css & CSS Transforms** | Animaciones ligeras aceleradas por hardware para transiciones suaves sin penalizar el rendimiento móvil. |
| **Enrutamiento** | **Wouter** | Enrutador ultraliviano (~1.5 KB) en lugar de React Router, reduciendo drásticamente el peso del bundle inicial. |
| **Componentes UI** | **Radix UI (`shadcn/ui`)** | Primitivas accesibles sin estilos predeterminados (diálogos, botones, tooltips, acordeones). |
| **Iconografía** | **Lucide React** | Iconos SVG optimizados por tree-shaking para peso mínimo. |

### 📐 Decisiones de Arquitectura Clave

1. **Mobile-First Mockup Wrapper (Responsividad Adaptativa):**
   * Las invitaciones de boda se abren en un **95% de los casos desde teléfonos móviles**.
   * Para evitar que la vista en monitores de PC y tablets se estire de forma horizontal antiestética, se implementó un contenedor inteligente que:
     * En **celulares (`< 768px`)**: Ocupa el 100% del viewport sin márgenes, brindando una experiencia de app nativa.
     * En **Tablets y PC (`md:`, `lg:`)**: Enmarca automáticamente la invitación en formato de smartphone/tarjeta troquelada (`max-w-lg`, `rounded-[2.5rem]`, sombra profunda `shadow-2xl`) sobre un fondo degradado terracota noche (`#2a130f` → `#140806`), garantizando legibilidad y estética de lujo en cualquier pantalla.
2. **Protocolo Seguro de WhatsApp API:**
   * Se utiliza la API directa (`https://api.whatsapp.com/send`) con cadenas URL codificadas en UTF-8 en lugar del acortador estándar `wa.me`, evitando la pérdida de caracteres especiales, tildes y emojis (🤵🏻‍♂️, 👰🏻‍♀️, 💍) provocada por redirecciones intermedias de navegadores móviles.
3. **Optimización Extrema de Assets (Core Web Vitals):**
   * Gráficos y banners comprimidos en formato **WebP** de última generación.
   * Uso de directivas `fetchPriority="high"` y `loading="eager"` en los elementos críticos above-the-fold para eliminar saltos visuales (CLS = 0) y garantizar una carga instantánea.

---

## 📂 Estructura del Proyecto

```text
Invitacion-boda/
├── client/
│   ├── public/             # Assets estáticos (imágenes WebP, audio, favicon)
│   ├── src/
│   │   ├── components/     # Componentes específicos (Countdown, Timeline, MusicPlayer, etc.)
│   │   │   ├── flowers/    # Separadores y ornamentos botánicos
│   │   │   └── ui/         # Primitivas accesibles de Shadcn/Radix UI
│   │   ├── contexts/       # Estado global y temas
│   │   ├── hooks/          # Hooks personalizados (useMobile, etc.)
│   │   ├── pages/
│   │   │   ├── Sobre.tsx   # Vista de apertura interactiva con música
│   │   │   └── Home.tsx    # Invitación completa interactiva
│   │   ├── App.tsx         # Enrutamiento, fondo sincronizado y wrapper global
│   │   └── index.css       # Variables del tema y configuración Tailwind v4
├── shared/                 # Constantes y utilidades compartidas
└── vite.config.ts          # Configuración de compilación Vite y alias (@/*)
```

---

## 🚀 Cómo Ejecutarlo Localmente

### Requisitos Previos
* **Node.js**: v18.0.0 o superior (recomendado v20+)
* **Gestor de paquetes**: `pnpm` (recomendado v10+) o `npm`

### Pasos

1. **Clonar el repositorio:**
   ```bash
   git clone https://github.com/TU-USUARIO/unainvitacionespecial.git
   cd unainvitacionespecial/Invitacion-boda
   ```

2. **Instalar dependencias:**
   ```bash
   pnpm install
   # o con npm:
   # npm install
   ```

3. **Iniciar servidor de desarrollo:**
   ```bash
   pnpm dev
   ```
   Abre [http://localhost:5173](http://localhost:5173) en tu navegador.

4. **Compilar para producción:**
   ```bash
   pnpm build
   ```
   Los archivos estáticos listos para desplegar en plataformas como **Vercel**, **Netlify**, **Cloudflare Pages** o un servidor Nginx se generarán en la carpeta `dist/public`.

5. **Previsualizar la compilación de producción:**
   ```bash
   pnpm preview
   ```

---

## 🎨 Paleta de Color Principal

* 🟤 **Terracota Principal:** `#bd553b` (Fondo de la tarjeta y tono insignia)
* 🌕 **Dorado Cálido:** `oklch(0.85 0.15 85)` (Acentos, botones primarios y títulos destacados)
* 🦴 **Blanco Hueso:** `#FEF4D9` (Tipografía principal y contrastes suaves)
* 🌿 **Verde Salvia:** `#89a88e` (Detalles botánicos y florales)
* 🌌 **Terracota Noche:** `#2a130f` → `#140806` (Fondo exterior ambiental en monitores grandes)

---

## 📄 Licencia

Este proyecto está bajo la Licencia **MIT**. Siéntete libre de adaptarlo y usarlo como plantilla para tus propios eventos o celebraciones especiales.
