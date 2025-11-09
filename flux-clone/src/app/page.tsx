import { CTA } from "@/components/cta";
import { Companies } from "@/components/companies";
import { Community } from "@/components/community";
import { Copilot } from "@/components/copilot";
import { FeatureGrid } from "@/components/features";
import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { Pricing } from "@/components/pricing";
import { Workflow } from "@/components/workflow";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden bg-slate-950">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(99,102,241,0.18),_transparent_65%)]"></div>
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_bottom,_rgba(2,132,199,0.18),_transparent_70%)]"></div>
      <Navbar />
      <main className="relative z-10 flex flex-col gap-12 px-4 pb-32 sm:px-6">
        <Hero />
        <Companies />
        <FeatureGrid />
        <Workflow />
        <Copilot />
        <Community />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
