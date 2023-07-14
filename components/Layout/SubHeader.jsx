import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaLinkedinIn,
  FaTwitch,
} from "react-icons/fa";
import { HiLocationMarker, HiPhone, HiOutlineClock } from "react-icons/hi";

const SubHeader = () => {
  const socialLink = [
    {
      icon: <FaFacebookF className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
    {
      icon: <FaTwitter className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
    {
      icon: <FaLinkedinIn className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
    {
      icon: <FaTwitch className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
    {
      icon: <FaSkype className="w-[16px] h-[16px]" />,
      url: "https://google.com",
    },
  ];

  return (
    <div className="hidden lg:flex py-0 px-0 lg:px-4 lg:py-3 text-text-main/75 dark:text-text-main/60 opacity-0 pointer-events-none bg-background-paper lg:pointer-events-auto lg:border-b-2 border-text-main/10 lg:opacity-100 items-center justify-center">
      <div className="max-w-[1140px] flex flex-grow justify-between items-center px-4">
        <div className="flex items-center">
          <div className=" border-r-2 border-text-main/20 text-xs font-medium flex items-center h-full mr-5 pr-5 ">
            <HiLocationMarker className="w-[20px] h-[20px] mr-1.5 text-main-main" />
            32 Jacobs Avenue, Victoria Island, Lagos..
          </div>

          <div className="capitalize border-r-2 border-text-main/20 text-xs font-medium flex items-center h-full  mr-5 pr-5 ">
            <HiPhone className="w-[20px] h-[20px] mr-1.5 text-main-main" />
            +91 96250 10227
          </div>

          <div className="capitalize text-xs font-medium flex items-center h-full">
            <HiOutlineClock className="w-[20px] h-[20px] mr-1.5 text-main-main" />
            Monday - Friday : 8.00 AM - 09.00 PM
          </div>
        </div>

        <div className="flex justify-center items-center">
          {socialLink.map(({ icon, url }, index) => (
            <Link key={index} href={url}>
              <div className="ml-2 p-1 cursor-pointer hover:text-main-main">
                {icon}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SubHeader;
