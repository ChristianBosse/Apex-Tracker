import React from "react";
import Profile from "./profile";
import Header from "./Header";
import Footer from "./Footer";
import Search from "./Search";

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <Search />
      <Profile />
      <Footer />
    </div>
  );
};

export default ProfilePage;
