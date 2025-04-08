import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import { SearchBar } from "@/components/home/searchbar/search-bar";
import TestimonialsSection from "@/components/qui-sommes-nous/testimonials/testimonials-section";
import HeroSection from "@/components/service/hero/hero-section";
import ServiceBody from "@/components/service/servicebody/servicebody";


export default function Service(){
    return(
        <div>
            <HeroSection/>
            <SearchBar/>
            <ServiceBody/>
            <LogoShowcase/>
            <TestimonialsSection/>
        </div>
    );
}