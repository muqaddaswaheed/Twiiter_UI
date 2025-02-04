import React from "react";
import SideBar from "../Components/SideBar";
import RightBar from "../Components/RightBar";
import Main_Container from "../Components/Main_Container";

const Home = () => {
  return (
    <div className="grid grid-cols-[auto_1fr_auto] h-screen">
      {/* Left Sidebar */}
      <SideBar />

      {/* Main Content */}
      <div className="bg-white p-6">
        {/* Main content goes here */}
        <Main_Container />
      </div>

      {/* Right Sidebar */}
      <RightBar />
    </div>
  );
};

export default Home;
