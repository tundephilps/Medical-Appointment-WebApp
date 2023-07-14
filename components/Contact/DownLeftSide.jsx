import React, { useState } from "react";
import { HiOutlineArrowLongRight } from "react-icons/hi2";

const DownLeftSide = () => {
  const initialState = {
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  };
  const [userData, setUserData] = useState(initialState);
  const { firstname, lastname, email, message } = userData;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefualt();
  };

  return (
    <div className="lg:w-2/3">
      <div className="flex-[50%] p-2 mt-4 md:mt-0">
        <h3 className="text-xl md:text-2xl tracking-wider !leading-tight">
          leave us a{" "}
          <span className="uppercase text-main-main font-bold">message</span>
        </h3>
        <div className="h-[6px] bg-primary-main w-[100px] mt-4 mb-8" />
        <form className="flex flex-wrap" noValidate onSubmit={handleSubmit}>
          <div className="md:w-1/2 w-full py-2 pr-4 mb-2">
            <label
              for="firstname"
              className="block mb-3 px-1 md:text-sm  text-base font-medium"
            >
              First Name
            </label>
            <input
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={handleInputChange}
              placeholder="First Name *"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="md:w-1/2 w-full py-2 pr-4 mb-2">
            <label
              for="lastname"
              className="block mb-3 px-1 md:text-sm  text-base font-medium"
            >
              Last Name
            </label>
            <input
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={handleInputChange}
              placeholder="Last Name *"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="w-full py-2 pr-4 mb-2">
            <label
              for="email"
              className="block mb-3 px-1 md:text-sm  text-base font-medium"
            >
              Email
            </label>
            <input
              id="email"
              name="email"
              value={email}
              onChange={handleInputChange}
              placeholder="E-mail *"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 outline-none w-full md:text-sm  text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
              main
            />
          </div>

          <div className="w-full py-2 pr-4 mb-2">
            <label
              for="message"
              className="block mb-4 px-1 md:text-sm  text-base font-medium"
            >
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={message}
              rows={7}
              cols={20}
              onChange={handleInputChange}
              placeholder="Message*"
              className="py-2.5 px-4 text-text-main/80 focus:border-primary-main/70 focus:outline-none focus:ring-1 focus:ring-primary-main/70 resize-none outline-none w-full md:text-sm text-base leading-normal border border-text-main/10 bg-background-paper rounded-lg"
            />
          </div>

          <div className="w-full">
            <button
              type="submit"
              style={{ opacity: 75 }}
              disabled={Boolean(
                !firstname ||
                  !email ||
                  !email.match(
                    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
                  ) ||
                  !message
              )}
              className="inline-flex my-3 items-center cursor-pointer disabled:cursor-default group uppercase align-middle text-center transition-all select-none whitespace-nowrap py-2 px-6 md:text-sm  text-base leading-normal no-underline rounded-full bg-primary-main hover:bg-transparent disabled:bg-background-paper disabled:text-text-main/80 disabled:border-transparent border-2 border-primary-main hover:text-primary-main text-white outline-none font-bold"
            >
              Submit
              <HiOutlineArrowLongRight className="w-[18px] h-[18px] ml-2 group-hover:ml-4 group-disabled:ml-2 transition-all duration-100" />
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DownLeftSide;
