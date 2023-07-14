import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

import SubHeader from "./SubHeader";
import Header from "./Header";
import Footer from "./Footer";
import { useTheme } from "next-themes";
import Image from "next/image";

const Layout = (props) => {
  const { children } = props;
  const router = useRouter();

  const [usertheme, setUserTheme] = useState("light");
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setUserTheme(theme);
  }, [theme]);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("loader");
      if (loader)
        setTimeout(() => {
          loader.style.display = "none";
        }, 3000);
    }
  }, []);

  const themeToggle = () => {
    if (theme === "dark") {
      setUserTheme("light");
      setTheme("light");
    } else {
      setUserTheme("dark");
      setTheme("dark");
    }
  };

  return (
    <>
      <div id="loader">
        <div>
          <Image
            width={500}
            height={500}
            src="/logo.png"
            className="rounded-[50%] w-[75px] h-[75px]"
          />
        </div>
      </div>
      <div className="flex flex-col min-h-screen max-w-[100vw] overflow-x-clip bg-background-default text-text-main">
        {router.pathname !== "/404" && (
          <>
            <SubHeader />
            <Header themeToggle={themeToggle} theme={usertheme} />
          </>
        )}
        <main className="flex-grow -z-1">{children}</main>
        {router.pathname !== "/404" && <Footer />}
      </div>
    </>
  );
};

export default Layout;
