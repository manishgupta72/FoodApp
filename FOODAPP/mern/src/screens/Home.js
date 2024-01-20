import React from "react";
import Footer from "../component/Footer";
import Card from "../component/Card";
import Slide from "../component/Slide";
import food from "../data.json";
const Home = () => {
  return (
    <div>
      <Slide />
      <div>
        <div className="row m-0">
          {food.map((item) => {
            return <Card item={item} />;
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
