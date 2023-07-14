import React from "react";

const Section = (props) => {
  const { id, children } = props;
  return (
    <section id={id}>
      {children && (
        <div className="container py-10 md:py-[70px] font-normal overflow-hidden px-4">
          {children}
        </div>
      )}
    </section>
  );
};

export default Section;
