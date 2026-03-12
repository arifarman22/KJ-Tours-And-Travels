import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/sections/Hero";
import Stats from "@/sections/Stats";
import Services from "@/sections/Services";
import WhyChooseUs from "@/sections/WhyChooseUs";
import HowItWorks from "@/sections/HowItWorks";
import FeaturedDestinations from "@/sections/FeaturedDestinations";
import DestinationShowcase from "@/sections/DestinationShowcase";
import Testimonials from "@/sections/Testimonials";
import CTASection from "@/sections/CTASection";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <Hero />
      <Stats />
      <WhyChooseUs />
      <Services />
      <HowItWorks />
      <FeaturedDestinations />
      <DestinationShowcase />
      <Testimonials />
      <CTASection />
      <Footer />
    </main>
  );
}
