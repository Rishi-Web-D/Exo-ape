import React from "react";
import Navbar from "./Components/Navbar";
import Page1 from "./Components/Page1";
import Page2 from "./Components/Page2";
import Page3 from "./Components/Page3";
import Page4 from "./Components/page4";
import Page5 from "./Components/Page5";
import Page6 from "./Components/Page6";
import Page7 from "./Components/Page7";

const App = () => {
  return (
    <div className="w-screen min-h-screen overflow-hidden">
      <Navbar  />
      <Page1 />
      {/* <Page2 />
      <Page3 />
      <Page4 />
      <Page5 />
      <Page6 />
      <Page7 /> */}
    </div>
  );
};

export default App;
