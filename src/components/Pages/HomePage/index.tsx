import React from "react";
import Header from "../../Header";
import HomePageContent from "./HomePageContent";

const HomePage: React.FC = () => {
  return (
    <>
      <Header displayNav={true} />
      <HomePageContent />
    </>
  );
};

export default HomePage;
