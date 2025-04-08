"use client"
import { Search } from "lucide-react"
import Image from "next/image"

import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from "@/components/ui/sheet"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"

export function SearchBar() {
  return (
    <div className="mx-auto w-full max-w-6xl rounded-full bg-white border-2 px-6 py-3 my-10 shadow-lg">
      <div className="flex flex-col  md:flex-row items-center justify-between">
        <div className="text-lg font-medium">Trouver mon logement ici</div>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" className="flex items-center gap-2 rounded-full">
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-gray-200">
                <Image
                  src="/assets/images/user-1.png"
                  alt="Profile"
                  width={32}
                  height={32}
                  className="h-full w-full object-cover"
                />
              </div>
              <span className="text-sm font-medium">Accédez au filtrage</span>
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-md">
            <SheetHeader>
              <SheetTitle>Filtres de recherche</SheetTitle>
              <SheetDescription>Affinez votre recherche de logement avec nos filtres détaillés.</SheetDescription>
            </SheetHeader>
            <div className="flex flex-row gap-3">
                <Button className="rounded-full bg-white text-black hover:bg-black hover:text-white transition-all">Location d'un bien</Button>
                <Button className="rounded-full bg-white text-black hover:bg-black hover:text-white transition-all">Achat d'un bien</Button>
                <Button className="rounded-full bg-white text-black hover:bg-black hover:text-white transition-all">Vendre un bien</Button>
            </div>
          </SheetContent>
        </Sheet>

        <Button className="gap-2 rounded-full bg-black px-6 text-white hover:bg-black/90">
          <Search className="h-4 w-4" />
          <span>Rechercher</span>
        </Button>
      </div>
    </div>
  )
}

