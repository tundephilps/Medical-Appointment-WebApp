import React from "react";

const UpSide = () => {
  return (
    <>
      <div className="flex flex-wrap mb-12 px-2">
        <div className="flex-[50%]">
          <h3 className="text-xl md:text-2xl font-semibold tracking-wider !leading-tight">
            Our{" "}
            <span className="text-main-main uppercase font-bold">Location</span>{" "}
            on map
          </h3>
          <div className="h-[6px] bg-primary-main w-[100px] my-4" />
          <p className="leading-relaxed text-sm md:text-base">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fugit quam
            cumque, quis sint voluptatum optio fuga quisquam, nihil eum repellat
            voluptate inventore consequuntur laudantium!
          </p>
        </div>
      </div>

      <div className="px-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d448181.163741503!2d76.81306412566978!3d28.647279935598277!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x37205b715389640!2sDelhi!5e0!3m2!1sen!2sin!4v1668254278259!5m2!1sen!2sin"
          width={800}
          height={600}
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full rounded-lg"
        ></iframe>
      </div>
    </>
  );
};

export default UpSide;
