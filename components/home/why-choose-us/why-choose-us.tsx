import Image from "next/image"

export function WhyChooseUs() {
  return (
    <section className="w-full bg-black px-6 py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 px-4 text-white lg:pr-12">
            <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl">Qui sommes-nous ?</h2>

            <div className="space-y-4 text-white/90">
              <p>
                X-HOUSE IMMOBILIER est une entreprise ivoirienne engagée dans l'amélioration de l'accès au logement pour tous. Nous croyons en un habitat digne, accessible et durable, adapté aux réalités économiques et sociales de notre pays.
              </p>

              <p>
                Notre mission est de concevoir, promouvoir et livrer des projets immobiliers innovants et abordables, tout en respectant les normes de qualité, de sécurité et d'esthétique.
              </p>

              <p>
                Forts d'une équipe pluridisciplinaire et expérimentée, nous accompagnons nos clients à chaque étape de leur projet immobilier : de la recherche du bien idéal jusqu’à la livraison finale.
              </p>

              <p>
                Notre vision repose sur la transparence, l’écoute, la proximité et l’excellence. Nous plaçons l’humain au cœur de nos préoccupations pour bâtir ensemble les logements de demain.
              </p>
            </div>

            <div className="pt-6">
              <div className="h-px w-full bg-white/20" />
              <div className="pt-6 text-lg font-semibold uppercase tracking-wider">
                <p>Notre engagement : des logements accessibles et de qualité.</p>
                <p>Notre fierté : contribuer à améliorer la vie des Ivoiriens.</p>
              </div>
            </div>
          </div>

          {/* Right Video */}
          <div className="relative h-[400px] overflow-hidden rounded-3xl md:h-[500px] lg:h-auto">
            <video
              className="h-full w-full object-cover rounded-3xl"
              autoPlay
              loop
              muted
              playsInline
              src="/assets/video/mediaplayer.mp4" // Remplace ceci par ton URL
            />
          </div>
        </div>
      </div>
    </section>
  )
}
