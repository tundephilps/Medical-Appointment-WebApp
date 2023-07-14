import React from "react";
import { TitleAndDescription } from "../";

const UpSide = () => {
  return (
    <div className="flex flex-wrap sm:mb-4 md:mb-8 px-4">
      <div className="flex-[50%]">
        <h3 className="text-xl md:text-2xl font-semibold tracking-wider !leading-tight">
          Our{" "}
          <span className="text-main-main uppercase font-bold">Services</span>{" "}
          in details
        </h3>
        <div className="h-[6px] bg-primary-main w-[100px] my-4" />
        <p className="leading-relaxed text-sm md:text-base">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quam
          cumque, quis sint voluptatum optio fuga quisquam, nihil eum repellat
          voluptate inventore consequuntur laudantium!
        </p>
      </div>
    </div>
  );
};

export default UpSide;
