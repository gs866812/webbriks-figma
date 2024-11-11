"use client";

import Banner from "@/components/Banner";
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
    </div>
  );
};

export default Home;
