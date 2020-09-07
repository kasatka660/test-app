import React from "react";
import Header from "../../Header";
import IntroPageContent from "./IntroPageContent";

const IntroPage: React.FC = () => {
  return (
    <div>
      <Header displayNav={false} />
      <IntroPageContent />
    </div>
  );
};

export default IntroPage;
