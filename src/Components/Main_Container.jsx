import React, { useState, useRef } from "react";
import EmojiPicker from "emoji-picker-react";
import profile from "../assets/images/profile.png";
import {
  FaPlus,
  FaRegFile,
  FaCalendarCheck,
  FaMagic,
  FaRegComment,
  FaRetweet,
  FaHeart,
  FaShare,
} from "react-icons/fa";
import { FaSmile } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { addTweet, updateTweet, clearTweets } from "../Redux/tweetSlice";
import { toggleFollow } from "../Redux/followSlice";

export default function MainContainer() {
  const dispatch = useDispatch();
  const tweets = useSelector((state) => state.tweets);
  const followStates = useSelector((state) => state.follow);

  // Tweet Input & Tweets state
  const [tweetText, setTweetText] = useState("");

  // File input ref
  const fileInputRef = useRef(null);

  // Emoji Picker state
  const [emojiPickerVisible, setEmojiPickerVisible] = useState(false);
  const handleEmojiClick = (emojiData) => {
    setTweetText(tweetText + emojiData.emoji);
    setEmojiPickerVisible(false);
  };

  // Create a new tweet
  const handleTweet = () => {
    if (tweetText.trim() !== "") {
      const newTweet = {
        id: Date.now(),
        user: "John Doe",
        username: "@johndoe",
        time: "just now",
        content: tweetText,
        liked: false,
        comments: [],
      };
      dispatch(addTweet(newTweet));
      setTweetText("");
    }
  };

  // File handling
  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log("Selected file:", file);
    }
  };

  // Toggle like state for a tweet (by tweet id)
  const handleHeartClick = (id) => {
    dispatch(
      updateTweet({
        id,
        liked: !tweets.find((tweet) => tweet.id === id).liked,
      })
    );
  };

  // --- COMMENT FUNCTIONALITY ---
  const [openCommentTweetId, setOpenCommentTweetId] = useState(null);
  const [commentText, setCommentText] = useState("");

  const handleOpenCommentBox = (tweetId) => {
    setOpenCommentTweetId(tweetId);
  };

  const handleCommentPost = () => {
    if (commentText.trim() !== "" && openCommentTweetId) {
      const newComment = { id: Date.now(), text: commentText };
      dispatch(
        updateTweet({
          id: openCommentTweetId,
          comments: [
            ...tweets.find((tweet) => tweet.id === openCommentTweetId).comments,
            newComment,
          ],
        })
      );
      setCommentText("");
      setOpenCommentTweetId(null);
    }
  };

  const handleCancelComment = () => {
    setCommentText("");
    setOpenCommentTweetId(null);
  };

  // "Who to Follow" Section
  const whoToFollow = [
    {
      id: 1,
      img: profile,
      pholder: "Ellie Jamie and 20 others follow",
      name: "Linda Shelton #BlackLivesMatter",
      username: "@Linda_shelton",
      bio: "WordPress/PHP Geek, JavaScript Developer, Tools Creator, Always ready to help with code",
    },
    {
      id: 2,
      img: profile,
      pholder: "Ellie Jamie and 15 others follow",
      name: "Mark Anderson",
      username: "@mark_anderson",
      bio: "Frontend Developer, React Enthusiast, Open-source Contributor",
    },
  ];

  const handleClearTweets = () => {
    dispatch(clearTweets());
  };

  // Follow state management
  const handleFollowClick = (id) => {
    dispatch(toggleFollow(id));
  };

  return (
    <div className="flex flex-col w-full border-x border-gray-200 bg-gray-200">
      {/* Header */}
      <div className="flex items-center justify-between p-4 border-b border-gray-200 bg-white">
        <h2 className="text-lg font-bold">Home</h2>
        <FaMagic
          onClick={handleClearTweets}
          className="text-[#198ED6] cursor-pointer"
        />
      </div>

      {/* Tweet Input Section */}
      <div className="bg-white p-4 border-b border-gray-200 mb-2">
        <div className="flex items-start space-x-4">
          <img
            src={profile}
            alt="User Avatar"
            className="w-10 h-10 rounded-full bg-gray-200"
          />
          <div className="flex gap-1 h-26 flex-col w-full relative">
            <input
              type="text"
              placeholder="What's happening"
              value={tweetText}
              onChange={(e) => setTweetText(e.target.value)}
              className="w-full text-base my-3 font-semibold text-gray-500 border-none focus:ring-0 outline-none"
            />
            <div className="flex justify-between items-center mt-3 text-[#198ED6]">
              <div className="flex space-x-3">
                <FaPlus
                  className="cursor-pointer text-xl"
                  onClick={() => fileInputRef.current.click()}
                />
                <FaRegFile className="cursor-pointer text-xl fill-current" />
                <FaSmile
                  className="cursor-pointer text-xl"
                  onClick={() => setEmojiPickerVisible(!emojiPickerVisible)}
                />
                <FaCalendarCheck className="cursor-pointer text-xl" />
              </div>
              <button
                onClick={handleTweet}
                className="bg-[#198ED6] text-white px-4 py-2 rounded-full cursor-pointer font-semibold"
              >
                Tweet
              </button>
              <input
                type="file"
                ref={fileInputRef}
                style={{ display: "none" }}
                onChange={handleFileChange}
              />
              {emojiPickerVisible && (
                <div className="absolute mt-2 z-10">
                  <EmojiPicker onEmojiClick={handleEmojiClick} />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Tweets Section */}
      <div className="divide-y divide-gray-200">
        {tweets.map((tweet) => (
          <div
            key={tweet.id}
            className="p-4 border-b border-gray-200 bg-white "
          >
            <div className="flex space-x-4 ">
              <img
                src={profile}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1 ">
                <p className="font-bold ">
                  {tweet.user}{" "}
                  <span className="text-gray-500 font-normal">
                    {tweet.username} · {tweet.time}
                  </span>
                </p>
                <p className="text-gray-700">{tweet.content}</p>
                <div className="flex justify-around text-gray-500 mt-2">
                  <div
                    className="flex items-center space-x-1 cursor-pointer hover:text-blue-500"
                    onClick={() => handleOpenCommentBox(tweet.id)}
                  >
                    <FaRegComment />
                    <span>{tweet.comments.length}</span>{" "}
                  </div>

                  <div className="flex items-center space-x-1 cursor-pointer hover:text-green-500">
                    <FaRetweet /> <span>0</span>
                  </div>
                  <div className="flex items-center space-x-1 cursor-pointer">
                    <div
                      className="group flex items-center space-x-1 cursor-pointer"
                      onClick={() => handleHeartClick(tweet.id)}
                    >
                      <FaHeart
                        className={`${
                          tweet.liked
                            ? "text-red-500"
                            : "text-gray-500 group-hover:text-red-500"
                        }`}
                      />
                      <span
                        className={`${
                          tweet.liked
                            ? "text-red-500"
                            : "text-gray-500 group-hover:text-red-500"
                        }`}
                      >
                        {tweet.liked ? 1 : 0}
                      </span>
                    </div>
                  </div>
                  <div className="cursor-pointer hover:text-blue-500">
                    <FaShare />
                  </div>
                </div>
                {openCommentTweetId === tweet.id && (
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-white border p-4 w-80 rounded-md shadow-lg">
                    <h3 className="font-semibold">Comments</h3>
                    <textarea
                      value={commentText}
                      onChange={(e) => setCommentText(e.target.value)}
                      placeholder="Write a comment..."
                      className="w-full h-24 border p-2 mt-2"
                    />
                    <div className="flex justify-between mt-2 ">
                      <button
                        onClick={handleCancelComment}
                        className="text-gray-500"
                      >
                        Cancel
                      </button>
                      <button
                        onClick={handleCommentPost}
                        className="bg-blue-500 text-white px-4 py-2 rounded"
                      >
                        Post Comment
                      </button>
                    </div>
                    <div className="mt-3 ">
                      {tweet.comments.map((comment) => (
                        <div
                          key={comment.id}
                          className="text-sm text-gray-600 mt-2 "
                        >
                          {comment.text}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Follow Section */}

      <div className="border-t border-gray-200 bg-white my-6 ">
        <h2 className="font-bold text-lg p-4">Who to follow</h2>
        <div className="divide-y divide-gray-200 ">
          {whoToFollow.map((user) => (
            <div
              key={user.id}
              className="p-4 flex items-start space-x-4 hover:bg-gray-100"
            >
              <img
                src={profile}
                alt="User Avatar"
                className="w-10 h-10 rounded-full"
              />
              <div className="flex-1">
                <div className="flex gap-2">
                  <img
                    src={"https://via.placeholder.com/150"}
                    alt="User"
                    className="h-4 w-4 rounded-full"
                  />
                  <p className="text-gray-400">{user.pholder}</p>
                </div>
                <p className="font-semibold">{user.name}</p>
                <p className="text-gray-400 text-base">{user.username}</p>
                <p className="text-gray-700 text-base">{user.bio}</p>
              </div>
              <button
                onClick={() => handleFollowClick(user.id)}
                className={`border px-3 py-1 rounded-full font-semibold ${
                  followStates[user.id]
                    ? "bg-blue-500 text-white"
                    : "border-blue-500 text-[#198ED6] hover:bg-blue-100 cursor-pointer"
                }`}
              >
                {followStates[user.id] ? "Following" : "+ Follow"}
              </button>
            </div>
          ))}
        </div>
        <div className="p-4 text-blue-500 text-base font-normal text-center cursor-pointer hover:underline justify-center">
          See all suggestions
        </div>
      </div>
    </div>
  );
}
