
import { SearchBar } from '../components/home/searchbar/search-bar';
import { WhyChooseUs } from '../components/home/why-choose-us/why-choose-us';
import { ServicesSection } from '../components/home/services-section/services-section';
import { PropertyCarousel } from '../components/home/property/property';
import { ValuesContactSection } from '../components/home/values-contact/values-contact-section';
import LogoShowcase from '../components/home/logo-showcase/logo-showcase';



export default function Home() {
  return (
    <div>
      <WhyChooseUs/>
      <ServicesSection/>
      <PropertyCarousel/>
      <ValuesContactSection/>
      <LogoShowcase/>
    </div>
  );
}
