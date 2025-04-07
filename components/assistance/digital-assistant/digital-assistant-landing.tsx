import { Button } from "@/components/ui/button"

export default function DigitalAssistantLanding() {
  return (
    <div className="flex flex-col bg-black text-white">
      <div className="container mx-auto px-4 py-8">
        {/* Logo */}
        <div className="mb-16 md:mb-24">
          <h2 className="text-3xl font-bold">
            <span className="text-blue-500">M</span> <span className="text-pink-500">LHA</span>
          </h2>
        </div>

        {/* Main content */}
        <div className="max-w-3xl">
          <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-extrabold tracking-tight mb-12 md:mb-16">
            L&apos;assistant
            <br />
            numérique
            <br />
            le plus privé
          </h1>

          <div className="space-y-2 text-gray-400 text-lg mb-12 md:mb-16">
            <p>M. LHA apprend ce dont vous avez besoin.</p>
            <p>M. LHA n&apos;est jamais partagé avec des annonceurs.</p>
          </div>

          <Button
            variant="outline"
            size="lg"
            className="w-full md:w-auto md:min-w-[400px] h-14 text-black bg-gray-100 hover:bg-gray-200 hover:text-black text-base rounded-2xl"
          >
            Démarrer une conversation
          </Button>
        </div>
      </div>
    </div>
  )
}

