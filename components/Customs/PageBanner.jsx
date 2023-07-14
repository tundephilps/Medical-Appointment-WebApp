import React from "react";
import Link from "next/link";
import { HiChevronRight } from "react-icons/hi";
import Image from "next/image";
import { useTheme } from "next-themes";

const PageBanner = (props) => {
  const { path, title, description } = props;

  return (
    <section>
      <div className="py-4 relative w-full h-full">
        <Image
          className="absolute top-0 left-0 right-0 bottom-0 w-full h-full object-center object-cover z-0"
          src="/images/page-banner.jpg"
          width={800}
          height={500}
          loading="lazy"
          alt="banner"
        />
        <div className="absolute top-0 left-0 right-0 bottom-0 w-full h-full z-10 bg-gradient-to-t from-background-default/80 via-background-default/70 to-background-default/0" />
        <div className="container z-20">
          <div className="px-6 py-4 space-y-1 flex flex-col">
            {path && (
              <div className="flex space-x-1 py-2 capitalize font-medium text-lg md:text-base items-center z-10 mb-1 md:mb-0 ">
                <Link href="/">
                  <div className="hover:text-main-main cursor-pointer transition">
                    Home
                  </div>
                </Link>
                <HiChevronRight className="w-[18px] h-[18px] ml-2 text-main-main" />
                <div className="cursor-default">{path}</div>
              </div>
            )}
            {title && (
              <h3 className="cursor-default text-2xl md:text-3xl lg:text-4xl !leading-tight font-bold capitalize tracking-wide z-10">
                {title}
              </h3>
            )}
            {description && (
              <p className="cursor-default md:block hidden !text-base !mt-4 md:w-[70%] z-10">
                {description}
              </p>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBanner;
