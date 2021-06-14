import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import RandomizerData from "./RandomizerData";
import Search from "./Search";

const RandomizerPage = () => {
  return (
    <>
      <Header />
      <Search />
      <RandomizerData />
      <Footer />
    </>
  );
};

export default RandomizerPage;
