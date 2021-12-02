import React from "react";
import Navbar from "../components/Navbar";
import Slider from "../components/Slider";
import Categories from "../components/Categories";
import PopularProducts from "../components/PopularProducts";
import Products from "../components/Products";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider />
      <Categories />
      <PopularProducts />
      <Products />
      <Footer />
    </div>
  );
};

export default Home;
