import React from "react";
import Head from "next/head";

const Seo = (props) => {
  const { title, description, children } = props;
  return (
    <>
      <Head>
        {title && <title>{title + " | Med Experts"}</title>}
        {description && <meta name="description" content={description} />}
        {title && <meta name="og:title" property="og:title" content={title} />}
        {description && <meta name="twitter:card" content={description} />}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#4781fd" />
      </Head>
      {children}
    </>
  );
};

export default Seo;
