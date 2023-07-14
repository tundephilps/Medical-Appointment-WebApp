import PageBanner from "@/components/Customs/PageBanner";
import Section from "@/components/Customs/Section";
import DownSide from "@/components/FaQuestions/DownSide";
import UpSide from "@/components/FaQuestions/Upside";
import React from "react";

const FAQuestions = () => {
  return (
    <>
      <PageBanner
        title="FAQs"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="FAQs"
      />
      <Section>
        <UpSide />
        <DownSide />
      </Section>
    </>
  );
};

export default FAQuestions;
