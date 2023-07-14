import React from "react";
import Image from "next/image";

const Gallery = () => {
  return (
    <>
      <div className="flex flex-wrap">
        <div className="flex w-full flex-col mb-20 flex-wrap items-start justify-center text-center">
          <h1 className="text-3xl md:text-4xl mx-auto mb-4 !leading-tight font-semibold tracking-widest">
            meet the{" "}
            <span className="text-primary-main font-bold uppercase">
              med experts
            </span>{" "}
            team
          </h1>
          <p className="mx-auto leading-relaxed text-sm md:text-base lg:max-w-[60%]">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table. Franzen you probably
            haven't heard of them man bun deep jianbing selfies heirloom.
          </p>
        </div>
        <div className="flex flex-wrap">
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="p-2 w-1/2">
              <Image
                alt="gallery"
                width={500}
                height={300}
                className="w-full object-cover rounded-xl md:rounded-3xl h-full object-center block"
                src="/images/gallery/1.jpg"
              />
            </div>
            <div className="p-2 w-1/2">
              <Image
                alt="gallery"
                width={500}
                height={300}
                className="w-full object-cover rounded-xl md:rounded-3xl h-full object-center block"
                src="/images/gallery/2.jpg"
              />
            </div>
            <div className="p-2 w-full">
              <Image
                alt="gallery"
                width={600}
                height={360}
                className="w-full object-cover rounded-xl md:rounded-3xl h-full object-center block"
                src="/images/gallery/3.jpg"
              />
            </div>
          </div>
          <div className="flex flex-wrap w-full md:w-1/2">
            <div className="p-2 w-1/2 md:w-full">
              <Image
                alt="gallery"
                className="w-full h-full rounded-xl md:rounded-3xl object-cover object-center block"
                width={600}
                height={360}
                src="/images/gallery/4.jpg"
              />
            </div>
            <div className="p-2 w-1/2">
              <Image
                alt="gallery"
                width={500}
                height={300}
                className="w-full object-cover rounded-xl md:rounded-3xl h-full object-center block"
                src="/images/gallery/5.jpg"
              />
            </div>
            <div className="p-2 w-full md:w-1/2">
              <Image
                alt="gallery"
                width={500}
                height={300}
                className="w-full object-cover rounded-xl md:rounded-3xl h-full object-center block"
                src="/images/gallery/6.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
