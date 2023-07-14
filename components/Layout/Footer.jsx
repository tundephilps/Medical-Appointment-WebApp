import React from "react";
import Link from "next/link";
import {
  FaFacebookF,
  FaTwitter,
  FaSkype,
  FaLinkedinIn,
  FaTwitch,
} from "react-icons/fa";

const Footer = () => {
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
  const data = {
    Support: [
      { text: "Call Us On +91 00000 00000" },
      { text: "Email Us On name@company.com" },
    ],
    "Useful Links": [
      { text: "Terms & Conditions", url: "/TermsAndConditions" },
      { text: "Privacy Policy", url: "/Policy" },
      { text: "FAQuestions", url: "/faq" },
      { text: "DMCA", url: "/" },
      { text: "License", url: "/" },
    ],
    Address: [{ text: "Your Address" }],
  };

  return (
    <footer className="body-font bg-text-main/5 mt-8 md:font-medium">
      <div className="max-w-[1140px] px-4 py-8 md:py-20 mx-auto flex lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
        <div className="w-80 flex-shrink-0 mx-5">
          <Link href="/">
            <h3 className="text-xl">Logo & SiteName</h3>
          </Link>
          <p className="mt-3 text-sm sm:text-md md:text-base !font-normal w-2/3">
            Air plant banjo lyft occupy retro adaptogen indego
          </p>
        </div>
        <div className="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10">
          {Object.keys(data).map((key, index) => (
            <div key={key} className="lg:w-1/3 md:w-1/2 w-full px-4">
              <h2 className="tracking-widest text-xl mb-8 relative after:content-start after:absolute after:bottom-0 after:left-0 after:right-0 after:w-[15%] after:mb-[-12px] after:h-[4px] after:bg-primary-main">
                {key}
              </h2>
              <nav className="list-none mb-10">
                {data[key].map(({ text, url }, index) =>
                  url ? (
                    <Link key={index} href={url}>
                      <li>
                        <div className="text-text-main/75 py-0.5 text-sm sm:text-md hover:text-text-main cursor-pointer">
                          {text}
                        </div>
                      </li>
                    </Link>
                  ) : (
                    <li>
                      <div className="text-text-main/75 cursor-default py-0.5 text-sm sm:text-md">
                        {text}
                      </div>
                    </li>
                  )
                )}
              </nav>
            </div>
          ))}
        </div>
      </div>
      <div className="border-t-2 border-text-main/5">
        <div className="max-w-[1140px] mx-auto py-4 px-10 flex flex-wrap flex-col sm:flex-row">
          <div className="py-3 uppercase text-sm md:text-base text-center font-semibold">
            copyright &copy; 2021
            <span className="mx-2">|</span>
            All right reserved
          </div>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center items-center space-x-3">
            {socialLink.map(({ icon, url }, index) => (
              <Link key={index} href={url}>
                <div className="hover:text-main-main opacity-70 hover:opacity-100 cursor-pointer">
                  {icon}
                </div>
              </Link>
            ))}
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
