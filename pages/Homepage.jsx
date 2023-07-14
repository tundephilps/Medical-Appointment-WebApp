import Section from "@/components/Customs/Section";
import About from "@/components/Home/About";
import Banner from "@/components/Home/Banner";
import CtaSection from "@/components/Home/CtaSection";
import Features from "@/components/Home/Features";
import Gallery from "@/components/Home/Gallery";
import TestimonialSection from "@/components/Home/Testimonial";
import React from "react";

const Homepage = () => {
  return (
    <div>
      <Banner />
      <Section id="features">
        <Features />
      </Section>
      <Section id="about">
        <About />
      </Section>

      <Section id="cta">
        <CtaSection />
      </Section>
      <Section id="gallery">
        <Gallery />
      </Section>
      <Section id="testimonial">
        <TestimonialSection />
      </Section>
    </div>
  );
};

export default Homepage;
