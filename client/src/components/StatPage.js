import React from "react";
import Footer from "./Footer";
import Header from "./Header";
import PlayerStats from "./PlayerStats";
import Search from "./Search";

const StatPage = () => {
  return (
    <>
      <Header />
      <Search />
      <PlayerStats />
      <Footer />
    </>
  );
};

export default StatPage;
