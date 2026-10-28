import ScrollProgress from "@/components/layout/ScrollProgress";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FloatingButtons from "@/components/layout/FloatingButtons";
import Hero from "@/components/sections/Hero";
import Marquee from "@/components/sections/Marquee";
import Stats from "@/components/sections/Stats";
import Services from "@/components/sections/Services";
import HowItWorks from "@/components/sections/HowItWorks";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import StoryBackground from "@/components/layout/StoryBackground";

// The home page is just the sections in order. Reorder or remove them here.
export default function Home() {
  return (
    <main id="home">
      <ScrollProgress />
      <Navbar />
      <Hero />
      <Marquee />
      <StoryBackground>
      <Stats />
      <Services />
      <HowItWorks />
      <WhyUs />
      <Contact />
      </StoryBackground>
      <Footer />
      <FloatingButtons />
    </main>
  );
}
