import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Graphics from "../components/Home/Graphics/Graphics";
import NewArrivals from "../components/Home/NewArrivals/NewArrivals";
import SSD from "../components/Home/SSD/SSD";

const Home = () => {
  return (
    <div>
      <Banner />
      <NewArrivals />
      <Graphics />
      <SSD />
    </div>
  );
};

export default Home;
