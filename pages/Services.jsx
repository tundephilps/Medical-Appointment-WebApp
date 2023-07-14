import PageBanner from "@/components/Customs/PageBanner";
import Section from "@/components/Customs/Section";
import DownSide from "@/components/Services/DownSide";
import UpSide from "@/components/Services/Upside";
import React from "react";

const Services = () => {
  return (
    <div>
      <PageBanner
        title="Our Services"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="Services"
      />
      <Section>
        <UpSide />
        <DownSide />
      </Section>
    </div>
  );
};

export default Services;
