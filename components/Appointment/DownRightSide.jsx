import React from "react";

const DownRightSide = () => {
  return (
    <div className="lg:w-1/3 lg:pl-8 mt-4 lg:mt-0 p-4">
      <div className="contact-box-layout1">
        <h3 className="text-lg md:text-xl tracking-wider !leading-tight">
          For Emergency
        </h3>
        <div className="h-[6px] bg-primary-main w-[30px] my-4" />
        <div className="flex items-center">
          <p className="inline mr-1 text-base md:text-lg opacity-100 font-semibold">
            Call us on{" "}
          </p>
          <h6 className="text-lg inline md:text-xl text-main-main">
            +91 00000 00000
          </h6>
        </div>
      </div>
    </div>
  );
};

export default DownRightSide;
