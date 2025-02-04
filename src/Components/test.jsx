const [openIndex, setOpenIndex] = useState(null);
const [visibleTweets, setVisibleTweets] = useState(5); // Show 5 tweets initially
const [searchQuery, setSearchQuery] = useState(""); // State for search query
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
