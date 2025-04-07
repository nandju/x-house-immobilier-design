import Image from "next/image"

export default function InvestmentGuide() {
  return (
    <div className="max-w-6xl mx-auto px-6 py-12 bg-white">
      {/* Main Heading */}
      <div className="mb-8">
        <h1 className="text-4xl md:text-5xl font-bold text-black leading-tight mb-2">
          Investissez intelligemment,
          <br />
          faites fructifier votre patrimoine
        </h1>
        <p className="text-gray-600 text-sm">
          Saisissez les opportunités de l&apos;immobilier et regardez vos investissements prospérer
        </p>
      </div>

      {/* Steps Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">
        {/* Step 1 */}
        <div className="flex gap-6">
          <div className="w-36 h-36 flex-shrink-0">
            <Image
              src="/assets/images/illustrations/programs/house-1.png"
              alt="Modern house"
              width={144}
              height={144}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-600 mb-4">
              Avant de vous lancer, il est essentiel de définir clairement vos objectifs. Une analyse approfondie de
              votre projet vous permettra d&apos;orienter vos choix stratégiques.
            </p>
            <div className="mt-auto">
              <span className="text-gray-400 text-2xl font-light">1</span>
            </div>
          </div>
        </div>

        {/* Step 2 */}
        <div className="flex gap-6">
          <div className="w-36 h-36 flex-shrink-0">
            <Image
              src="/assets/images/illustrations/programs/house-2.png"
              alt="Modern house at night"
              width={144}
              height={144}
              className="rounded-lg w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <p className="text-sm text-gray-600 mb-4">
              L&apos;emplacement est un facteur clé dans la réussite de votre investissement. Pour garantir une bonne
              valorisation de votre bien.
            </p>
            <div className="mt-auto">
              <span className="text-gray-400 text-2xl font-light">2</span>
            </div>
          </div>
        </div>

        {/* Step 3 Title */}
        <div className="md:col-span-2 mt-8">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <span className="text-black font-medium">1</span>
            </div>
            <h2 className="text-black font-medium">Définir son projet et ses objectifs</h2>
            <div className="flex-grow border-t border-gray-300 ml-4"></div>
          </div>
        </div>

        {/* Step 4 Title */}
        <div className="md:col-span-2">
          <div className="flex items-center">
            <div className="flex-shrink-0 mr-4">
              <span className="text-black font-medium">2</span>
            </div>
            <h2 className="text-black font-medium">Choisir le bon bien et son emplacement</h2>
            <div className="flex-grow border-t border-gray-300 ml-4"></div>
          </div>
        </div>

        {/* Step 3 */}
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-4">
              <span className="text-black font-medium">3</span>
            </div>
            <h2 className="text-black font-medium">Financer et sécuriser son investissement</h2>
            <div className="flex-grow border-t border-gray-300 ml-4"></div>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="flex-grow"></div>
            <div className="w-36 h-36 flex-shrink-0">
              <Image
                src="/assets/images/illustrations/programs/house-3.png"
                alt="Jar with coins"
                width={144}
                height={144}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col max-w-xs">
              <p className="text-sm text-gray-600 mb-4">
                Une fois le bien sélectionné, il faut s&apos;assurer du bon financement
              </p>
              <div className="mt-auto">
                <span className="text-gray-400 text-2xl font-light">3</span>
              </div>
            </div>
          </div>
        </div>

        {/* Step 4 */}
        <div className="flex flex-col">
          <div className="flex items-center mb-4">
            <div className="flex-shrink-0 mr-4">
              <span className="text-black font-medium">4</span>
            </div>
            <h2 className="text-black font-medium">Gérer et optimiser son investissement</h2>
            <div className="flex-grow border-t border-gray-300 ml-4"></div>
          </div>
          <div className="flex gap-6 mt-4">
            <div className="flex-grow"></div>
            <div className="w-36 h-36 flex-shrink-0">
              <Image
                src="/assets/images/illustrations/programs/house-4.png"
                alt="House model on documents"
                width={144}
                height={144}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            <div className="flex flex-col max-w-xs">
              <p className="text-sm text-gray-600 mb-4">
                Après l&apos;achat, une bonne gestion est essentielle pour maximiser votre rentabilité.
              </p>
              <div className="mt-auto">
                <span className="text-gray-400 text-2xl font-light">4</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

