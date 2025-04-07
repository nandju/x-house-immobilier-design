import { Card } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

export default function SocialMediaSection() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 bg-white">
      {/* Social Media Icons Section */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center mb-16">
        <div className="grid grid-cols-2 gap-4 md:gap-6">
          {/* Telegram */}
          <Link
            href="#"
            className="block w-24 h-24 rounded-2xl border border-gray-200 p-2 hover:shadow-md transition-shadow"
          >
            <Image
              src="/assets/images/illustrations/assistance/telegram-icon.png"
              alt="Telegram"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </Link>

          {/* WhatsApp/B */}
          <Link
            href="#"
            className="block w-24 h-24 rounded-2xl border border-gray-200 p-2 hover:shadow-md transition-shadow"
          >
            <Image
              src="/assets/images/illustrations/assistance/whatsapp-icon.png"
              alt="WhatsApp"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </Link>

          {/* Facebook */}
          <Link
            href="#"
            className="block w-24 h-24 rounded-2xl border border-gray-200 p-2 hover:shadow-md transition-shadow"
          >
            <Image
              src="/assets/images/illustrations/assistance/facebook-icon.png"
              alt="Facebook"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </Link>

          {/* LinkedIn */}
          <Link
            href="#"
            className="block w-24 h-24 rounded-2xl border border-gray-200 p-2 hover:shadow-md transition-shadow"
          >
            <Image
              src="/assets/images/illustrations/assistance/linkedin-icon.png"
              alt="LinkedIn"
              width={80}
              height={80}
              className="w-full h-full object-contain"
            />
          </Link>
        </div>

        <div className="md:ml-8 max-w-md">
          <h3 className="text-lg font-medium text-gray-800 mb-3">
            Rejoignez moi sur toutes les plateformes de discussions et réseaux sociaux
          </h3>
          <p className="text-gray-600">
            Vous recherchez un appartement, une villa pour vous même ou pour un expatrié j&apos;ai ce qui vous faut!
          </p>
        </div>
      </div>

      {/* Service Cards Section */}
      <div className="mb-8">
        <h2 className="text-3xl font-bold text-center mb-8">Aller plus loin avec M. LHA</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="bg-black text-white p-8 h-96 flex items-center justify-center rounded-3xl">
            <div>
              <h3 className="text-xl font-bold mb-2">M. LHA</h3>
              <p className="text-lg">pour les réseaux sociaux</p>
            </div>
          </Card>

          <Card className="bg-black text-white p-8 h-96 flex items-center justify-center rounded-3xl">
            <div>
              <h3 className="text-xl font-bold mb-2">M. LHA</h3>
              <p className="text-lg">pour l&apos;utilisation de la voix</p>
            </div>
          </Card>

          <Card className="bg-black text-white p-8 h-96 flex items-center justify-center rounded-3xl">
            <div>
              <h3 className="text-xl font-bold mb-2">M. LHA</h3>
              <p className="text-lg">pour le service commercial</p>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

