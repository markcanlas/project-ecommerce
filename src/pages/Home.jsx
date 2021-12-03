import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import NewProducts from "../components/NewProducts";
import MonthlyProducts from "../components/MonthlyProducts";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <PopularProducts />
      <NewProducts />
      <MonthlyProducts />
      <Categories />
      <Footer />
    </div>
  );
};

export default Home;
