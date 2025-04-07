import HeroSection from "@/components/programs/hero/hero";
import InvestmentGuide from "@/components/programs/investment/investment-guide";
import PropertyCategories from "@/components/programs/property-categories/property-categories";
import PropertyListings from "@/components/programs/property-listing/property-listings";


export default function Program(){
    return(
        <div>
            <HeroSection/>
            <PropertyListings/>
            <InvestmentGuide/>
            <PropertyCategories/>
        </div>
    );
}