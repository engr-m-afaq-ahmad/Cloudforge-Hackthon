import Navbar from "@/components/navbar";
import Hero from "@/components/hero";
import Highlights from "@/components/highlights";
import About from "@/components/about";
import Challenges from "@/components/challenges";
import Timeline from "@/components/timeline";
import Prizes from "@/components/prizes";
import FAQSection from "@/components/faq";
import FinalCTA from "@/components/final-cta";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--cf-bg)]">
      <Navbar />
      <main>
        <Hero />
        <Highlights />
        <About />
        <Challenges />
        <Timeline />
        <Prizes />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
