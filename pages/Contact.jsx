import DownLeftSide from "@/components/Contact/DownLeftSide";
import DownRightSide from "@/components/Contact/DownRightSide";
import UpSide from "@/components/Contact/UpSide";
import PageBanner from "@/components/Customs/PageBanner";
import Section from "@/components/Customs/Section";
import React from "react";

const Index = () => {
  return (
    <>
      <PageBanner
        title="Contact Us"
        description="Lorem ipsum dolor sit, consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="contact us"
      />
      <Section>
        <UpSide />
        <div className="flex flex-wrap py-6 md:pt-20 md:pb-10">
          <DownLeftSide />
          <DownRightSide />
        </div>
      </Section>
    </>
  );
};

export default Index;
