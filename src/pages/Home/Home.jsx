import React from "react";
import Categories from "../../component/Categories/Categories";
import FeatureImage from "../../component/FeatureImage/FeatureImage";
import Slider from "../../component/Slider/Slider";

const Home = () => {
  return (
    <div>
      <Slider />
      <FeatureImage />
      <Categories />
    </div>
  );
};

export default Home;
