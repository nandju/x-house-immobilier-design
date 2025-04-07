import Image from "next/image"

export default function HeroSection() {
  return (
    <section className="relative w-full bg-white overflow-hidden px-4 py-4 sm:py-8">
      {/* Subtle background element */}
      <div className="absolute left-0 top-0 h-full w-12 sm:w-24 bg-gray-100/50 z-0"></div>

      {/* Main container */}
      <div className="container mx-auto relative z-10 flex flex-col items-center">
        {/* Large Character Image */}
        <div className="relative w-full h-[200px] sm:h-[300px] md:h-[400px] lg:h-[500px]">
          <Image
            src="/assets/images/illustrations/assistance/monsieurlha.png"
            alt="Mr. LHA Character"
            fill
            className="object-contain object-center"
            priority
          />
        </div>

        {/* Text content - closely below image */}
        <div className="text-center px-4 max-w-3xl">
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700">
            Désormais c'est <span className="text-[#E63946] font-extrabold">MOi</span>
          </p>
          <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-700 mt-1">
            qui vous assistera en cas de besoin.
          </p>
        </div>
      </div>
    </section>
  )
}
