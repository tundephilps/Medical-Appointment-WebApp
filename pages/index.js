import React from "react";
import Seo from "../components/Customs/Seo";
import { Home as HomeComponent } from "../components";
import Homepage from "./Homepage";
import About from "@/components/Home/About";
import Features from "@/components/Home/Features";

const Home = () => {
  return (
    <Seo title="Home" description="">
      <Homepage />
    </Seo>
  );
};

export default Home;
