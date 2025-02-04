import React, { useState } from "react";
import {
  FaHome,
  FaCompass,
  FaBell,
  FaEnvelope,
  FaBookmark,
  FaList,
  FaUser,
  FaEllipsisH,
} from "react-icons/fa";
import twitter from "../assets/images/twitter.webp";
import profile from "../assets/images/profile.png";
const SideBar = () => {
  const [activeItem, setActiveItem] = useState("");
  const item = [
    { name: "Home", Icon: <FaHome /> },
    { name: "Explore", Icon: <FaCompass /> },
    { name: "Notifications", Icon: <FaBell /> },
    { name: "Messages", Icon: <FaEnvelope /> },
    { name: "Bookmarks", Icon: <FaBookmark /> },
    { name: "Lists", Icon: <FaList /> },
    { name: "Profile", Icon: <FaUser /> },
    { name: "More", Icon: <FaEllipsisH /> },
  ];
  const handleClick = (item) => {
    setActiveItem(item);
    console.log(`${item} clicked!`);
  };
  return (
    <>
      <div className="relative w-72 h-screen bg-white  p-4">
        <aside className="flex flex-col h-full mx-auto pl-10">
          <div className="mb-6">
            <img src={twitter} alt="Twitter Logo" className="w-10 h-10 " />
          </div>

          <div className="mb-6 ">
            <ul className="space-y-1  ">
              {item.map((item, index) => (
                <li
                  key={index}
                  className="flex items-center group hover:bg-blue-200 hover:rounded-full gap-2 text-xl font-semibold text-gray-800 p-2 rounded-lg cursor-pointer transition duration-200"
                >
                  <span className="text-black font-bold group-hover:text-blue-500 transition-colors duration-200">
                    {item.Icon}
                  </span>{" "}
                  {/* Icon */}
                  <span
                    onClick={() => handleClick(item.name)}
                    className={` group-hover:text-blue-500 ${
                      activeItem === item.name
                        ? " text-black font-bold text-2xl"
                        : ""
                    }`}
                  >
                    {item.name}
                  </span>{" "}
                  {/* Text */}
                </li>
              ))}
            </ul>
          </div>

          {/* Tweet Button */}
          <button className="bg-blue-600 cursor-pointer text-white font-semibold text-lg py-2 px-4 rounded-full hover:bg-blue-600 transition duration-300">
            Tweet
          </button>

          {/* Profile Section */}
          <ul className="mt-auto">
            <li className="flex items-center gap-3 my-5 hover:bg-blue-200 hover:rounded-full rounded-lg cursor-pointer transition duration-200">
              <img
                className="w-14 h-14 rounded-full"
                src={profile}
                alt="Profile"
              />
              <div className="flex flex-col">
                <p className="text-gray-900 font-semibold">David HertBirt</p>
                <p className="text-gray-500 text-sm">@KingDevit</p>
              </div>
            </li>
          </ul>
        </aside>
      </div>
    </>
  );
};

export default SideBar;
