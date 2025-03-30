import Hero from "@/components/qui-sommes-nous/hero/hero";
import AboutSection from '../../components/qui-sommes-nous/about/about-section';
import ValuesSection from "@/components/qui-sommes-nous/values/values-section";
import PhilosophySection from "@/components/qui-sommes-nous/philosophy/philosophy-section";


export default function QuiSommesNous(){
    return(
        <div>
            <Hero/>
            <AboutSection/>
            <ValuesSection/>
            <PhilosophySection/>
        </div>
    );
}