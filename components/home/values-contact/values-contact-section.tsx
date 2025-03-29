import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

export function ValuesContactSection() {
  return (
    <section className="bg-black py-16 text-white">
      <div className="container mx-auto px-4">
        {/* Heading */}
        <h2 className="mb-16 text-center text-3xl font-bold leading-tight md:text-4xl lg:text-5xl">
          LUXURY HOME ABIDJAN, les clés de chez vous
          <br />
          sont chez nous.
        </h2>

        {/* Values Cards */}
        <div className="mb-16 grid gap-6 md:grid-cols-3">
          {/* Transparency Card */}
          <div className="rounded-3xl border border-gray-800 p-6">
            <div className="mb-6 flex justify-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                <Image src="/assets/images/user-4.png" alt="Transparency avatar" fill className="object-cover" />
              </div>
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold">Transparence</h3>
            <p className="text-center text-sm text-gray-400">
              Notre équipe vous garantit un accès permanent à toutes les étapes clés de vos transactions immobilières.
            </p>
          </div>

          {/* Confidentiality Card */}
          <div className="rounded-3xl border border-gray-800 p-6">
            <div className="mb-6 flex justify-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                <Image
                  src="/assets/images/user-3.png"
                  alt="Confidentiality avatar"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold">Confidentialité</h3>
            <p className="text-center text-sm text-gray-400">
              Parce que la discrétion est la valeur essentielle au cœur de notre métier, confiez nous en toute sérénité
              vos projets.
            </p>
          </div>

          {/* Availability Card */}
          <div className="rounded-3xl border border-gray-800 p-6">
            <div className="mb-6 flex justify-center">
              <div className="relative h-20 w-20 overflow-hidden rounded-full border-2 border-gray-700">
                <Image src="/assets/images/user-2.png" alt="Availability avatar" fill className="object-cover" />
              </div>
            </div>
            <h3 className="mb-4 text-center text-xl font-semibold">Disponibilité & réactivité</h3>
            <p className="text-center text-sm text-gray-400">
              Une équipe passionnée qui vous assure une prise en charge immédiate et une relation clientèle privilégiée.
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="mx-auto max-w-6xl rounded-3xl border border-gray-800 p-8 md:p-12">
          <h3 className="mb-8 text-center text-xl font-medium">Le bien qui correspond à votre demande</h3>

          <div className="grid gap-8 md:grid-cols-2">
            {/* Form Fields */}
            <div className="grid gap-6">
              <div className="grid gap-4">
                <label className="text-sm font-medium">Type de la demande</label>
                <Select>
                  <SelectTrigger className="border-gray-800 bg-black text-white">
                    <SelectValue placeholder="Sélectionnez" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="achat">Achat</SelectItem>
                    <SelectItem value="location">Location</SelectItem>
                    <SelectItem value="investissement">Investissement</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Emplacement</label>
                <Input
                  placeholder="Écrivez la zone"
                  className="border-gray-800 bg-black text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Superficie (m²)</label>
                <Input
                  placeholder="Écrivez la superficie"
                  className="border-gray-800 bg-black text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Nombre de pièces</label>
                <div className="flex items-center">
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-800 bg-black text-white hover:bg-gray-900"
                  >
                    <ChevronLeft className="h-4 w-4" />
                  </Button>
                  <div className="flex-1 text-center">01</div>
                  <Button
                    variant="outline"
                    size="icon"
                    className="border-gray-800 bg-black text-white hover:bg-gray-900"
                  >
                    <ChevronRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Budget min</label>
                <Input
                  placeholder="Écrivez la somme"
                  className="border-gray-800 bg-black text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Budget max</label>
                <Input
                  placeholder="Écrivez la somme"
                  className="border-gray-800 bg-black text-white placeholder:text-gray-500"
                />
              </div>

              <div className="grid gap-4">
                <label className="text-sm font-medium">Identité</label>
                <Select>
                  <SelectTrigger className="border-gray-800 bg-black text-white">
                    <SelectValue placeholder="Genre" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="monsieur">Monsieur</SelectItem>
                    <SelectItem value="madame">Madame</SelectItem>
                    <SelectItem value="autre">Autre</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Input
                placeholder="Votre nom"
                className="border-gray-800 bg-black text-white placeholder:text-gray-500"
              />

              <Input
                placeholder="Votre prénom"
                className="border-gray-800 bg-black text-white placeholder:text-gray-500"
              />

              <Input
                placeholder="Votre email"
                type="email"
                className="border-gray-800 bg-black text-white placeholder:text-gray-500"
              />

              <Input
                placeholder="Votre numéro"
                type="tel"
                className="border-gray-800 bg-black text-white placeholder:text-gray-500"
              />

              <div className="grid gap-4">
                <label className="text-sm font-medium">Besoin</label>
                <Select>
                  <SelectTrigger className="border-gray-800 bg-black text-white">
                    <SelectValue placeholder="Sélectionnez le type de bien" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="appartement">Appartement</SelectItem>
                    <SelectItem value="maison">Maison</SelectItem>
                    <SelectItem value="villa">Villa</SelectItem>
                    <SelectItem value="terrain">Terrain</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button className="mt-4 w-full bg-white text-black hover:bg-white/90">Soumettre ma demande</Button>
            </div>

            {/* Image */}
            <div className="hidden md:block">
              <div className="relative h-full w-full overflow-hidden rounded-2xl">
                <Image src="/assets/images/illustrations/page-accueil/Rectangle32.png" alt="Luxury bedroom" fill className="object-cover" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

