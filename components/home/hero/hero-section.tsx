import Image from "next/image";
import { Button } from "@/components/ui/button";

export function HeroSection() {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden">
      {/* Image de fond */}
      <div className="absolute inset-0">
        <Image
          src="/assets/images/backgrounds/hero.png"
          alt="Luxury living room with modern furniture and large windows overlooking greenery"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Overlay sombre pour améliorer la lisibilité */}
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Contenu du Hero */}
      <div className="relative z-10 flex h-full w-full flex-col items-center justify-end pb-16 text-center text-white">
        <h1 className="max-w-4xl px-4 text-4xl font-bold leading-tight tracking-tighter md:text-5xl lg:text-6xl">
          L&apos;immobilier en Afrique, autrement.
        </h1>
      </div>
    </section>
  );
}
