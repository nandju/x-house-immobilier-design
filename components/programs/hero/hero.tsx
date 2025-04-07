import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="w-full bg-black text-white pt-20 scroll-mt-24">
  {/* Images container */}
  <div className="container mx-auto px-4 sm:px-6 lg:px-8 mb-12">
    <div className="rounded-3xl overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/assets/images/illustrations/programs/bonsai.png"
            alt="Luxury home with infinity pool at sunset"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative h-[300px] md:h-[400px]">
          <Image
            src="/assets/images/illustrations/programs/hero-right.png"
            alt="Modern luxury home with swimming pool"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </div>
  </div>

  <div className="container px-4 sm:px-6 lg:px-8 pb-24">
  <div className="max-w-4xl flex flex-col mx-auto">
    
    {/* Centrés */}
    <p className="text-lg text-center mb-4">Programmes</p>

    <h1 className="text-5xl md:text-6xl text-center lg:text-7xl font-bold mb-12 bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
      Nous répondons aux problèmes de logements
    </h1>
    
    {/* Aligné à gauche */}
    <div className="max-w-3xl mx-auto relative text-left">
      <p className="text-lg md:text-xl text-gray-300 relative right-0 lg:right-1/4">
        Découvrez nos programmes immobiliers conçus pour répondre aux attentes des investisseurs et des particuliers
        en quête d'excellence. Que vous recherchiez un appartement moderne, une villa de prestige ou un espace
        commercial stratégiquement situé, nous avons des solutions adaptées à vos besoins.
      </p>
    </div>

  </div>
</div>

</section>

  )
}

