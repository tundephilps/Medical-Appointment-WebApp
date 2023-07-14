import React from "react";
import Image from "next/image";
import TitleAndDescription from "../Customs/TitleAndDescription";
import Ticker from "../Customs/Ticker";

const CtaSection = () => {
  return (
    <div className="flex flex-wrap">
      <div className="flex flex-wrap px-4 mt-auto mb-auto lg:w-1/2 md:w-2/3 content-start md:pr-12 pt-12 order-1 md:order-0 ">
        <div>
          <TitleAndDescription
            titleStart="craft beer pug"
            titleHighlight="drinking"
            titleEnd="craft"
            description="Pour-over craft beer pug drinking vinegar live-edge gastropub,
            keytar neutra sustainable fingerstache kickstarter."
            left
          />
        </div>
        <div className="py-4 px-4 md:px-8 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="font-medium text-3xl">
            <Ticker count={4.7} decimal={1} />K
          </h2>
          <p className="leading-relaxed">Users</p>
        </div>
        <div className="py-4 px-4 md:px-8 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="font-medium text-3xl">
            <Ticker count={9.2} decimal={1} />K
          </h2>
          <p className="leading-relaxed">Subscribes</p>
        </div>
        <div className="py-4 px-4 md:px-8 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="font-medium text-3xl">
            <Ticker count={18} />
          </h2>
          <p className="leading-relaxed">Downloads</p>
        </div>
        <div className="py-4 px-4 md:px-8 sm:w-1/2 lg:w-1/4 w-1/2">
          <h2 className="font-medium text-3xl">
            <Ticker count={86} />
          </h2>
          <p className="leading-relaxed">Products</p>
        </div>
      </div>
      <div className="lg:w-1/2 md:w-1/3 rounded-xl md:rounded-3xl overflow-hidden w-full order-0 mx-2 md:mx-0 md:order-1">
        <Image
          className="object-cover object-center w-full h-full"
          src="/images/cta.jpg"
          width={600}
          height={400}
          alt="cta"
        />
      </div>
    </div>
  );
};

export default CtaSection;
