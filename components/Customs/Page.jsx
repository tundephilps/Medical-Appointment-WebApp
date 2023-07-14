import React from "react";
import { Section } from "../";

const Page = (props) => {
  const { title, children } = props;
  return (
    <Section>
      <div className="p-2 px-4 text-sm md:text-base">
        <div className="w-full text-center sm:p-4 mb-8 md:mb-12 md:max-w-[90%] mx-auto">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-wider !leading-tight mb-2">
            {title}
          </h1>
        </div>
        {children}
      </div>
    </Section>
  );
};

export default Page;
