import React from "react";
import Banner from "../components/Home/Banner/Banner";
import Graphics from "../components/Home/Graphics/Graphics";
import NewArrivals from "../components/Home/NewArrivals/NewArrivals";

const Home = () => {
  return (
    <div>
      <Banner />
      <NewArrivals />
      <Graphics />
    </div>
  );
};

export default Home;
