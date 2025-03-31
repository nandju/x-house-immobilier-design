import Hero from "@/components/qui-sommes-nous/hero/hero";
import AboutSection from '../../components/qui-sommes-nous/about/about-section';
import ValuesSection from "@/components/qui-sommes-nous/values/values-section";
import PhilosophySection from "@/components/qui-sommes-nous/philosophy/philosophy-section";
import TeamSection from "@/components/qui-sommes-nous/team/team-section";
import LogoShowcase from "@/components/home/logo-showcase/logo-showcase";
import TestimonialsSection from '../../components/qui-sommes-nous/testimonials/testimonials-section';
import BlogSection from '../../components/qui-sommes-nous/blog/blog-section';


export default function QuiSommesNous(){
    return(
        <div>
            <Hero/>
            <AboutSection/>
            <ValuesSection/>
            <PhilosophySection/>
            <TeamSection/>
            <LogoShowcase/>
            <TestimonialsSection/>
            <BlogSection/>
        </div>
    );
}