import React from "react";
import { HiCheckCircle } from "react-icons/hi";

const Skills = () => {
  const timetable = {
    "Monday - Wednesday": "9:00 - 17:00",
    "Thursday - Friday": "12:00 - 19:00",
    "Saturday - Sunday": "1:00 - 2:00",
  };
  const experties = [
    "International Drug Database",
    "Stretchers and Stretcher Accessories",
    "Cushions and Mattresses",
    "Cholesterol and lipid tests",
    "Critical Care Medicine Specialists",
    "Emergency Assistance",
  ];

  return (
    <>
      <div className="flex flex-wrap mb-8 px-4">
        <div className="flex-[50%]">
          <h3 className="text-2xl md:text-3xl font-semibold tracking-wider !leading-tight">
            My Skills
          </h3>
          <div className="h-[6px] bg-primary-main w-[100px] my-4" />
        </div>
      </div>

      <div className="flex flex-wrap px-4 md:space-y-0 space-y-8">
        <div className="flex-[100%] md:flex-[40%] md:pr-16">
          <h3 className="text-lg md:text-xl tracking-wider !leading-tight mb-3">
            A Bit about me
          </h3>
          <p className="text-sm md:text-base opacity-90 !leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. In
            architecto voluptatem alias, aspernatur voluptatibus corporis
            quisquam? Consequuntur, ad, doloribus, doloremque voluptatem at
            consectetur natus eum ipsam dolorum iste laudantium tenetur.
          </p>
        </div>

        <div className="flex-[100%] md:flex-[30%] md:pr-16">
          <div className="skill-list">
            <h3 className="text-lg md:text-xl tracking-wider !leading-tight mb-3">
              Expertise area
            </h3>
            <ul className="department-service">
              {experties.map((content, index) => (
                <li
                  key={index}
                  className="flex items-center py-1 md:py-1.5 opacity-90"
                >
                  <HiCheckCircle className="w-[24px] h-[24px] mr-2 text-main-main" />
                  {content}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex-[100%] md:flex-[20%] ">
          <h3 className="text-lg md:text-xl tracking-wider !leading-tight mb-3">
            Make Appoinment
          </h3>
          <ul className="list-unstyled text-lg md:text-base md:opacity-90">
            {Object.keys(timetable).map((key, index) => (
              <li key={key} className="flex justify-between items-center">
                <span className="opacity-90 text-sm sm:text-base font-medium">
                  {key}
                </span>
                <span className="opacity-90 text-sm sm:text-base ">
                  {timetable[key]}
                </span>
              </li>
            ))}
          </ul>
          <div className="mt-8">
            <h6 className="text-lg md:text-xl tracking-wider !leading-tight mb-3">
              Need Urgent Help?
            </h6>
            <p className=" opacity-100">
              {" "}
              Call Us On{" "}
              <span className="text-main-main font-bold"> +91 00000 00000</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
