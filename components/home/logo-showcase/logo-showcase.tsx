import Image from "next/image"
import { Marquee } from "@/components/magicui/marquee" // Assurez-vous d'avoir ce composant Marquee.

export default function LogoShowcase() {
  const partners = [
    { name: "Orange", logo: "/assets/images/illustrations/page-accueil/logo1.png" },
    { name: "MTN", logo: "/assets/images/illustrations/page-accueil/logo2.png" },
    { name: "CIE", logo: "/assets/images/illustrations/page-accueil/logo3.png" },
    { name: "ACI", logo: "/assets/images/illustrations/page-accueil/logo4.png" },
    { name: "NSIA", logo: "/assets/images/illustrations/page-accueil/logo5.png" },
    { name: "ISSIS", logo: "/assets/images/illustrations/page-accueil/logo6.png" },
    // { name: "LHA", logo: "/assets/images/illustrations/page-accueil/logo7.png" },
  ]

  return (
    <section className="py-16 px-6 bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Nos partenaires de confiance</h2>
        <p className="text-gray-600 dark:text-gray-300 mb-10 max-w-xl mx-auto">
          Grâce à la confiance de nos partenaires, nous pouvons offrir à nos clients des services immobiliers de qualité et fiables.
        </p>

        <Marquee className="mb-10" pauseOnHover>
          <div className="flex gap-8 md:gap-12 items-center">
            {partners.map((partner) => (
              <div key={partner.name} className="flex items-center justify-center">
                <Image
                  src={partner.logo}
                  alt={`${partner.name} logo`}
                  width={80}
                  height={80}
                  className="object-contain max-h-20 grayscale hover:grayscale-0 transition"
                />
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  )
}
