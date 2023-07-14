import React from "react";

import PageBanner from "@/components/Customs/PageBanner";
import Section from "@/components/Customs/Section";
import DownLeftSide from "@/components/Appointment/DownLeftSide";
import DownRightSide from "@/components/Appointment/DownRightSide";

const Index = () => {
  return (
    <div>
      <PageBanner
        title="Appointment"
        description="Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quam aliquam maiores itaque modi eaque animi beatae ipsam inventore eum? Libero."
        path="Appointment"
      />
      <Section>
        <div className="flex flex-wrap">
          <DownLeftSide />
          <DownRightSide />
        </div>
      </Section>
    </div>
  );
};

export default Index;
