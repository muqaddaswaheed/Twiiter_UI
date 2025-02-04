import React, { useState } from "react";
import { FaCog, FaSearch, FaChevronDown, FaChevronUp } from "react-icons/fa";

const RightBar = () => {
  const [openIndex, setOpenIndex] = useState(null);
  const [visibleTweets, setVisibleTweets] = useState(5);
  const [searchQuery, setSearchQuery] = useState("");

  const tweetsData = [
    {
      name: "#BBNaija",
      tweetCount: "274k",
      desc: "Discussion about Big Brother Naija.",
    },
    {
      name: "#TaylorSwift",
      tweetCount: "154k",
      desc: "Discussions about Taylor Swift's album.",
    },
    {
      name: "#Lover",
      tweetCount: "135k",
      desc: "Fans sharing love for Taylor Swift's songs.",
    },
    {
      name: "#Dora",
      tweetCount: "120k",
      desc: "Conversations about the character Dora.",
    },
    {
      name: "#Meta",
      tweetCount: "90k",
      desc: "Discussions on Meta's VR advancements.",
    },
    {
      name: "#AI",
      tweetCount: "200k",
      desc: "The latest news on Artificial Intelligence.",
    },
    {
      name: "#Crypto",
      tweetCount: "180k",
      desc: "Latest trends in cryptocurrency markets.",
    },
  ];

  const filteredTweets = tweetsData.filter((tweet) =>
    tweet.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleTweet = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const loadMoreTweets = () => {
    setVisibleTweets((prev) => prev + 2);
  };

  return (
    <div className="relative w-full h-screen pl-6  p-4 bg-white flex flex-col mr-4  ">
      {/* Search Bar */}
      <div className="scrool overflow-y-auto custom-scrollbar">
        <div className="flex w-full items-center bg-gray-200 rounded-full px-6 py-3">
          <FaSearch className="text-gray-400 text-lg mr-2" />
          <input
            className="outline-none w-full h-4 text-gray-500 font-bold bg-transparent"
            type="text"
            placeholder="Search Twitter"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>

        {/* Scrollable Section */}
        <div className="flex-1 mt-4 ">
          <div className="bg-gray-100 rounded p-0 ">
            <div className="flex justify-between items-center p-4 rounded-lg">
              <h1 className="text-xl font-bold text-gray-700">
                Trends For You
              </h1>
              <div className="rounded-full bg-transparent hover:bg-blue-100 transition duration-200 cursor-pointer">
                <FaCog className="text-[#198ED6] text-2xl cursor-pointer hover:text-blue-700" />
              </div>
            </div>

            {/* Tweet List */}
            <div className="w-full max-w-md mx-auto shadow-lg rounded-lg">
              {filteredTweets.slice(0, visibleTweets).map((tweet, index) => (
                <div
                  key={index}
                  className="border-b border-gray-300 cursor-pointer hover:bg-gray-200 w-full flex flex-col px-4 py-2"
                >
                  <div className="flex justify-between items-center w-full">
                    <span className="text-lg font-bold text-gray-800">
                      {tweet.name}
                    </span>
                    <button
                      onClick={() => toggleTweet(index)}
                      className="text-gray-600 hover:text-blue-500 transition cursor-pointer"
                    >
                      {openIndex === index ? (
                        <FaChevronUp />
                      ) : (
                        <FaChevronDown />
                      )}
                    </button>
                  </div>
                  {openIndex === index ? (
                    <div className="mt-2 rounded-md">
                      <p className="text-gray-700">{tweet.desc}</p>
                      <span className="text-sm font-semibold text-gray-600 block mt-1">
                        {tweet.tweetCount} Tweets
                      </span>
                    </div>
                  ) : (
                    <span className="text-sm text-gray-600 mt-1">
                      {tweet.tweetCount} Tweets
                    </span>
                  )}
                </div>
              ))}
              {visibleTweets < filteredTweets.length && (
                <button
                  onClick={loadMoreTweets}
                  className="text-blue-500 hover:underline mt-3 block text-sm"
                >
                  See More
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Footer (Non-Scrollable) */}
      <div className=" sticky mt-4 text-black text-sm space-x-3 py-4  border-gray-300">
        <span className="hover:underline cursor-pointer">Terms</span>
        <span className="hover:underline cursor-pointer">Privacy Policy</span>
        <span className="hover:underline cursor-pointer">Ads Info</span>
        <span className="hover:underline cursor-pointer">More</span>
        <p className="mt-2">© 2020 Twitter, Inc.</p>
      </div>
    </div>
  );
};

export default RightBar;
