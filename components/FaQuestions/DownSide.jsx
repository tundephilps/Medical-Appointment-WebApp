import React from "react";
import { HiQuestionMarkCircle } from "react-icons/hi";

const DownSide = () => {
  const FAQS = [
    {
      question: "What Is the capital Nigeria ?",
      answer:
        "Lor Dolor nisi corrupti cum itaque dolorum, ut, inventore iste voluptate a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the of Nigeria voluptates voluptates ?",
      answer:
        "Lor Dolor nisi a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the capital of Nigeria ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi corrupti cum itaque dolorum, ut, inventore iste voluptate a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the capital of fuga Nigeria ?",
      answer:
        "Lor Dolor nisi corrupti cum itaque dolorum, ut, inventore iste voluptate a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the of Nigeria voluptates voluptates ?",
      answer:
        "Lor Dolor nisi a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the capital of fuga Nigeria ?",
      answer:
        "Lor Dolor nisi corrupti cum itaque dolorum, ut, inventore iste voluptate a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the of Nigeria voluptates voluptates ?",
      answer:
        "Lor Dolor nisi a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the capital of Nigeria ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi corrupti cum itaque dolorum, ut, inventore iste voluptate a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the capital of fuga Nigeria ?",
      answer:
        "Lor Dolor nisi corrupti cum itaque dolorum, ut, inventore iste voluptate a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the of Nigeria voluptates voluptates ?",
      answer:
        "Lor Dolor nisi a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
    {
      question: "What Is the capital of Nigeria ?",
      answer:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor nisi corrupti cum itaque dolorum, ut, inventore iste voluptate a voluptates fuga beatae nobis labore, unde omnis architecto. Quaerat distinctio reprehenderit repellat cumque?the capital of Nigeria is delhi",
    },
  ];

  return (
    <div className="grid md:mt-8 text-left gap-8 md:grid-cols-2 px-2">
      {FAQS.map(({ question, answer }, index) => (
        <div
          key={index}
          className="border-2 border-text-main/10 text-sm md:text-base rounded-xl bg-text-main/5 p-5"
        >
          <h3 className="flex mb-4 text-lg font-semibold capitalize">
            <HiQuestionMarkCircle className="w-[26px] h-[26px] mr-1 mb-1 inline" />
            <div className="flex-shrink max-w-[80%]">{question}</div>
          </h3>
          <p className="font-normal">{answer}</p>
        </div>
      ))}
    </div>
  );
};

export default DownSide;
