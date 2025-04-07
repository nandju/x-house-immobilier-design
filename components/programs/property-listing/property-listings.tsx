import Image from "next/image"

export default function PropertyListings() {
  return (
    <div className="max-w-5xl mx-auto px-4 py-8 bg-white">
      <h1 className="text-center text-black font-medium text-xl mb-6">Programmes immobiliers</h1>

      {/* First Property */}
      <div className="mb-6 rounded-3xl overflow-hidden">
        <div className="relative">
          <Image
            src="/assets/images/illustrations/programs/rivera-stella.png"
            alt="La cité Riviera STELLA"
            width={1000}
            height={500}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
            <p className="text-white text-sm font-medium">SONGON KASSEMBLE</p>
            <h2 className="text-white text-2xl font-bold">La cité Riviera STELLA</h2>
          </div>
        </div>

        <div className="flex mt-4">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-700 text-2xl font-bold">1</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Situé dans un quartier chic et en plein essor d'Abidjan, ce programme immobilier se distingue par son
            architecture élégante et ses finitions haut de gamme. Conçu pour répondre aux besoins et aspirations, le
            projet Résidences Riviera offre un cadre de vie idéal.
          </p>
        </div>
      </div>

      {/* Second Property */}
      <div className="mb-6 rounded-3xl overflow-hidden">
        <div className="relative">
          <Image
            src="/assets/images/illustrations/programs/cocody-danga.png"
            alt="PROGRAMME NEUF - LEWA COCODY DANGA"
            width={1000}
            height={500}
            className="w-full h-[300px] object-cover"
          />
          <div className="absolute bottom-0 left-0 p-6 bg-gradient-to-t from-black/70 to-transparent w-full">
            <p className="text-white text-sm font-medium">BUREAU ABIDJAN</p>
            <h2 className="text-white text-2xl font-bold">PROGRAMME NEUF - LEWA</h2>
            <h2 className="text-white text-2xl font-bold">COCODY DANGA</h2>
          </div>
        </div>

        <div className="flex mt-4">
          <div className="flex-shrink-0 mr-4">
            <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
              <span className="text-gray-700 text-2xl font-bold">2</span>
            </div>
          </div>
          <p className="text-gray-700 text-sm">
            Situé dans un quartier chic et en plein essor d'Abidjan, ce programme immobilier se distingue par son
            architecture élégante et ses finitions haut de gamme. Conçu pour répondre aux besoins et aspirations, le
            projet Résidences Riviera offre un cadre de vie idéal.
          </p>
        </div>
      </div>
    </div>
  )
}

