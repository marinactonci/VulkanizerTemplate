import React from "react";
import Hero from "@/components/hero";
import Services from "@/components/services";
import WhyChooseUs from "@/components/why-choose-us";
import Testimonials from "@/components/testimonials";

export default function VulcanizerApp() {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs />
      <Testimonials />
    </div>
  );
}
