import React from "react";

import Intro from "@/components/About/Intro";
import Qualification from "@/components/About/Qualification";
import Skills from "@/components/About/Skills";
import PageBanner from "@/components/Customs/PageBanner";
import Section from "@/components/Customs/Section";

const Index = () => {
  return (
    <>
      <PageBanner
        title="About Us"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="About Us"
      />
      <Section>
        <Intro />
      </Section>
      <Section>
        <Qualification />
      </Section>
      <Section>
        <Skills />
      </Section>
    </>
  );
};

export default Index;
