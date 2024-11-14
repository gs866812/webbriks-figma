"use client";

import Banner from "@/components/Banner";
import FunFact from "@/components/FunFact";
import WhoWeAre from "@/components/WhoWeAre";
import aos from "aos";
import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    aos.init({
      // You can customize the options here
      duration: 1000,
      easing: "ease-in-out",
      once: true, // Animation should happen only once - while scrolling down
    });
  }, []);
  return (
    <div>
      <section>
        <Banner/>
      </section>
      <section className="lg:py-10 py-5">
        <WhoWeAre/>
      </section>
      <section className="lg:py-10 py-5">
        <FunFact/>
      </section>
    </div>
  );
};

export default Home;
