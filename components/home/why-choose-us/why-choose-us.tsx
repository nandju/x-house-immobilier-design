import Image from "next/image"

export function WhyChooseUs() {
  return (
    <section className="w-full bg-black px-6 py-16">
      <div className="container mx-auto">
        <div className="grid gap-8 lg:grid-cols-2 lg:gap-12">
          {/* Left Content */}
          <div className="flex flex-col justify-center space-y-6 px-4 text-white lg:pr-12">
            <h2 className="text-4xl font-bold leading-tight tracking-tighter md:text-5xl">Pourquoi nous choisir ?</h2>

            <div className="space-y-4 text-white/90">
              <p>
                Parce que la Côte d&apos;Ivoire connaît un engouement et une effervescence immobilière incroyable, une
                demande toujours grandissante : vous proposer les meilleurs biens disponibles sur le marché
                s&apos;inscrit dans notre démarche.
              </p>

              <p>
                Notre éthique est une approche qualitative, esthétique et attentive du bien, afin de vous le proposer au
                prix juste.
              </p>

              <p>
                Chez LHA le client passe avant l&apos;agence, nous avons développé une véritable approche conseil, basée
                sur une expertise aussi bien sur le plan administratif, juridique, que comptable et financier.
              </p>

              <p>
                Particuliers, professionnels, institutionnels, notre équipe s&apos;engage à vous fournir transparence et
                confidentialité avant, pendant et après votre projet.
              </p>
            </div>

            <div className="pt-6">
              <div className="h-px w-full bg-white/20" />
              <div className="pt-6 text-lg font-semibold uppercase tracking-wider">
                <p>Notre philosophie s&apos;applique à tous nos clients.</p>
                <p>Notre fierté : votre satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative h-[400px] overflow-hidden rounded-3xl md:h-[500px] lg:h-auto">
            <Image
              src="/assets/images/illustrations/page-accueil/choose.png"
              alt="Luxury villa with pool and modern architecture"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

