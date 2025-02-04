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

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="relative w-80 h-screen pl-6 mr-6 shadow-md p-4 bg-white">
      <div className="flex items-center bg-gray-200 rounded-full px-5 py-3 w-64">
        <FaSearch className="text-gray-500 text-lg mr-2" />
        <input
          className="outline-none w-full text-gray-700"
          type="text"
          placeholder="Search Twitter"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="flex justify-between items-center p-4 mt-5 bg-gray-100 rounded-lg">
        <h1 className="text-xl font-bold text-gray-700">Trends For You</h1>
        <div className="p-2 rounded-full bg-transparent hover:bg-blue-200 transition duration-200 cursor-pointer">
          <FaCog className="text-blue-500 text-xl hover:text-blue-700" />
        </div>
      </div>
      <div className="w-full max-w-md mx-auto p-4 bg-white shadow-lg rounded-lg">
        {filteredTweets.slice(0, visibleTweets).map((tweet, index) => (
          <div
            key={index}
            className="border-b border-gray-300 py-3 hover:bg-blue-100"
          >
            <div className="flex justify-between items-center">
              <span className="text-lg font-bold text-gray-800">
                {tweet.name}
              </span>
              <button
                onClick={() => toggleTweet(index)}
                className="text-gray-600 hover:text-blue-500 transition"
              >
                {openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
              </button>
            </div>
            {openIndex === index ? (
              <div className="mt-2 p-2 rounded-md">
                <p className="text-gray-700">{tweet.desc}</p>
                <span className="text-sm font-semibold text-gray-600 block mt-1">
                  {tweet.tweetCount} Tweets
                </span>
              </div>
            ) : (
              <span className="text-sm text-gray-600">
                {tweet.tweetCount} Tweets
              </span>
            )}
          </div>
        ))}
        {visibleTweets < filteredTweets.length && (
          <button
            onClick={loadMoreTweets}
            className="text-blue-500 hover:underline mt-3 block  text-sm"
          >
            See More
          </button>
        )}
      </div>
      <div className="mt-5 text-gray-700 text-xs text-center space-x-3">
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
