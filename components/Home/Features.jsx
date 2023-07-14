import React from "react";

import Link from "next/link";
import { HiOutlineClock, HiOutlineTruck, HiOutlineUser } from "react-icons/hi";

const Features = () => {
  return (
    <>
      <div className="w-full text-center sm:p-4 px-4 mb-12 md:max-w-[60%] mx-auto">
        <h1 className="text-3xl md:text-4xl font-semibold tracking-wider !leading-tight mb-4">
          A bit about{" "}
          <span className="text-primary-main font-bold uppercase ">
            Ourself
          </span>
        </h1>
        <div className="leading-relaxed text-sm md:text-base opacity-80">
          Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar
          neutra sustainable fingerstache kickstarter. keytar neutra sustainable
          fingerstache kickstarter.
        </div>
      </div>
      <div className="flex flex-wrap flex-col md:flex-row items-center justify-center">
        <div className="w-full md:w-1/3 px-2">
          <div className="bg-background-paper max-w-[400px] rounded-3xl w-auto mx-auto h-full flex flex-col justify-center items-center border-[2px] border-text-main/10 text-center z-20 relative mb-4 lg:mb-0 p-4 py-8 sm:p-8">
            <div className="mb-4 flex justify-center items-center">
              <HiOutlineUser className="w-[45px] h-[45px]" />
            </div>
            <span className="text-text-main/80">Live Support</span>
            <h4 className="mb-4 mt-2 text-2xl dark:text-primary-main">
              One-on-One Meet
            </h4>
            <p className="text-base !leading-normal">
              Get All time support for emergency.We have introduced the
              principle of family medicine.Get Conneted with us for any urgency
              .
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <div className="bg-background-paper  w-auto max-w-[400px] rounded-3xl mx-auto h-full flex flex-col justify-center items-center border-[2px] border-text-main/10 text-center z-20 relative mb-4 lg:mb-0 p-4 py-8 sm:p-8">
            <div className="mb-4 flex justify-center items-center">
              <HiOutlineClock className="w-[45px] h-[45px]" />
            </div>
            <span className="text-text-main/80">Timing schedule</span>
            <h4 className="mt-2 mb-2 text-2xl dark:text-primary-main">
              Working Hours
            </h4>
            <ul className="inline-block list-unstyled mx-auto text-left opacity-80 text-base !leading-normal">
              <li className="flex justify-content-between">
                Sun - Wed : <span>8:00 - 17:00</span>
              </li>
              <li className="flex justify-content-between">
                Thu - Fri : <span>9:00 - 17:00</span>
              </li>
              <li className="flex justify-content-between">
                Sat - sun : <span>10:00 - 17:00</span>
              </li>
            </ul>
            <Link href="/appointment">
              <button className="inline-flex mt-6 transition items-center cursor-pointer uppercase align-middle text-center select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-text-main dark:bg-text-main/5 hover:bg-transparent border-2 border-text-main dark:border-text-main/10 dark:hover:bg-primary-main hover:text-text-main text-white outline-none font-bold">
                Make appoinment
              </button>
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-2">
          <div className="bg-background-paper max-w-[400px] rounded-3xl w-auto mx-auto h-full flex flex-col justify-center items-center border-[2px] border-text-main/10 text-center z-20 relative mb-4 lg:mb-0 p-4 py-8 sm:p-8">
            <div className="mb-4 flex justify-center items-center">
              <HiOutlineTruck className="w-[45px] h-[45px]" />
            </div>
            <span className="text-text-main/80">All time service</span>
            <h4 className="mb-4 mt-2 text-2xl dark:text-primary-main">
              24/7 Service
            </h4>
            <p className="text-base !leading-normal">
              Get All time support for emergency.We have introduced the
              principle of family medicine.Get Conneted with us for any urgency
              .
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Features;
