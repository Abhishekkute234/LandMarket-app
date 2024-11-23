import { Hero } from "@/components/hero";
import { Features } from "@/components/features";
import { Products } from "@/components/products";
import { Testimonials } from "@/components/testimonials";
import { Stats } from "@/components/stats";
import { CTASection } from "@/components/cta-section";

export default function Home() {
  return (
    <>
      <Hero />
      <Features />
      <Products />
      <Stats />
      <Testimonials />
      <CTASection />
    </>
  );
}