import type React from "react"
import Image from "next/image"
import { Building, Home, Briefcase, Users, Lightbulb, PaintBucket } from "lucide-react"

type ServiceCardProps = {
  title: string
  imageSrc: string
  icon: React.ReactNode
}

function ServiceCard({ title, imageSrc, icon }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-2xl">
      {/* Background Image */}
      <div className="relative h-80 w-full">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="absolute bottom-0 left-0 p-6">
        <div className="flex items-center gap-3">
          {/* Icon Circle */}
          <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
            <div className="text-white">{icon}</div>
          </div>

          {/* Title */}
          <h3 className="text-xl font-semibold text-white">{title}</h3>
        </div>
      </div>
    </div>
  )
}

export function ServicesSection() {
  const services = [
    {
      title: "Visites virtuelles 3D",
      imageSrc: "/assets/images/illustrations/page-accueil/service-1.png",
      icon: <Home size={20} />,
    },
    {
      title: "Signature électronique de contrats",
      imageSrc: "/assets/images/illustrations/page-accueil/service-1.png",
      icon: <Briefcase size={20} />,
    },
    {
      title: "Consultation juridique en ligne",
      imageSrc: "/assets/images/illustrations/page-accueil/service-1.png",
      icon: <Users size={20} />,
    },
    {
      title: "Suivi de dossier en temps réel",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Lightbulb size={20} />,
    },
    {
      title: "Évaluation automatique de biens",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <Building size={20} />,
    },
    {
      title: "Assistance personnalisée par chat vidéo",
      imageSrc: "/assets/images/illustrations/page-accueil/service-2.png",
      icon: <PaintBucket size={20} />,
    },
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">Nos services</h2>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
          {services.map((service) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              imageSrc={service.imageSrc}
              icon={service.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


