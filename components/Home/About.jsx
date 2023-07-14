import React from "react";
import Image from "next/image";
import Link from "next/link";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

function About() {
  return (
    <>
      <div className="flex flex-wrap items-center">
        <div className="w-full max-w-[100%] md:max-w-[33.33%] md:block flex">
          <Image
            width={600}
            height={400}
            src="/images/about/1.jpg"
            alt="about"
            className="rounded-3xl w-[50%] md:w-full p-2 h-full"
          />
          <Image
            width={600}
            height={400}
            src="/images/about/2.jpg"
            alt="about"
            className="rounded-3xl mt-0 md:mt-2 w-[50%] md:w-full p-2 h-full"
          />
        </div>

        <div className="w-full max-w-[100%] md:max-w-[33.33%] px-2 pt-2 md:pt-0">
          <Image
            width={600}
            height={400}
            src="/images/about/3.jpg"
            alt="about"
            className="rounded-xl md:rounded-3xl w-full"
          />
        </div>

        <div className="w-full md:max-w-[33.33%] pt-8">
          <div className="pl-4 mt-4 mt-lg-0">
            <h2 className="text-3xl md:text-4xl font-semibold tracking-wider !leading-tight">
              Personal care <br />&{" "}
              <span className="text-primary-main font-bold uppercase">
                healthy
              </span>{" "}
              living
            </h2>
            <p className="mt-4 mb-8">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Reprehenderit, dolores at corporis non quas, aperiam ullam cum,
              perspiciatis nostrum asperiores delectus ea sunt repellat minima
              enim animi. Et illo facilis at eaque.
              <strong>YOU MUST TRY IT ONCE</strong>
            </p>

            <Link href="/services">
              <button className="inline-flex items-center cursor-pointer group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 text-sm leading-normal no-underline rounded-full bg-text-main dark:bg-text-main/5 hover:bg-transparent border-2 border-text-main dark:border-text-main/10 dark:hover:bg-primary-main hover:text-primary-main text-white outline-none font-bold">
                our services{" "}
                <HiOutlineArrowLongRight className="w-[18px] h-[18px] ml-2 group-hover:ml-4 transition-all" />
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}

export default About;
