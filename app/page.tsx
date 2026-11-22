import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import About from "@/components/about";
import Challenges from "@/components/challenges";
import Timeline from "@/components/timeline";
import Prizes from "@/components/prizes";
import Rules from "@/components/rules";
import FAQSection from "@/components/faq";
import Team from "@/components/team";
import Contact from "@/components/contact";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[var(--cf-bg)]">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Challenges />
        <Timeline />
        <Prizes />
        <Rules />
        <FAQSection />
        <Team />
        <Contact />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
